import json
import oracledb
import os
from index import dsn, convert_datetimes

def do_DELETE(self):
    # Establish the connection
    try:
        connection = oracledb.connect(
            user=os.getenv('DB_USERNAME'),
            password=os.getenv('DB_PASSWORD'),
            dsn=dsn
            )
        print("Connection successful!")

        # Create a cursor to interact with the database
        cursor = connection.cursor()

        # Execute a simple query
        cursor.execute("SELECT * FROM place")

        raw_data = cursor.fetchall()  # Fetch all rows

        # Get column names from cursor description
        columns = [col[0] for col in cursor.description]
        
        # Convert raw data (list of tuples) into a list of dictionaries
        data = [dict(zip(columns, row)) for row in raw_data]

        # Fetch and return json results
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        
        # dump data to json by converting datetime objects to strings
        json_data = json.dumps(data, default=convert_datetimes)

        self.wfile.write(json_data.encode('utf-8'))

    except oracledb.DatabaseError as e:
        error, = e.args
        self.send_response(500)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        response = {"error": str(error)}
        self.wfile.write(json.dumps(response).encode("utf-8"))

    finally:
        # Clean up
        if cursor:
            cursor.close()
        if connection:
            connection.close()