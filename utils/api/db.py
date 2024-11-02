import json
import oracledb
from dotenv import load_dotenv
import os

load_dotenv()

# Create a DSN string for the TLS connection
dsn = f"""
(DESCRIPTION=
    (ADDRESS=(PROTOCOL=tcps)(HOST={os.getenv('DB_HOST')})(PORT={os.getenv('DB_PORT')}))
    (CONNECT_DATA=(SERVICE_NAME={os.getenv('DB_SERVICE_NAME')}))
    (SECURITY=(ssl_server_dn_match=yes))
)
"""

def db(self):
    try:
        connection = oracledb.connect(
            user=os.getenv('DB_USERNAME'),
            password=os.getenv('DB_PASSWORD'),
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