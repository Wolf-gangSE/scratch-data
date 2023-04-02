from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import chromedriver_autoinstaller
import pandas as pd

# Configura o webdriver e carrega a página
driver = webdriver.Chrome(service=Service(chromedriver_autoinstaller.install()))
driver.get('https://scratch.mit.edu/explore/projects/all')



# Encontra todos os projetos
projects = []
while True:
    # Encontra os projetos atuais
    current_projects = driver.find_elements(By.CLASS_NAME, 'thumbnail-image')
    projects.extend(current_projects)
    print(f'N° de projetos: {len(projects)}')

    # Encontra o botão "carregar mais" e clica nele
    try:
        load_more_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, '//*[@id="projectBox"]/button'))
        )
        load_more_button.click()

        # Espera até que mais projetos sejam carregados
        WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, 'thumbnail-image'))
        )
    except:
        print('Não foi possível carregar mais projetos')
        break

# Coleta os IDs dos projetos
ids = []
for project in projects:
    href = project.get_attribute('href')
    id = href.split("/")[-2]
    ids.append(id)

# Fecha o navegador
driver.quit()

# Cria um DataFrame com os IDs dos projetos e salva em um arquivo CSV
df = pd.DataFrame({'id': ids})
df.to_csv('databases/ids.csv', index=False)

print(f'N° de projetos: {len(ids)}')