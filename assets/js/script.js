// global variables
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// functions
var createTaskHandler = function(event) {
    // stop default browser behavior
    event.preventDefault();

    // get user input from form
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    // add content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    // add div to list item
    listItemEl.appendChild(taskInfoEl);
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

// listen for "Add Task" button click
formEl.addEventListener("submit", createTaskHandler);
