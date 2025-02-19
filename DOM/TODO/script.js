document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });
    taskItem.appendChild(completeBtn);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
      const newTaskText = prompt("Edit your task:", taskSpan.textContent);
      if (newTaskText) {
        taskSpan.textContent = newTaskText;
      }
    });
    taskItem.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}
