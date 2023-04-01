'''Scratch Scraper with Selenium'''

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import chromedriver_autoinstaller
import pandas as pd
import requests
import time

driver = webdriver.Chrome(service=Service(chromedriver_autoinstaller.install()))
driver.get('https://scratch.mit.edu/explore/projects/all')


iteracoes = 0
for i in range(2):
    try:
        # Encontra todos os projetos antes de clicar no botão "carregar mais"
        projects_before = driver.find_elements(By.CLASS_NAME, 'thumbnail-image')

        # Encontra o botão "carregar mais" e clique nele
        load_more_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="projectBox"]/button'))
        )
        load_more_button.click()

        # Aguarda 4 segundos para carregar os projetos
        time.sleep(4)
        projects = driver.find_elements(By.CLASS_NAME, 'thumbnail-image')

        # Incrementa e exibe o número de iterações
        iteracoes += 1
        print(f'Iteração: {iteracoes}')

        # Verifica se o número de projetos antes e depois da requisição é o mesmo
        if len(projects) == len(projects_before):
            print('Não há mais projetos para carregar')
            break
    except:
        print('Não há mais projetos para carregar')
        break


# Encontra todos os projetos
projects = driver.find_elements(By.CLASS_NAME, 'thumbnail-image')
print(f'N° de projetos: {len(projects)}')

ids = []

# Itera sobre os projetos
for project in projects:
    href = project.get_attribute('href')
    id = href.split("/")[-2]
    ids.append(id)

# Fecha o navegador
driver.quit()

# Cria um DataFrame com os IDs dos projetos
df = pd.DataFrame({'id': ids})
df.to_csv('databases/ids.csv', index=False)

        


# for project in projects:
#     # Aguarda 5 segundo entre cada requisição
#     time.sleep(5)
#     href = project.get_attribute('href')
#     id = href.split("/")[-2]
#     ids.append(id)
#     url = 'https://scratchdb.lefty.one/v3/project/info/' + id
#     response = requests.get(url)
#     if response.status_code == 200:
#         # A requisição foi bem-sucedida
#         response_json = response.json()
#         title = response_json['title']
#         description = response_json['description']
#         instruction = response_json['instructions']
#         username = response_json['username']
#         hash_id = response_json['metadata']['hash']


#         titles.append(title)
#         descriptions.append(description)
#         instructions.append(instructions)
#         username.append(username)
#         print('Requisição bem-sucedida do projeto ' + id)
#     else:
#         # A requisição falhou
#         print('Erro na requisição do projeto ' + id + ': ' + str(response.status_code) + ' ' + response.reason)
#         titles.append(None)
#         descriptions.append(None)
#         instructions.append(None)


# # Cria um DataFrame com os IDs dos projetos
# df = pd.DataFrame({'id': ids, 'name': titles, 'description': descriptions, 'instructions': instructions})

# # Imprima o DataFrame
# df.head()

# df.to_csv('ids.csv', index=False)