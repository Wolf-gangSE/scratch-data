import supabase
from api.services.ProjectService import ProjectService
from flask_restful import reqparse
from flask import Response, request
import json

class ProjectController():
    def fetch_all(supabase: supabase.Client):
        csv_data = ProjectService.get_projects_csv(supabase)

        if not csv_data:
            return Response('{"status": "error", "message": "Failed to get projects"}',
                            status=500,
                            content_type="application/json")

        # retorna o conteúdo do arquivo CSV no formato correto
        return Response(
            csv_data,
            mimetype="text/csv",
            headers={"Content-disposition":
                     "attachment; filename=projects.csv"})

    def fetch(id: int, supabase: supabase.Client):
        project = ProjectService.fetch(id, supabase)

        if not project:
            return Response('{"status": "error", "message": "Failed to fetch project"}',
                            status=500,
                            content_type="application/json")

        return Response('{"status": "success", "message": "Project fetched successfully", "project": ' + json.dumps(project) + '}',
                        status=200,
                        content_type="application/json")

    def create(supabase: supabase.Client):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True)
        args = parser.parse_args(request)

        response = ProjectService.create(args['id'], supabase)

        if not response:
            return Response('{"status": "error", "message": "Failed to create project"}',
                            status=500,
                            content_type="application/json")
        
        if response == "Project already exists":
            return Response('{"status": "error", "message": "Project already exists"}',
                            status=400,
                            content_type="application/json")

        return Response('{"status": "success", "message": "Project created successfully"}',
                        status=200,
                        content_type="application/json")