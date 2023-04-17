import supabase
from api.services.ProjectService import ProjectService
from utilities.studio import get_studio_projects_id, get_studio_info
import requests

class StudioService():
    def get_studio_info(self, studio_id: int):
        studio = get_studio_info(studio_id)
        return studio
    
    def get_studio_projects(self, supabase: supabase.Client, studio_id: int, offset: int):
        projects_id = get_studio_projects_id(studio_id, offset)
        if projects_id is None:
            return None
        projects = []
        for project_id in projects_id:
            project = ProjectService.fetch(project_id, supabase)
            if project is not None:
                projects.append(project)
        return projects