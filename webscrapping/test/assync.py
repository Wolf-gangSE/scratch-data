import time
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed, wait
import pandas as pd

# https://api.scratch.mit.edu/explore/projects?limit=40&offset=9960

# Função que faz a requisição para o endpoint com o offset especificado
def get_projects(offset, proxy):
    try:
        print(f'Offset: {offset} - Proxy: {proxy}')
        # Define o proxy na requisição
        proxies = {'http': proxy, 'https': proxy}

        # Faz a requisição com o offset especificado
        response = requests.get(f'https://api.scratch.mit.edu/explore/projects?limit=40&offset={offset}', proxies=proxies)
        return response.json()
    except Exception as e:
        print(e)
        print(f'Error with offset: {offset} - Proxy: {proxy}')
        return None
    
# Lista para armazenar os resultados
results = []
n_requests = 0

for i in range(1660):
    response_prox = requests.get('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=5000&country=all&ssl=all&anonymity=all')

    proxy_list = response_prox.text.splitlines()

    # Número de requisições a serem feitas
    num_requests_paral = 6

    # Cria um executor para processar as requisições paralelamente
    with ThreadPoolExecutor() as executor:
        print("Starting requests...")
        # Cria uma lista de tuplas com o offset e o proxy correspondente
        args_list = []
        for i in range(num_requests_paral):
            n_requests += 1
            offset = 40*n_requests
            proxy = proxy_list[i]
            args_list.append((offset, proxy))

        
        # Executa as requisições com o executor
        futures = []
        for args in args_list:
            future = executor.submit(get_projects, args[0], args[1])
            futures.append(future)

        wait(futures)
        
        # Coleta os resultados
        for future in futures:
            result = future.result()
            if result:
                results.append(result)
    
    time.sleep(1)

# Dataframe para armazenar os resultados
df = pd.DataFrame(columns=['id'])

# Imprime o número de resultados
print("Results:" + str(len(results)))

# Itera sobre os resultados
for result in results:
    if result is None:
        print('Result is None')
        continue
    # Itera sobre os projetos
    ids = []
    df_new_row = pd.DataFrame()
    for project in result:
        # Adiciona o ID do projeto ao DataFrame
        if isinstance(project, dict):
            print(project['id'])
            ids.append(project['id'])
    df_new_row['id'] = ids
    df = pd.concat([df, df_new_row], ignore_index=True)

# Salva o DataFrame em um arquivo CSV
df.to_csv('scratch.csv', index=False)