from http.server import BaseHTTPRequestHandler
import json
import sys
import os
from urllib.parse import parse_qs

# Import utils
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from utils.api.convert_datetimes import convert_datetimes
from utils.api.db import db


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            connection, cursor = db(self)
            cursor = connection.cursor()

            cursor.execute("SELECT * FROM place")
            raw_data = cursor.fetchall() 

            columns = [col[0] for col in cursor.description]
            
            data = [dict(zip(columns, row)) for row in raw_data]
            json_data = json.dumps(data, default=convert_datetimes)

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json_data.encode('utf-8'))
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()

    def do_DELETE(self):
        try:
            local_path = self.path[self.path.find('?'):]
            params = parse_qs(local_path[1:])
            id = params['id'][0]

            connection, cursor = db(self)
            cursor = connection.cursor()

            cursor.execute(f"DELETE FROM place WHERE id = {id}")
            cursor.execute("COMMIT")
            
            self.send_response(200)
            self.end_headers()
            self.wfile.write("Deleted".encode('utf-8'))
        finally:
            if cursor:
                cursor.close()
            if connection:
                connection.close()
