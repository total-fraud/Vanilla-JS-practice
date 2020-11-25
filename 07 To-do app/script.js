const input = document.querySelector(".input-note"),
    ul = document.querySelector(".todos"),
    addBtn = document.querySelector(".add"),
    clear = document.querySelector(".clear");



function createTodo() {
    const li = document.createElement("li");
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
        input.style.outline = "none";
        input.value = "";
        deleteLi(deleteBtn);
        checkComplete(inputCheckBox);
    } else {
        input.style.outline = "1px solid red";
    }

}

function deleteLi(element) {
    element.addEventListener("click", () => {
        element.parentElement.remove();
    });
}
function checkComplete(element) {
    element.addEventListener("change", () => {
        if (element.checked) {
            element.parentElement.style.backgroundColor = "rgba(88, 235, 52, 0.3)";
        } else {
            element.parentElement.style.backgroundColor = "transparent";
        }

    })
}

input.addEventListener("keypress", (keyPressed) => {
    if (keyPressed.keyCode == 13) {
        createTodo();
    }
});

addBtn.addEventListener("click", () => {
    createTodo();
});


clear.addEventListener("click", () => {
    const trash = document.querySelectorAll("li");
    trash.forEach((item) => {
        item.parentNode.removeChild(item);
    });
});

