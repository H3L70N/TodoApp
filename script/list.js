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

  table.className = 'tabela';

    const head = document.createElement("tr");
    head.className = 'head';

    const title = document.createElement("th");
    const description = document.createElement("th");
    const due_date = document.createElement("th");
    const status = document.createElement("th");

    title.appendChild(document.createTextNode("Title"));
    description.appendChild(document.createTextNode("Description"));
    due_date.appendChild(document.createTextNode("Due date and time"));
    status.appendChild(document.createTextNode("Status"));

    head.appendChild(title);
    head.appendChild(description);
    head.appendChild(due_date);
    head.appendChild(status);

    table.appendChild(head);

  for (const item in data) {
    const tr = document.createElement("tr");
    tr.className = 'linha';

    const title = document.createElement("td");
    const description = document.createElement("td");
    const due_date = document.createElement("td");
    const status = document.createElement("td");

    title.className = 'cell';
    description.className = 'cell';
    due_date.className = 'cell';
    status.className = 'cell';

    title.appendChild(document.createTextNode(`${data[item].title}`));
    description.appendChild(document.createTextNode(`${data[item].description}`));
    due_date.appendChild(document.createTextNode(`${formatDateTime(data[item].due_date)}`));
    status.appendChild(document.createTextNode(`${data[item].status}`));

    tr.appendChild(title);
    tr.appendChild(description);
    tr.appendChild(due_date);
    tr.appendChild(status);

    table.appendChild(tr);
  }

  listdiv.appendChild(table);
}

function formatDateTime(dateTime){
    return dateTime.replace("T", " ").replace('Z', '');
}