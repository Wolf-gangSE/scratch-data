import requests
import pandas as pd
from bs4 import BeautifulSoup

# Configura a URL e a sessão HTTP
url = 'https://scratch.mit.edu/explore/projects/all'
session = requests.Session()

# Coleta os IDs dos projetos
ids = []
page_num = 0
while True:
    # Faz a requisição GET para a página atual
    response = session.get(f'{url}?page={page_num}')

    # Interrompe o loop se a página não foi encontrada
    if response.status_code != 200:
        break

    # Extrai os IDs dos projetos da página atual
    soup = BeautifulSoup(response.content, 'html.parser')
    projects = soup.find_all('div', {'class': 'project-thumbnail'})

    for project in projects:
        href = project.find('a')['href']
        id = href.split("/")[-2]
        ids.append(id)

    # Incrementa o número da página
    page_num += 1

# Salva os IDs dos projetos em um arquivo CSV
df = pd.DataFrame({'id': ids})
df.to_csv('databases/ids.csv', index=False)

print(f'N° de projetos: {len(ids)}')