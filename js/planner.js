// 1. Select the necessary DOM elements (Grabbing the tools we need)
const taskForm = document.getElementById('task');
const taskInput = document.getElementById('task_input');
const deadlineInput = document.getElementById('deadline');
const taskList = document.getElementById('task-list');

// 2. Add a new task (Event Handling & DOM Manipulation)
taskForm.addEventListener('submit', function (event) {
  // Prevent the form from automatically refreshing the page
  event.preventDefault();

  // Get the values the user typed in
  const taskText = taskInput.value.trim();
  const deadlineText = deadlineInput.value.trim();

  // Do not submit if task is empty
  if (!taskText) {
    return;
  }

  // Create a brand new <li> element
  const newListItem = document.createElement('li');

  const textSpan = document.createElement('span');

  textSpan.textContent = `${taskText} (Due: ${deadlineText}) `;

  // create checkbox input
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Delete';

  newListItem.appendChild(textSpan);
  newListItem.appendChild(checkbox);
  newListItem.appendChild(deleteBtn);
  // Attach (append) this new list item to the bottom of our task list
  taskList.appendChild(newListItem);

  // Clear the input boxes so they are ready for the next task
  taskInput.value = '';
  deadlineInput.value = '';
});

// 3. Mark tasks as completed OR Delete them (Event Delegation)
// We listen to the whole <ul> so it works on newly added tasks too!
taskList.addEventListener('click', function (event) {
  // Check if the thing we clicked was a Delete button
  if (event.target.tagName === 'BUTTON') {
    // Find the parent <li> and remove it entirely
    event.target.parentElement.remove();
  }

  // Check if the thing we clicked was a Checkbox
  if (event.target.type === 'checkbox') {
    // Find the parent <li>
    const listItem = event.target.parentElement;

    // Toggle the 'completed' CSS class on and off
    listItem.classList.toggle('completed');
  }
});
