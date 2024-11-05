from http.server import BaseHTTPRequestHandler
import sys
import os
from urllib.parse import parse_qs

# Import utils
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from utils.api.convert_datetimes import convert_datetimes
from utils.api.db import db, get, post, put, delete

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        get(self, 'catalog')

    def do_POST(self):
        post(self, 'catalog')

    def do_PUT(self):
        put(self, 'catalog')

    def do_DELETE(self):
        delete(self, 'catalog')