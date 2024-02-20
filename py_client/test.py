import requests

endpoint = "http://localhost:8000/api/tasks/create/"

response = requests.post(endpoint, json={"title": "Teste", "description": "New Task Test", "due_date": "2024-02-12T22:30", "status": "Pending"})

print(response.json())
print(response.status_code)
