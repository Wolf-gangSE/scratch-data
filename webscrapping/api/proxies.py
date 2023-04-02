'''Proxies testing script'''

import requests

# Retorna os proxies
response_prox = requests.get(
    'https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=5000&country=all&ssl=all&anonymity=all')
proxy_list = response_prox.text.splitlines()

print(f'Number of proxies: {len(proxy_list)}')


def test_proxy(proxy):
    try:
        response = requests.get('https://www.google.com', proxies={'http': proxy, 'https': proxy}, timeout=10)
        if response.status_code == 200:
            print(f'Proxy {proxy} is working')
            return True
        else:
            print(f'Proxy {proxy} is not working')
            return False
    except:
        print(f'Proxy {proxy} is not working')
        return False
    
# Testa os proxies
working_proxies = []
for proxy in proxy_list[:100]:
    if test_proxy(proxy):
        working_proxies.append(proxy)

# Salva os proxies funcionais em um arquivo
with open('webscrapping/api/working_proxies.txt', 'w') as f:
    for proxy in working_proxies:
        f.write(proxy + '\n')