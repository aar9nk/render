// select stuff
const tasksList;

let tasks = [];

const addTask = (description) => {
// let's push the description to the array 
}

const createTaskHtml = (description) => {
  return;
}

const render = () => {
  let tasksHtmlList = [];
  // Loop over our tasks and create the html, storing it in the array
  for (let i = 0; i < tasks.length; i++) {
    // Get the current task in the loop
    const task = tasks[i];
    // create the html
    const taskHtml = createTaskHtml(task.description);
    // Push it to the tasksHtmlList array
    tasksHtmlList.push(taskHtml);
  }

  // Create the tasksHtml by joining each item in the tasksHtmlList
  // with a new line in between each item.
  const htmlString = tasksHtmlList.join("\n");

  // Set the inner html of the tasksList on the page
  tasksList.innerHTML = htmlString;
}