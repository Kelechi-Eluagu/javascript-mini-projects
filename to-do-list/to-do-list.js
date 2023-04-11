let tasksText = document.getElementById('today-task');
let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let doneBtn = document.getElementById('doneBtn');
let delBtn = document.getElementById('delBtn');
let divTask = document.getElementById('divTask');
let valueTask = document.getElementById('today-task');
let formTask = document.getElementsByTagName('form')[0];

let allTasks = () => addBtn.addEventListener('click', addTask);

function addTask() {
 let value = valueTask.value;
 
 // let firstInputValue = null;
 // if (firstInputValue === null) {
 //  firstInputValue = value
 // } else {
  
 // }
 
 if (value.trim().length === 0 && typeof value !== Number ) {
  console.log('please type a task');
 } else {
  // const newTask = document.createElement('div');
  // divTask.appendChild(newTask)
  // divTask.classList.remove('d-none');

  let newTask = divTask.cloneNode(true);
  newTask.classList.remove('d-none')
  let valueTasks = valueTask.value;
  formTask.appendChild(newTask)
  console.log(newTask);
  console.log(newTask.value);
  valueTask.value = '';
  // let newRow = document.createElement('div')
  // newRow.classList.add('row')
  // newRow.innerHtml = 
  taskInput.value = valueTasks;
 }
}



//done button
let doneFunction = () =>
 doneBtn.addEventListener('click', function () {
  if (doneBtn.innerText === 'Done✅') {
   doneBtn.classList.add('bg-danger');
   taskInput.classList.add('bg-white');
   doneBtn.innerText = 'Edit✏️';
   taskInput.disabled = true;
  } else {
   taskInput.disabled = false;
   doneBtn.classList.remove('bg-danger')
   doneBtn.classList.add('bg-success');
   doneBtn.innerText = 'Done✅';
  }
 });

//delete button function
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
