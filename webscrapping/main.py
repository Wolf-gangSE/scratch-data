import requests
import time
import pandas as pd

offset = 0

project_id_list = []

for i in range(250):
    try:
        url = "https://api.scratch.mit.edu/explore/projects?limit=40&offset=" + str(offset)
        offset += 40
        response = requests.get(url)
        if response.status_code != 200:
            print("Error with request number: ", i)
            continue
        projects = response.json()
        for project in projects:
            project_id_list.append(project["id"])
            #Add the id to the dataframe
        print("Request number: ", i)
    except:
        print("Error with request number: ", i)
    time.sleep(3)

print("--------------------")
print("Number of projects: ", len(project_id_list))
print("--------------------")
print("Last offset: ", offset)

# Add the ids to the dataframe
df = pd.DataFrame({'id': project_id_list})
df.to_csv("databases/scratch-projects.csv", index=False)