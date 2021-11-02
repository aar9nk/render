// target the relevant DOM nodes
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#task-description');
const list = document.querySelector('#task-list');
const deleteButton = document.querySelector("#delete-button");

let taskList = [];

const createHtml = (text, key) => {
  return`
    <li>${text}<button id=${key}>edit</button></li>
  `;
}

const addTask = (task) => {
  return taskList.push(task);
}

const deleteLastTask = () => {
  return taskList.pop();
}

const updateTask = (task) => {
  console.log(task);
  input.value = taskList[task];
}

const render = (array) => { 
  let html = '';
  for (let index = 0; index < array.length; index++) {
    html = html + createHtml(array[index], index);
  }
  
  list.innerHTML = html;

  for (let index = 0; index < array.length; index++) {
    const button = document.getElementById(index);
    button.addEventListener('click', () => {
      updateTask(index);
    });
  }

}

// only apply this logic when the button is clicked 
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(input.value);
  console.log(taskList);
  render(taskList);
})

deleteButton.addEventListener('click', () => {
  deleteLastTask();
  console.log(taskList);
  render(taskList);
})
// get the input from the input field

// display that input in our list