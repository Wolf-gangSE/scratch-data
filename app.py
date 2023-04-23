
from flask import Flask, send_from_directory
#from flask_cors import CORS #comment this on deployment
from api.ProjectResource import ProjectResource
from api.StudioResource import StudioResource
import os
from supabase import create_client, Client
from flask_restful import Api

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_ANON_KEY")

supabase: Client = create_client(url, key)

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
#CORS(app) #comment this on deployment
api = Api(app)

app.config['TIMEOUT'] = 60 

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


api.add_resource(ProjectResource, '/projects', '/projects/<int:id>', resource_class_kwargs={'supabase': supabase})

api.add_resource(StudioResource, '/studios/<int:id>', resource_class_kwargs={'supabase': supabase})

# if __name__ == "__main__":
#     app.run(debug=True)