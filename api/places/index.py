from http.server import BaseHTTPRequestHandler
import json

# from delete import do_DELETE
from ...utils.api.convert_datetimes import convert_datetimes
from ...utils.api.db import db

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

    # def do_DELETE(self):
    #     do_DELETE(self)
