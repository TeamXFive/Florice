from http.server import BaseHTTPRequestHandler
import sys
import os
import json
import bcrypt

# Import utils
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../")))
from utils.api.convert_datetimes import convert_datetimes
from utils.api.db import db, sendCors

def handleNotAllowed(self):
    self.send_response(405)
    self.send_header("Content-Type", "application/json")
    sendCors();    
    self.end_headers()
    response = {"error": "Method Not Allowed"}
    self.wfile.write(json.dumps(response).encode("utf-8"))

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        handleNotAllowed(self)

    def do_POST(self):
        connection, cursor = db(self)
        cursor = connection.cursor()

        contentLength = int(self.headers['Content-Length'])
        body = json.loads(self.rfile.read(contentLength).decode('utf-8'))

        query = f"""
            SELECT * FROM florice_user where email = '{body['email']}' OR username = '{body['email']}'
        """

        cursor.execute(query)        
        raw_data = cursor.fetchall()
        columns = [col[0].lower() for col in cursor.description]        
        data = [dict(zip(columns, row)) for row in raw_data][0]
        user = data.copy()
        data.pop('id', None)
        data.pop('password', None)
        data.pop('created_at', None)
        data.pop('updated_at', None)
        data.pop('deleted_at', None)
        json_data = json.dumps(data, default=convert_datetimes)

        validPassword = bcrypt.checkpw(body["password"].encode('utf-8'), user["password"].encode('utf-8'))

        if (json_data == '[]' or validPassword == False):
            self.send_response(401)
            self.send_header("Content-Type", "application/json")
            sendCors(self)
            self.end_headers()
            response = {"error": "User or password wrong."}
            self.wfile.write(json.dumps(response).encode("utf-8"))
            return

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        sendCors(self)
        self.end_headers()
        self.wfile.write(json_data.lower().encode('utf-8'))

    def do_PUT(self):
        handleNotAllowed(self)

    def do_DELETE(self):
        handleNotAllowed(self)