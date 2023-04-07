let tasksText = document.getElementById('today-task');
let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput').innerHTML;
let doneBtn = document.getElementById('doneBtn');
let delBtn = document.getElementById('delBtn');
let divTask = document.getElementById('divTask');
let valueTask = document.getElementById('today-task');

// let taskArr = [];

let allTasks = () => addBtn.addEventListener('click', addTask);

function addTask() {
 // console.log();
 // let allTaskText = taskInput;
 // console.log(allTaskText);
 // taskArr.push(allTaskText);
 // (tasksText).value = '';
 // console.log(taskArr)
 // divTask.style.display = 'visible';
 // console.log(divTask)
 let value = valueTask.value

 // divTask.style.display = 'block';
 // divTask.style.verticalAlign = 'super';

 // taskInput.value = value;

 console.log(value);
 let valPlace = valueTask.placeholder;
 console.log(valPlace);

 setTimeout(() => {
  
  value = valPlace;
  valueTask.value = ''
  
  console.log(value);
  console.log(valPlace);
  console.log(valueTask.value);
  
 }, 1000);
}

allTasks();