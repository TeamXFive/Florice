from http.server import BaseHTTPRequestHandler
import json
import oracledb

# Define your connection details
username = 'admin'
password = 'Florice2024@'
host = 'adb.sa-saopaulo-1.oraclecloud.com'  # e.g., 'your-db-name.adb.us-ashburn-1.oraclecloud.com'
port = 1522  # Default port for TLS connections
service_name = 'gb8435dbdc2d383_florice_high.adb.oraclecloud.com'  # e.g., 'your_db_name_high'
ssl_server_cert_dn = 'yes'  # Optional, but recommended

# Create a DSN string for the TLS connection
dsn = f"""
(DESCRIPTION=
    (ADDRESS=(PROTOCOL=tcps)(HOST={host})(PORT={port}))
    (CONNECT_DATA=(SERVICE_NAME={service_name}))
    (SECURITY=(ssl_server_dn_match=yes))
)
"""

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Establish the connection
        try:
            connection = oracledb.connect(user=username, password=password, dsn=dsn)
            print("Connection successful!")

            # Create a cursor to interact with the database
            cursor = connection.cursor()

            # Execute a simple query
            cursor.execute("SELECT * FROM catalogo")

            # Fetch and return json results
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            response = {"data": cursor.fetchall()}
            self.wfile.write(json.dumps(response).encode("utf-8"))

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
        

def main():
    return handler

if __name__ == "__main__":
    main()