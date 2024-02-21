import requests

endpoint = "http://localhost:8000/api/tasks/2"

response = requests.get(endpoint, json={"due_date": "2024-02-14T14:45Z", "status": "cancelled"})

print(response.json())
print(response.status_code)
