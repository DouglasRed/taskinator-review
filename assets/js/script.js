const formEl = document.querySelector("#task-form");
const tasksToDoEl = document.querySelector("#tasks-to-do");

const taskFormHandler = function (event) {
  event.preventDefault();

  const taskNameInput = document.querySelector("input[name='task-name']").value;
  const taskTypeInput = document.querySelector(
    "select[name='task-type']"
  ).value;

  const taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };
  createTaskEl(taskDataObj);
};

const createTaskEl = function (taskDataObj) {
  const listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  const taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";
  listItemEl.appendChild(taskInfoEl);

  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
