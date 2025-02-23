const taskInput = document.getElementById("user-input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list-container");

function addButton() {
  if (taskInput.value === "") {
    alert("You have entered an empty task.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    list.appendChild(li);
  }
}
