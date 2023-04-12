import pandas as pd
import time
import os
import sys

sys.path.insert(0, os.path.abspath('.'))

from utilities.projects import get_project_info, get_project_json, get_blocks_analysis

df = pd.read_csv('databases/scratch-projects.csv')

ids = df['id'].tolist()

# # Adiciona novas colunas ao dataframe
# df['author'] = ''
# df['title'] = ''
# df['description'] = ''
# df['instructions'] = ''
# df['public'] = True
# df['image'] = ''
# df['views'] = 0
# df['loves'] = 0
# df['favorites'] = 0
# df['remixes'] = 0
# df['token'] = ''
# df['created_at'] = ''
# df['modified_at'] = ''
# df['shared_at'] = ''
# df['total_blocks'] = 0
# df['n_events'] = 0
# df['n_looks'] = 0
# df['n_sounds'] = 0
# df['n_controls'] = 0
# df['n_pens'] = 0
# df['n_procedures'] = 0
# df['n_motions'] = 0
# df['n_datas'] = 0
# df['n_operators'] = 0
# df['n_sensings'] = 0
# df['n_arguments'] = 0

for id in ids:
    # Verifica se o projeto já foi adicionado ao dataframe através do title
    if df.loc[df['id'] == id, 'title'].isna().values[0]:
        try:
            project = get_project_info(id)
            if project is None:
                print(f'Project {id} not found')
                continue

            time.sleep(1)
            project_source = get_project_json(id, project['token'])
            if project_source is None:
                print(f'Project source {id} not found')
                continue

            blocks_analysis = get_blocks_analysis(project_source['targets'])
            if blocks_analysis is None:
                print(f'Blocks analysis {id} error')
                continue

            # Adiciona os dados de análise de blocos ao projeto
            valid_keys = ['n_events', 'n_looks', 'n_sounds', 'n_controls', 'n_pens', 'n_procedures', 'n_motions', 'n_datas', 'n_operators', 'n_sensings', 'n_arguments']
            by_type = blocks_analysis.get('by_type', None)

            if by_type:
                project['n_events'] = by_type.get('event', 0)
                project['n_looks'] = by_type.get('looks', 0)
                project['n_sounds'] = by_type.get('sound', 0)
                project['n_controls'] = by_type.get('control', 0)
                project['n_pens'] = by_type.get('pen', 0)
                project['n_procedures'] = by_type.get('procedures', 0)
                project['n_motions'] = by_type.get('motion', 0)
                project['n_datas'] = by_type.get('data', 0)
                project['n_operators'] = by_type.get('operator', 0)
                project['n_sensings'] = by_type.get('sensing', 0)
                project['n_arguments'] = by_type.get('argument', 0)
                project['total_blocks'] = sum(int(project[key]) for key in valid_keys)
            else:
                project['total_blocks'] = 0

            # Adiciona os dados do projeto ao dataframe
            df.loc[df['id'] == id, 'author'] = project['author']
            df.loc[df['id'] == id, 'title'] = project['title']
            df.loc[df['id'] == id, 'description'] = project['description']
            df.loc[df['id'] == id, 'instructions'] = project['instructions']
            df.loc[df['id'] == id, 'public'] = project['public']
            df.loc[df['id'] == id, 'image'] = project['image']
            df.loc[df['id'] == id, 'views'] = project['views']
            df.loc[df['id'] == id, 'loves'] = project['loves']
            df.loc[df['id'] == id, 'favorites'] = project['favorites']
            df.loc[df['id'] == id, 'remixes'] = project['remixes']
            df.loc[df['id'] == id, 'token'] = project['token']
            df.loc[df['id'] == id, 'created_at'] = project['created_at']
            df.loc[df['id'] == id, 'modified_at'] = project['modified_at']
            df.loc[df['id'] == id, 'shared_at'] = project['shared_at']
            df.loc[df['id'] == id, 'total_blocks'] = project['total_blocks']
            df.loc[df['id'] == id, 'n_events'] = project['n_events']
            df.loc[df['id'] == id, 'n_looks'] = project['n_looks']
            df.loc[df['id'] == id, 'n_sounds'] = project['n_sounds']
            df.loc[df['id'] == id, 'n_controls'] = project['n_controls']
            df.loc[df['id'] == id, 'n_pens'] = project['n_pens']
            df.loc[df['id'] == id, 'n_procedures'] = project['n_procedures']
            df.loc[df['id'] == id, 'n_motions'] = project['n_motions']
            df.loc[df['id'] == id, 'n_datas'] = project['n_datas']
            df.loc[df['id'] == id, 'n_operators'] = project['n_operators']
            df.loc[df['id'] == id, 'n_sensings'] = project['n_sensings']
            df.loc[df['id'] == id, 'n_arguments'] = project['n_arguments']

            print(f'Project {id} added to dataframe')
            # Salva o dataframe a cada 100 projetos adicionados
            if ids.index(id) % 100 == 0:
                df.to_csv('databases/scratch-projects.csv', index=False)


        except Exception as e:
            print(f'Error: {e}')

        time.sleep(1)
    else:
        print(f'Project {id} already in dataframe')

# Printa o tamanho do dataframe após a adição dos dados
print(df.shape)

# Salva o dataframe em um arquivo csv
df.to_csv('databases/scratch-projects.csv', index=False)
    