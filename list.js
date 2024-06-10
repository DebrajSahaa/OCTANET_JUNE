document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;
    const dueDate = document.getElementById('dueDate').value;

    if (taskInput === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskInput} (Priority: ${priority}, Category: ${category}, Due: ${dueDate})</span>
        <div>
            <button onclick="markComplete(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    document.getElementById('taskInput').value = '';
    document.getElementById('priority').value = 'medium';
    document.getElementById('category').value = 'work';
    document.getElementById('dueDate').value = '';
});

function markComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('complete');
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
