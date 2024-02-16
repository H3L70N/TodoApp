const endpoint = "http://localhost:8000/api/tasks/create/";

const creating = document.getElementById("creating");
const formdiv = document.getElementById("formdiv");
const answer = document.getElementById("answer");
const form = document.getElementById("formcreate");


creating.style.display = "none";

function createTask() {
  changeDisplay();

  const fields = document.getElementById("formcreate").elements;

  const title = fields.namedItem("title").value;
  const description = fields.namedItem("description").value;
  const due_date = fields.namedItem("due_date").value;
  const status = fields.namedItem("status").value;

  data = {
    title: title,
    description: description,
    due_date: due_date,
    status: status,
  };

  const create = async (data) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const status = response.status;

    if (status === 201) {
      display("Task Created!");
    } else if (status === 400) {
      message = "Incomplete or invalid data. Please fill all fields.";
      display(message);
    } else {
      display("Error creating task! Status Code: " + status);
    }
  };

  create(data);
}

function changeDisplay() {
  formdiv.style.display = "none";
  creating.style.display = "inline-block";
}

function display(message) {
  answer.innerHTML = message;
}

function formdisplay() {
  creating.style.display = "none";
  formdiv.style.display = "block";

  display("Creating Task...");
  form.reset();
}

function cleanForm(){
  
}