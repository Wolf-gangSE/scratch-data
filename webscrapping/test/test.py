from test.test import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import chromedriver_autoinstaller
import pandas as pd
import requests
import time
import concurrent.futures


driver = webdriver.Chrome(service=Service(chromedriver_autoinstaller.install()))
driver.get('https://scratch.mit.edu/explore/projects/all')

for i in range(3):
    try:
        # Encontre o botão "carregar mais" e clique nele
        load_more_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="projectBox"]/button'))
        )
        time.sleep(1)
        load_more_button.click()
    except:
        print('Não há mais projetos para carregar')
        break

# Crie uma lista vazia para armazenar os IDs dos projetos
ids = []
titles = []
descriptions = []
instructions = []
usernames = []

# Encontre todos os projetos
projects = driver.find_elements(By.CLASS_NAME, 'thumbnail-image')
print(f'N° de projetos: {len(projects)}')
driver.quit()


def make_request_with_proxy(proxy):
    print(f'Fazendo requisição com o proxy {proxy}')
    try:
        url = 'https://scratchdb.lefty.one/v3/project/info/' + id
        response = requests.get(url, proxies={'http': proxy, 'https': proxy}, timeout=10)
        if response.status_code == 200:
            # A requisição foi bem-sucedida
            response_json = response.json()
            title = response_json['title']
            description = response_json['description']
            instruction = response_json['instructions']
            username = response_json['username']
            hash_id = response_json['metadata']['hash']

            return {'id': id, 'title': title, 'description': description, 'instruction': instruction, 'username': username, 'hash_id': hash_id}
        else:
            # A requisição falhou
            print(f'Erro na requisição do projeto {id}: {response.status_code} {response.reason}')
            return {'id': id, 'title': None, 'description': None, 'instruction': None, 'username': None, 'hash_id': None}
    except requests.exceptions.RequestException as e:
        print(f'Erro na requisição do projeto {id}: {str(e)}')
        return {'id': id, 'title': None, 'description': None, 'instruction': None, 'username': None, 'hash_id': None}

def make_requests_with_proxies(ids, proxies):
    print(f'Fazendo requisições com {len(proxies)} proxies')
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        future_to_proxy = {executor.submit(make_request_with_proxy, proxy, id): proxy for proxy in proxies for id in ids}
        for future in concurrent.futures.as_completed(future_to_proxy):
            proxy = future_to_proxy[future]
            try:
                result = future.result()
            except Exception as e:
                print(f'Erro ao fazer a requisição com o proxy {proxy}: {str(e)}')
            else:
                if result is not None:
                    results.append(result)
    return results

proxies = [
    'http://177.67.218.139:8080',
    'http://187.111.160.227:8080',
    'http://200.142.120.194:8080',
    'http://186.250.96.67:8080',
    'http://200.142.120.194:8080',
]

results = make_requests_with_proxies(ids, proxies)
for result in results:
    id = result['id']
    title = result['title']
    description = result['description']
    instruction = result['instruction']
    username = result['username']
    hash_id = result['hash_id']
    titles.append(title)
    descriptions.append(description)
    instructions.append(instructions)
    usernames.append(username)
    print(f'Requisição bem-sucedida do projeto {id}')

# Crie um DataFrame com os IDs dos projetos
df = pd.DataFrame({'id': ids, 'name': titles, 'description': descriptions, 'instructions': instructions})

# Imprima o DataFrame
df.head()

df.to_csv('ids.csv', index=False)