from http.server import HTTPServer, BaseHTTPRequestHandler
import importlib
import os
from dotenv import load_dotenv
import sys

load_dotenv()

class ApiRedirectHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.handle_request('do_GET')

    def do_POST(self):
        self.handle_request('do_POST')

    def do_PUT(self):
        self.handle_request('do_PUT')

    def do_DELETE(self):
        self.handle_request('do_DELETE')

    def handle_request(self, method):
        # Extract the path, removing leading "/api/"
        path = self.path.replace('/api/', '')
        if path.find('?') >= 0:
            path = path[0:path.find('?')]

        # Determine the base module name
        if not path:
            module_name = 'api.index'  # Default module
            file_path = 'api/index.py'
        else:
            # Construct the potential file path for the requested endpoint
            dir_path = os.path.join('api', *path.split('/'))  # Convert path to directory structure
            file_path = f"{dir_path}.py"  # Path for the .py file
            index_file_path = os.path.join(dir_path, 'index.py')  # Path for the index.py file
            module_name = f'api.{path.replace("/", ".")}'  # Corresponding module name

        print(f"Checking for file: {file_path}")  # Debug output
        print(f"Checking for index file: {index_file_path}")  # Debug output

        # Check if the requested path corresponds to an index file first
        if os.path.isdir(dir_path) and os.path.isfile(index_file_path):
            # If it is a directory and index.py exists, use that module
            module_name = f'api.{path}.index'  # Use the index module
            file_path = index_file_path
        elif not os.path.isfile(file_path):
            # If the file doesn't exist, return a 404 error
            self.send_error(404, f"Module not found: {module_name}")
            return

        # Check if the module is already loaded
        if module_name in sys.modules:
            api_module = sys.modules[module_name]
        else:
            try:
                # Attempt to import the module dynamically
                api_module = importlib.import_module(module_name)
            except ImportError as e:
                self.send_error(404, f"Module not found: {module_name}")
                return
        
        try:
            # Attempt to import the module dynamically
            api_module = importlib.import_module(module_name)

            # Check if the handler class exists and call the appropriate method
            if hasattr(api_module, 'handler'):
                handler_class = getattr(api_module, 'handler')
                if hasattr(handler_class, method):
                    getattr(handler_class, method)(self)
                else:
                    self.send_response(405)  # Method Not Allowed
                    self.end_headers()
                    self.wfile.write(f"{method} not allowed for this endpoint.".encode('utf-8'))
            else:
                raise ImportError(f"No 'handler' class found in the module '{module_name}'")
                
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(f"Error handling API request: {e}".encode('utf-8'))

if __name__ == '__main__':
    try:
        port = int(float(os.getenv('API_LOCAL_PORT', 8000)))
        server_address = ('', port)
        httpd = HTTPServer(server_address, ApiRedirectHandler)
        print(f"Server started on http://localhost:{port}")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("Server is shutting down...")
    finally:
        httpd.server_close()
        print("Server closed.")

