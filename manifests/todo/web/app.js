function addTask() {
  let input = document.getElementById("taskInput");
  let list = document.getElementById("taskList");

  if (input.value === "") {
    alert("Enter task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = input.value;

  list.appendChild(li);
  input.value = "";
}
