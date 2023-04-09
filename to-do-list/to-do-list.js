let tasksText = document.getElementById('today-task');
let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let doneBtn = document.getElementById('doneBtn');
let delBtn = document.getElementById('delBtn');
let divTask = document.getElementById('divTask');
let valueTask = document.getElementById('today-task');

// let taskArr = [];

let allTasks = () => addBtn.addEventListener('click', addTask);

function addTask() {
 let value = valueTask.value;

 // taskInput.value = value;

 // let valPlace = valueTask.placeholder;
 // console.log(valPlace);/

 if (value.trim().length === 0 && typeof value !== Number) {
  console.log('please type a task');
 } else {
  let valueTasks = valueTask.value;

  //timeout for the value of the task input to refresh
  // setTimeout(() => {

  valueTask.value = '';
  divTask.classList.remove('d-none');
  // document.createElement('divTask');
  taskInput.value = valueTasks;

  // }, 1000);
 }
}

//done button
let doneFunction = () =>
 doneBtn.addEventListener('click', function () {
  if (doneBtn.innerText === 'Done✅') {
   doneBtn.classList.add('bg-danger');
   taskInput.classList.add('bg-white');
   doneBtn.innerText = 'Edit';
   taskInput.disabled = true;
  } else {
   taskInput.disabled = false;
   doneBtn.classList.remove('bg-danger')
   doneBtn.classList.add('bg-success');
   doneBtn.innerText = 'Done';
   console.log('I am inside an if stateent')
  }
 });

//delete button
let deleteBtn = () => delBtn.addEventListener('click', delFunction);

function delFunction() {
 divTask.classList.add('d-none');
}
//this code block adds the onclick event on the html page
// let delFunction = function(){
//  divTask.classList.add('d-none');
// }

allTasks();
doneFunction();
deleteBtn();
