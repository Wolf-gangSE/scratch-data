import time
import requests
import pandas as pd

df = pd.read_csv('databases/ids.csv')

projects = df['id'].tolist()

titles = []
descriptions = []
instructions = []
username = []
ids = []


for project in projects:
    # Aguarda 5 segundo entre cada requisição
    time.sleep(5)
    href = project.get_attribute('href')
    id = href.split("/")[-2]
    ids.append(id)
    url = 'https://scratchdb.lefty.one/v3/project/info/' + id
    response = requests.get(url)
    if response.status_code == 200:
        # A requisição foi bem-sucedida
        response_json = response.json()
        title = response_json['title']
        description = response_json['description']
        instruction = response_json['instructions']
        username = response_json['username']
        hash_id = response_json['metadata']['hash']


        titles.append(title)
        descriptions.append(description)
        instructions.append(instructions)
        username.append(username)
        print('Requisição bem-sucedida do projeto ' + id)
    else:
        # A requisição falhou
        print('Erro na requisição do projeto ' + id + ': ' + str(response.status_code) + ' ' + response.reason)
        titles.append(None)
        descriptions.append(None)
        instructions.append(None)


# Cria um DataFrame com os IDs dos projetos
df = pd.DataFrame({'id': ids, 'name': titles, 'description': descriptions, 'instructions': instructions})

# Imprima o DataFrame
df.head()

df.to_csv('ids.csv', index=False)