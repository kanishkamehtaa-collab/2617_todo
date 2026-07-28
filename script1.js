const inputBox = document.getElementById("input");
const addTask = document.getElementById("button");
const list = document.getElementById("ul");

let todos = [];

function addTodo() {

    const task = inputBox.value.trim();

    if (task == "") {
        alert("You forgot to write task!");
        return;
    }

    todos.push(task);

    inputBox.value = "";

    renderTodo();
}

function createList(item, index) {

    const li = document.createElement("li");

    li.innerText = item;

    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
        deleteList(index);
    });

    li.appendChild(deleteBtn);

    return li;
}

function deleteList(index) {

    todos.splice(index, 1);

    renderTodo();
}

function renderTodo() {

    list.innerText = "";

    todos.forEach((item, index) => {

        const li = createList(item, index);

        list.appendChild(li);

    });
}

addTask.addEventListener("click", addTodo);