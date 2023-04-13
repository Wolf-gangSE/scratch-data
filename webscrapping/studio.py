import requests
import time
import os
import sys

sys.path.insert(0, os.path.abspath('.'))

from utilities.projects import get_project_info, get_project_json, get_blocks_analysis

ini = time.time()

offset = 0

def get_studio_projects_id(studio_id: int, offset: int):
    # get the count of projects in the studio
    url = "https://api.scratch.mit.edu/studios/" + str(studio_id)
    response = requests.get(url)
    if response.status_code != 200:
        print("Error getting studio info")
        return None
    studio = response.json()
    project_count = studio["stats"]["projects"]

    if offset >= project_count:
        return None
    
    url = "https://api.scratch.mit.edu/studios/" + str(studio_id) + "/projects?limit=10&offset=" + str(offset)
    response = requests.get(url)
    if response.status_code != 200:
        print("Error getting studio projects")
        return None
    projects = response.json()
    
    ids = []
    for project in projects:
        ids.append(project["id"])
    
    return ids

project_id_list = get_studio_projects_id(32272181, 0)

for id in project_id_list:

    project = get_project_info(id)
    project_source = get_project_json(id, project['token'])
    blocks_analysis = get_blocks_analysis(project_source['targets'])

    # Adiciona os dados de análise de blocos ao projeto
    valid_keys = ['n_events', 'n_looks', 'n_sounds', 'n_controls', 'n_pens', 'n_procedures', 'n_motions', 'n_datas', 'n_operators', 'n_sensings', 'n_arguments']
    by_type = blocks_analysis.get('by_type', None)

    if by_type:
        project['n_events'] = by_type.get('event', 0)
        project['n_looks'] = by_type.get('looks', 0)
        project['n_sounds'] = by_type.get('sound', 0)
        project['n_controls'] = by_type.get('control', 0)
        project['n_pens'] = by_type.get('pen', 0)
        project['n_procedures'] = by_type.get('procedures', 0)
        project['n_motions'] = by_type.get('motion', 0)
        project['n_datas'] = by_type.get('data', 0)
        project['n_operators'] = by_type.get('operator', 0)
        project['n_sensings'] = by_type.get('sensing', 0)
        project['n_arguments'] = by_type.get('argument', 0)
        project['total_blocks'] = sum(int(project[key]) for key in valid_keys)
    else:
        project['total_blocks'] = 0

    print(project)

fim = time.time()

print(fim - ini) 