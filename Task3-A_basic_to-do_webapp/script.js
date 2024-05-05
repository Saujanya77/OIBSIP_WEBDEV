document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const pendingTasks = document.getElementById('pending-tasks');
    const completedTasks = document.getElementById('completed-tasks');

    let tasks = [];

    function addTask(task) {
        tasks.push(task);
        updateTasks();
    }

    function updateTasks() {
        pendingTasks.innerHTML = '';
        completedTasks.innerHTML = '';

        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = `${task.text} - ${task.date} ${task.time}`;
            li.dataset.index = index;

            const markAsCompleteButton = document.createElement('button');
            markAsCompleteButton.textContent = task.completed ? 'Mark as Incomplete' : 'Mark as Complete';
            markAsCompleteButton.dataset.index = index;
            li.appendChild(markAsCompleteButton);

            markAsCompleteButton.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                updateTasks();
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.dataset.index = index;
            li.appendChild(deleteButton);

            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1);
                updateTasks();
            });

            if (task.completed) {
                li.classList.add('completed');
                completedTasks.appendChild(li);
            } else {
                pendingTasks.appendChild(li);
            }
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!taskInput.value.trim()) return;

        addTask({
            text: taskInput.value,
            date: dateInput.value,
            time: timeInput.value,
            completed: false,
        });

        taskInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    });
});
