// alert("Hello World");
// what to do for this ToDo_App
// 1. Add a new task  (input)
// 2. Add a new task to the list (button)
// 3. Render the list of tasks  (ul)  (li)
// 4. Delete a task from the list  (button)

// 1. Add a new task  (input)
const addbutton = document.getElementById("add-button");
const todoinput = document.getElementById("todo-input");

addbutton.addEventListener("click", function () {
  const taskValue = todoinput.value;
  console.log(`Task entered by user: ${taskValue}`);

  const li = document.createElement("li");
  li.textContent = taskValue;
  // 4. Delete a task from the list  (button)
  const deleteButton = document.createElement("Button");
  deleteButton.textContent = "X";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    todolist.removeChild(li);
  });

  // 3. Render the list of tasks  (ul)  (li)
  const todolist = document.getElementById("todo-list");
  todolist.appendChild(li);
  todoinput.value = "";
});
