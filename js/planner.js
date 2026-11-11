// 1. Select the necessary DOM elements
const taskForm = document.getElementById('task');
const taskInput = document.getElementById('task_input');
const deadlineInput = document.getElementById('deadline');
const taskList = document.getElementById('task-list');

// Select counter DOM elements
const totalCountEl = document.getElementById('total-count');
const completedCountEl = document.getElementById('completed-count');
const remainingCountEl = document.getElementById('remaining-count');

/**
 * Recalculates and updates task count statistics in real time
 */
function updateTaskStats() {
  const totalTasks = taskList.querySelectorAll('li').length;
  const completedTasks = taskList.querySelectorAll('li.completed').length;
  const remainingTasks = totalTasks - completedTasks;

  if (totalCountEl) totalCountEl.textContent = totalTasks;
  if (completedCountEl) completedCountEl.textContent = completedTasks;
  if (remainingCountEl) remainingCountEl.textContent = remainingTasks;
}

// 2. Add a new task (Event Handling & Safe DOM Manipulation)
taskForm.addEventListener('submit', function (event) {
  // Prevent the form from automatically refreshing the page
  event.preventDefault();

  // Get the values typed in and remove leading/trailing whitespace
  const taskText = taskInput.value.trim();
  const deadlineText = deadlineInput.value.trim();

  // Do not submit if task description is empty
  if (!taskText) {
    return;
  }

  // Step A: Create the parent <li> container
  const newListItem = document.createElement('li');

  // Step B: Create a <span> for the text and safely assign user input via .textContent
  const textSpan = document.createElement('span');
  textSpan.textContent = `${taskText} (Due: ${deadlineText}) `;

  // Step C: Create the checkbox input
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Step D: Create the delete button with an explicit button type
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Delete';

  // Step E: Assemble all elements inside the <li>
  newListItem.appendChild(textSpan);
  newListItem.appendChild(checkbox);
  newListItem.appendChild(deleteBtn);

  // Step F: Append the completed <li> to the task list container
  taskList.appendChild(newListItem);

  // Recalculate stats after adding a task
  updateTaskStats();

  // Reset input fields
  taskInput.value = '';
  deadlineInput.value = '';
});

// 3. Mark tasks as completed OR Delete them (Event Delegation)
taskList.addEventListener('click', function (event) {
  // Check if the clicked element was a Delete button
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
    updateTaskStats();
  }

  // Check if the clicked element was a Checkbox
  if (event.target.type === 'checkbox') {
    const listItem = event.target.parentElement;
    listItem.classList.toggle('completed');
    updateTaskStats();
  }
});

// Calculate statistics on initial page load (for pre-existing HTML items)
updateTaskStats();
