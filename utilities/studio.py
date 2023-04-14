import requests

def get_studio_info(studio_id: int):
    url = "https://api.scratch.mit.edu/studios/" + str(studio_id)
    response = requests.get(url)
    if response.status_code != 200:
        print("Error getting studio info")
        return None
    studio = response.json()

    studio = {
        "id": studio["id"],
        "title": studio["title"],
        "description": studio["description"],
        "image": studio["image"],
        "created_at": studio["history"]["created"],
        "modified_at": studio["history"]["modified"],
        "comments": studio["stats"]["comments"],
        "followers": studio["stats"]["followers"],
        "managers": studio["stats"]["managers"],
        "projects_count": studio["stats"]["projects"],
    }

    return studio

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