// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

// Load tasks on startup
document.addEventListener("DOMContentLoaded", loadTasks);

// Add a new task
addTaskBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Clear all tasks
clearAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all tasks?")) {
    localStorage.removeItem("tasks");
    taskList.innerHTML = "";
  }
});

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = createTaskElement(taskText);
  taskList.appendChild(li);
  saveTask(taskText);

  taskInput.value = "";
  taskInput.focus();
}

// Create a new task element
function createTaskElement(taskText, completed = false) {
  const li = document.createElement("li");
  if (completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Toggle complete status
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateLocalStorage();
  });

  // Delete task
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateLocalStorage();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

// Save new task to localStorage
function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load all tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = createTaskElement(task.text, task.completed);
    taskList.appendChild(li);
  });
}

// Update localStorage when a task changes
function updateLocalStorage() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
