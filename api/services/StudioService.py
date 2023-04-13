import supabase
from api.services.ProjectService import ProjectService
from utilities.studio import get_studio_projects_id, count_studio_projects
import requests

class StudioService():
    def count_studio_projects(self, studio_id: int):
        count = count_studio_projects(studio_id)
        return count
    
    def get_studio_projects(self, supabase: supabase.Client, studio_id: int, offset: int):
        projects_id = get_studio_projects_id(studio_id, offset)
        if projects_id is None:
            return None
        projects = []
        for project_id in projects_id:
            project = ProjectService.fetch(project_id, supabase)
            if project is not None:
                projects.append(project[0])
        return projects