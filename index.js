
const todoList = [];

function renderTodo() {
    let todohtml = '';

    todoList.forEach(function (todoObject, i) {
        const { name, dueDate, completed } = todoObject;
        //instead of
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        //const completed = todoObject.completed;

        const completedClass = completed ? 'taskCompleted' : '';
        const completedLabel = completed ? 'Unmark' : 'Mark as completed';
        const completedText = completed ? '  Completed!' : '';

        todohtml += `
            <div class="todo-row css_todogrid">
                <div class="task ${completedClass}">${name}${completedText}</div>
                <div class="taskDate">${dueDate}</div>
                <button onclick="deleteTodo(${i})" class="delete_todo_button">Delete</button>
                <button onclick="toggleCompleted(${i})" class="mark_todo_button">${completedLabel}</button>
            </div>
        `;
    });

    document.querySelector('.js_todo').innerHTML = todohtml || '<p>No todos</p>';
}

// Toggle completed state for a single todo and re-render
function toggleCompleted(index) {
    if (typeof todoList[index] === 'undefined') return;
    todoList[index].completed = !todoList[index].completed;
    renderTodo();
}

// Delete a todo by index
function deleteTodo(index) {
    if (typeof todoList[index] === 'undefined') return;
    todoList.splice(index, 1);
    renderTodo();
}

// Add a new todo from the input fields
function addTodo() {
    const inputElement = document.querySelector('.js_input');
    const name = inputElement.value.trim();
    const inputDate = document.querySelector('.js_dueDate');
    const dueDate = inputDate.value;

    if (!name) return; // ignore empty names

    todoList.push({
        name,
        dueDate,
        completed: false
    });

    inputElement.value = '';
    inputDate.value = '';
    renderTodo();
}


renderTodo();
