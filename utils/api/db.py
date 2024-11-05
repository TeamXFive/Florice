import json
import oracledb
import os
from http.server import BaseHTTPRequestHandler
from urllib.parse import parse_qs
from .convert_datetimes import convert_datetimes

# Create a DSN string for the TLS connection
dsn = f"""
(DESCRIPTION=
    (ADDRESS=(PROTOCOL=tcps)(HOST={os.environ.get('DB_HOST')})(PORT={os.environ.get('DB_PORT')}))
    (CONNECT_DATA=(SERVICE_NAME={os.environ.get('DB_SERVICE_NAME')}))
    (SECURITY=(ssl_server_dn_match=yes))
)
"""

def db(self):
    try:
        connection = oracledb.connect(
            user=os.environ.get('DB_USERNAME'),
            password=os.environ.get('DB_PASSWORD'),
            dsn=dsn
            )
        print("Connection successful!")

        # Create a cursor to interact with the database
        cursor = connection.cursor()
        return connection, cursor

    except oracledb.DatabaseError as e:
        error, = e.args
        self.send_response(500)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        response = {"error": str(error)}
        self.wfile.write(json.dumps(response).encode("utf-8"))

def sendCors(self):    
    allowed_origins = {"http://localhost:5173", "https://florice-blue.vercel.app"}
    origin = self.headers.get("Origin")
    if origin in allowed_origins:
        self.send_header("Access-Control-Allow-Origin", origin)

def get(self, table):
    try:
        connection, cursor = db(self)
        cursor = connection.cursor()

        cursor.execute(f"SELECT * FROM {table} ORDER BY id ASC")
        raw_data = cursor.fetchall() 

        columns = [col[0] for col in cursor.description]
        
        data = [dict(zip(columns, row)) for row in raw_data]
        json_data = json.dumps(data, default=convert_datetimes)

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        self.wfile.write(json_data.lower().encode('utf-8'))
    except oracledb.DatabaseError as e:
        error, = e.args
        self.send_response(500)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        response = {"error": str(error)}
        self.wfile.write(json.dumps(response).encode("utf-8"))
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

def post(self, table):
    try:            
        connection, cursor = db(self)
        cursor = connection.cursor()

        contentLength = int(self.headers['Content-Length'])
        body = json.loads(self.rfile.read(contentLength).decode('utf-8'))

        insertContent = ''
        for key,value in body.items():
            insertContent += f"'{value}' as {key},"
        insertContent = insertContent.strip(',')

        body.keys()

        query = f"""
            INSERT INTO {table}
                ({", ".join(body.keys())}, created_at, updated_at)
                VALUES (:{", :".join(body.keys())}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            RETURNING id into :id
        """

        id_var = cursor.var(oracledb.NUMBER)  # Create an output variable for the id
        body["id"] = id_var  

        cursor.execute(query, body)
        inserted_id = int(id_var.getvalue()[0])
        cursor.execute("COMMIT")
        cursor.execute(f"SELECT * FROM {table} WHERE id = {inserted_id}")
        
        raw_data = cursor.fetchall() 

        columns = [col[0] for col in cursor.description]
        
        data = [dict(zip(columns, row)) for row in raw_data]
        json_data = json.dumps(data[0], default=convert_datetimes)

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        self.wfile.write(json_data.lower().encode('utf-8'))
    except oracledb.DatabaseError as e:
        error, = e.args
        self.send_response(500)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        response = {"error": str(error)}
        self.wfile.write(json.dumps(response).encode("utf-8"))
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

def put(self, table):
    try:
        local_path = self.path[self.path.find('?'):]
        params = parse_qs(local_path[1:])
        id = params['id'][0]

        connection, cursor = db(self)
        cursor = connection.cursor()

        contentLength = int(self.headers['Content-Length'])
        body = json.loads(self.rfile.read(contentLength).decode('utf-8'))

        setContent = ''
        for key,value in body.items():
            setContent += f"{key} = '{value}',"
        setContent = setContent.strip(',')

        cursor.execute(f"UPDATE {table} SET {setContent} WHERE id = {id}")
        cursor.execute("COMMIT")
        cursor.execute(f"SELECT * FROM {table} WHERE id = {id}")
        
        raw_data = cursor.fetchall() 

        columns = [col[0] for col in cursor.description]
        
        data = [dict(zip(columns, row)) for row in raw_data]
        json_data = json.dumps(data[0], default=convert_datetimes)

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        self.wfile.write(json_data.lower().encode('utf-8'))
    except oracledb.DatabaseError as e:
        error, = e.args
        self.send_response(500)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        response = {"error": str(error)}
        self.wfile.write(json.dumps(response).encode("utf-8"))
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

def delete(self, table):
    try:
        local_path = self.path[self.path.find('?'):]
        params = parse_qs(local_path[1:])
        id = params['id'][0]

        connection, cursor = db(self)
        cursor = connection.cursor()

        cursor.execute(f"DELETE FROM {table} WHERE id = {id}")
        cursor.execute("COMMIT")
        
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        response = {"error": "Deleted"}
        self.wfile.write(json.dumps(response).encode("utf-8"))
    except oracledb.DatabaseError as e:
        error, = e.args
        self.send_response(500)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        response = {"error": str(error)}
        self.wfile.write(json.dumps(response).encode("utf-8"))
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()
