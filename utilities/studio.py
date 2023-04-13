import requests

def count_studio_projects(studio_id: int):
    url = "https://api.scratch.mit.edu/studios/" + str(studio_id)
    response = requests.get(url)
    if response.status_code != 200:
        print("Error getting studio info")
        return None
    studio = response.json()
    return studio["stats"]["projects"]

def get_studio_projects_id(studio_id: int, offset: int):
    
    url = "https://api.scratch.mit.edu/studios/" + str(studio_id) + "/projects?limit=10&offset=" + str(offset)
    response = requests.get(url)
    if response.status_code != 200:
        print("Error getting studio projects")
        return None
    projects = response.json()
    
    ids = []
    for project in projects:
        ids.append(project["id"])
    print(ids)
    
    return ids