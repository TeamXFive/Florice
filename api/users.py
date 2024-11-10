from http.server import BaseHTTPRequestHandler
import sys
import os
import json

# Import utils
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../")))
from utils.api.db import post, put, delete, sendCors

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(405)
        self.send_header("Content-Type", "application/json")        
        sendCors();
        self.end_headers()
        response = {"error": "Method Not Allowed"}
        self.wfile.write(json.dumps(response).encode("utf-8"))

    def do_POST(self):
        post(self, 'florice_user')

    def do_PUT(self):
        put(self, 'florice_user')

    def do_DELETE(self):
        delete(self, 'florice_user')