let tasksText = document.getElementById('today-task');
let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput').innerHTML;
let doneBtn = document.getElementById('doneBtn');
let delBtn = document.getElementById('delBtn');
let divTask = document.getElementById('divTask');

let taskArr = [];

let allTasks = () => addBtn.addEventListener('click', addTask);

function addTask() {
 // console.log(e);
 let allTaskText = taskInput;
 console.log(allTaskText);

 // taskArr.push(allTaskText);

 // (tasksText).value = '';

 // console.log(taskArr)

 // divTask.style.display = 'visible';

 // console.log(divTask)
}

allTasks();
