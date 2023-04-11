'use strict';
// let tasksText = document.getElementById('today-task');
let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let doneBtn = document.getElementById('doneBtn');
let delBtn = document.getElementById('delBtn');
let divTask = document.getElementById('divTask');
let valueTask = document.getElementById('today-task');
let taskBtn = document.querySelector('.taskBtn');
let formTask = document.getElementsByTagName('form')[0];
// let doneButton = document.querySelector('.doneButton')
// divTask.classList.add('d-none');

valueTask.addEventListener('mouseout', function(){
 valueTask.classList.add('clearBackground')
})

let allTasks = () => addBtn.addEventListener('click', addTask);

function addTask() {
 let value = valueTask.value;
 
 // let firstInputValue = null;
 // if (firstInputValue === null) {
 //  firstInputValue = value
 // } else {
  
 // }
 
 if (value.trim() === '' && value.length === 0 && isNaN(value) !== 'number') {
  console.log('please type a task');
  // console.log(taskInput.value);
 } else {
  // let newTask = document.createElement('div');
  // divTask.appendChild(newTask)
  
  // divTask.classList.remove('d-none');
  let newTask = divTask.cloneNode(true);
  formTask.appendChild(newTask)
  // newTask.classList.remove('d-none');
  // divTask.remove();  
  
  // console.log(newTask);
  newTask.classList.remove('d-none');
  
  let valueTasks = valueTask.value;
  // console.log(valueTasks);
  // let newRow = document.createElement('div')
  // newRow.classList.add('row')
  // newRow.innerHtml =

  taskInput.value = valueTasks;
  valueTask.value = '';
  // console.log(valueTask.value);
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

// function delFunction() {
//   console.log('I am deleted');
//   divTask.classList.add('d-none');
//  }


//this code block adds the onclick event on the html page
// let delFunction = function(){
 
 // if(deleteBtn.innerText === 'Delete')
 //  // divTask.classList.add('d-none');
 //  // divTask.remove()
 // }

 // let deleteBtn = () => delBtn.addEventListener('click', delFunction);
 
 let delFunction = function(){
  // let divTasks = this.closest(divTask)
  divTask.remove()
 }
 let deleteBtn = () => delBtn.addEventListener('click', delFunction);

 // delBtn.forEach(btn => btn.addEventListener('click', delFunction))


 // divTask.addEventListener('click', (event)=>{
 //  if (event.target.matches(delBtn)) {
 //   event.target.parentNode.remove();
 //  }
 // })

 

allTasks();
doneFunction();
deleteBtn();
// delBtn()