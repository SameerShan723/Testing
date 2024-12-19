const tasks = [];


function formHandleSubmit(e) {
  e.preventDefault();
  const inputField = document.getElementById("taskInput");
  const task = inputField.value;

  if (task) {
    tasks.push(task);
    inputField.value = "";
    renderTasks(); 
  }
}


function renderTasks() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.textContent = task;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(index));

 
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}

function editTask(index) {
  const list = document.getElementById("todoList");
  const li = list.children[index];
  const currentTask = tasks[index];

  li.innerHTML = "";

  const input = document.createElement("input");
  input.type = "text";
  input.value = currentTask;

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    tasks[index] = input.value; 
    renderTasks();
  });

  const cancelButton=document.createElement("button");
  cancelButton.textContent="cancel";
  cancelButton.addEventListener("click" , function(){
    renderTasks();
  });


  li.appendChild(input);
  li.appendChild(saveButton);
  li.appendChild(cancelButton);
}


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}


document.getElementById("taskForm").addEventListener("submit", formHandleSubmit);
