import time
import requests
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import chromedriver_autoinstaller

def get_project_info(id: int):
    url = 'https://api.scratch.mit.edu/projects/' + str(id)
    response = requests.get(url)
    project = {}
    # A requisição foi bem-sucedida
    if response.status_code == 200:
        # A requisição foi bem-sucedida
        try:
            response_json = response.json()
            author = response_json['author']['username']
            title = response_json['title']
            description = response_json['description']
            instructions = response_json['instructions']
            public = response_json['public']
            image = response_json['image']
            created_at = response_json['history']['created']
            modified_at = response_json['history']['modified']
            shared_at = response_json['history']['shared']
            views = response_json['stats']['views']
            loves = response_json['stats']['loves']
            favorites = response_json['stats']['favorites']
            remixes = response_json['stats']['remixes']
            token = response_json['project_token']

            project = {
                'id': id,
                'author': author,
                'title': title,
                'description': description,
                'instructions': instructions,
                'public': public,
                'image': image,
                'created_at': created_at,
                'modified_at': modified_at,
                'shared_at': shared_at,
                'views': views,
                'loves': loves,
                'favorites': favorites,
                'remixes': remixes,
                'token': token
            }

            return project
        except Exception as e:
            print(e)
            return None
    else:
        # A requisição falhou
        print('Erro na requisição do projeto ' + str(id) + ': ' + str(response.status_code) + ' ' + response.reason)
        return None

def get_project_json(id: int, token: str):
    url = 'https://projects.scratch.mit.edu/' + str(id) + '?token=' + token
    
    response = requests.get(url)
    # A requisição foi bem-sucedida
    if response.status_code == 200:
        try:
            print('Requisição bem sucedida')
            # A requisição foi bem-sucedida
            response_json = response.json()
            return response_json
        except Exception as e:
            print(e)
            return None
    else:
        return None

def get_project_source(id: int):
    driver = webdriver.Chrome(service=Service(chromedriver_autoinstaller.install()))
    driver.get('https://scratch.mit.edu/explore/projects/' + str(id))