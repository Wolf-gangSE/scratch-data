from flask import request
from flask_restful import Resource, reqparse

from api.controllers.ProjectController import ProjectController


class ProjectResource(Resource):
    def __init__(self, supabase):
        self.supabase = supabase
        
    def get(self, id=None):
        if id is not None:
            return ProjectController.fetch(id, self.supabase)
        return ProjectController.fetch_all(self.supabase)
    
    def post(self):
        return ProjectController.create(self.supabase)