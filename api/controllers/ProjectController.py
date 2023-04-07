import supabase
from api.services.ProjectService import ProjectService
from flask_restful import reqparse
from flask import Response, request

class ProjectController():
    def fetch_all(supabase: supabase.Client):
        csv_data = ProjectService.get_projects_csv(supabase)

        if not csv_data:
            return {
                "status": "error",
                "message": "Failed to get projects"
            }

        # retorna o conteúdo do arquivo CSV no formato correto
        return Response(
            csv_data,
            mimetype="text/csv",
            headers={"Content-disposition":
                     "attachment; filename=projects.csv"})

    def fetch(id: int, supabase: supabase.Client):
        project = ProjectService.fetch(id, supabase)

        if not project:
            return {
                "status": "error",
                "message": "Failed to fetch project"
            }
  
        return {
            "status": "success",
            "message": "Project fetched successfully",
            "project": project
        }

    def create(supabase: supabase.Client):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True)
        args = parser.parse_args(request)

        response = ProjectService.create(args['id'], supabase)

        if not response:
            return {
                "status": "error",
                "message": "Failed to create project"
            }
        
        if response == "Project already exists":
            return {
                "status": "error",
                "message": response
            }

        return {
            "status": "success",
            "message": "Project created successfully"
        }