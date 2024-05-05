const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (taskInput.value.trim() !== '') {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', function() {
    li.remove();
  });
  li.appendChild(deleteButton);

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Completed yay!!';
  completeButton.addEventListener('click', function() {
    li.classList.toggle('completed');
  });
  li.appendChild(completeButton);

  taskList.appendChild(li);
}
