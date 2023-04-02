'''Scratch API request example with proxies and ThreadPoolExecutor'''

from random import randint
import time
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed, wait
import pandas as pd

#carrega os proxies
with open('webscrapping/api/working_proxies.txt', 'r') as f:
    proxy_list = f.read().splitlines()

# Melhores proxies
# 187.1.57.206:20183
# 34.77.204.1:3128
# 135.181.248.71:8080

# Lista para armazenar os resultados
results = []
# Número de requisições feitas
n_requests = 0
# Número de requisições que falharam
n_requests_failed = 0

# https://api.scratch.mit.edu/explore/projects?limit=40&offset=9960

# Função que faz a requisição para o endpoint com o offset especificado

def get_projects(offset, proxy):
    try:
        print(f'Offset: {offset} - Proxy: {proxy}')
        # Define o proxy na requisição
        proxies = {'http': proxy, 'https': proxy}

        # Faz a requisição com o offset especificado
        response = requests.get(
            f'https://api.scratch.mit.edu/explore/projects?limit=40&offset={offset}', proxies=proxies)
        return response.json()
    except Exception as e:
        # print(e)
        # Incrementa o número de requisições que falharam
        global n_requests_failed
        n_requests_failed += 1
        print(f'Error with offset: {offset} - Proxy: {proxy}')
        return None


for i in range(83):

    # Número de requisições a serem feitas
    num_requests_paral = 3

    # Cria um executor para processar as requisições paralelamente
    with ThreadPoolExecutor() as executor:
        print("Starting requests...")
        # Cria uma lista de tuplas com o offset e o proxy correspondente
        args_list = []
        for i in range(num_requests_paral):
            n_requests += 1
            offset = 40*n_requests
            proxy = proxy_list[randint(0, len(proxy_list)-1)]
            args_list.append((offset, proxy))

        # Executa as requisições com o executor
        futures = []
        for args in args_list:
            future = executor.submit(get_projects, args[0], args[1])
            futures.append(future)

        # Espera todas as requisições terminarem
        wait(futures)

        # Coleta os resultados
        for future in futures:
            result = future.result()
            if result:
                results.append(result)

    # Espera 1 segundo para evitar bloqueio
    time.sleep(2)

# Dataframe para armazenar os resultados
df = pd.DataFrame(columns=['id'])

# Exibe o número de resultados
print("Results: " + str(len(results)))

# Itera sobre os resultados
for result in results:
    # Itera sobre os projetos
    ids = []
    df_new_row = pd.DataFrame()
    n_projects = 0
    for project in result:
        n_projects += 1
        # Adiciona o ID do projeto ao DataFrame
        if isinstance(project, dict):
            ids.append(project['id'])
    df_new_row['id'] = ids
    df = pd.concat([df, df_new_row], ignore_index=True)
    print(f'N° de projetos: {n_projects}')
    if n_projects == 1:
        print(result)

# Exibe o número de requisições que falharam
print("Failed requests: " + str(n_requests_failed))

# Salva o DataFrame em um arquivo CSV
df.to_csv('databases/scratch-test.csv', index=False)
