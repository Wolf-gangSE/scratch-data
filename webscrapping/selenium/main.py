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
while True:
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

        


