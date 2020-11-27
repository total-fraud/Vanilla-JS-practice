const input = document.querySelector(".input-note"),
    ul = document.querySelector(".todos"),
    save = document.querySelector(".save"),
    addBtn = document.querySelector(".add"),
    clear = document.querySelector(".clear");

function createTodo() {
    const li = document.createElement("li"),
        listText = document.createElement("div"),
        deleteBtn = document.createElement("button"),
        inputCheckBox = document.createElement("input"),
        newTodo = input.value;
    inputCheckBox.type = "checkbox";
    listText.classList.add("listText");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = "Delete";
    if (newTodo) {
        listText.append(newTodo);
        ul.appendChild(li).append(inputCheckBox, listText, deleteBtn);
        input.style.border = "none";
        input.value = "";
        deleteLi(deleteBtn);
        checkComplete(inputCheckBox);
    } else {
        input.style.border = "1px solid red";
    }
}

function deleteLi(element) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
    });
}

function checkComplete(element) {

    element.addEventListener("change", () => {
        if (element.checked) {
            element.parentElement.style.backgroundColor = "rgba(170, 75, 107, 0.3)";
            element.nextSibling.style.textDecoration = "line-through";
        } else {
            element.parentElement.style.backgroundColor = "transparent";
            element.nextSibling.style.textDecoration = "none";
        }

    })
}

function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
        ul.innerHTML = data;
        const deleteButtons = document.querySelectorAll("deleteBtn");
        for (const button of deleteButtons) {
            deleteLi(button);
        }
    }
}

input.addEventListener("keypress", (keyPressed) => {
    if (keyPressed.keyCode == 13) {
        createTodo();
    }
});

save.addEventListener("click", () => {
    localStorage.setItem("todos", ul.innerHTML);
});

addBtn.addEventListener("click", () => {
    createTodo();
});

clear.addEventListener("click", () => {
    ul.innerHTML = "";
    localStorage.removeItem('todos', ul.innerHTML);
});

loadTodos()