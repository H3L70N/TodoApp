const endpoint = "http://localhost:8000/api/tasks/";

const listdiv = document.getElementById("list");

listTasks();

function listTasks() {
  getTasks();
}

async function getTasks() {
  const response = await fetch(endpoint);
  const response_json = await response.json();

  console.log(response_json);
  createTable(response_json);
}

function createTable(data) {
  const table = document.createElement("table");

  for (const item in data) {
    const tr = document.createElement("tr");

    const title = document.createElement("td");
    const description = document.createElement("td");
    const due_date = document.createElement("td");
    const status = document.createElement("td");

    title.appendChild(document.createTextNode(`${data[item].title}`));
    description.appendChild(document.createTextNode(`${data[item].description}`));
    due_date.appendChild(document.createTextNode(`${data[item].due_date}`));
    status.appendChild(document.createTextNode(`${data[item].status}`));

    tr.appendChild(title);
    tr.appendChild(description);
    tr.appendChild(due_date);
    tr.appendChild(status);

    table.appendChild(tr);
  }

  listdiv.appendChild(table);
}
