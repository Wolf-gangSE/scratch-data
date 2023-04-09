import supabase
import pandas as pd
from utilities.projects import get_project_info, get_project_json, get_blocks_analysis

class ProjectService():
  def get_projects_csv(supabase: supabase.Client):
    try:
        response = supabase.table('scratch-projects').select("*").execute()
        projects = response.data
    except Exception as e:
        print(e)
        return None
    
    if not projects:
        return None
    
    # cria um dataframe do Pandas com os dados
    df = pd.DataFrame(projects)

    # converte o dataframe para um arquivo CSV em memória
    csv_data = df.to_csv(index=False)

    return csv_data
  
  def fetch(id: int, supabase: supabase.Client):
      try:
            # Verifica se o projeto já existe no banco de dados
            response = supabase.table('scratch-projects').select("*").eq("id", id).execute()
            if response.data and len(response.data) > 0:
                return response.data
            else:
                return ProjectService.create(id, supabase)
            
      except Exception as e:
            print(e)
            return None
          
  def create(id: int, supabase: supabase.Client):
      try:
            #verifica se o projeto existe 
            project_exist = supabase.table('scratch-projects').select("*").eq("id", id).execute()
            if project_exist.data:
                return "Project already exists"

            project = get_project_info(id)
            project_source = get_project_json(id, project['token'])
            blocks_analysis = get_blocks_analysis(project_source['targets'])

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

            response = supabase.table('scratch-projects').insert(project).execute()

            return response.data
      except Exception as e:
          print(e)
          return None