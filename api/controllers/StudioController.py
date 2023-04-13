import supabase
from api.services.StudioService import StudioService
from flask_restful import reqparse
from flask import Response
import json


class StudioController():
    def fetch(self, supabase: supabase.Client, studio_id: int, offset: int):
        count = StudioService().count_studio_projects(studio_id)

        if offset >= count:
            return Response('{"status": "error", "message": "Offset is greater than the number of projects"',
                             status=400,
                             content_type="application/json")
        
        projects = StudioService().get_studio_projects(supabase, studio_id, offset)

        if projects is None:
            return Response('{"status": "error", "message": "Failed to get studio projects"',
                             status=500,
                             content_type="application/json")
        
        return Response('{"status": "success", "message": "Studio projects fetched successfully",' + ' "count": ' + str(count) + ', "projects": ' + json.dumps(projects) + '}',
                        status=200,
                        content_type="application/json")