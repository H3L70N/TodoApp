const endpoint= "http://localhost:8000/api/post/"

function createTask(){

    const fields = document.getElementById("formcreate").elements;

    const title = fields.namedItem("title").value;
    const description = fields.namedItem("description").value;
    const due_date = fields.namedItem("due_date").value;
    const status = fields.namedItem("status").value;

    data = {
        title: title,
        description: description,
        due_date: due_date,
        status: status
    }
    
    const create = async () => {
        const response = await fetch(endpoint, {
            mode:"no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        response = await response.json();
        console.log(response);
    }
    create()


}

