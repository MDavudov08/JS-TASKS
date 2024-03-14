const newTodoInput = document.getElementById('newTodoInput')
const addTodoBtn = document.getElementById('addTodoBtn')
const tableBody = document.getElementById("tableBody")
let uniqueId = 0;
const modeToggleBtn = document.getElementById('modeToggle');
const body = document.querySelector('.body');
modeToggleBtn.innerHTML = "☀️"
modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (modeToggleBtn.innerHTML === "🌙") {
        modeToggleBtn.innerHTML = "☀️"
    }
    else {
        modeToggleBtn.innerHTML = "🌙"
    }
});

addEventListener('load', () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        addTodoToTable(todo.id, todo.text, todo.done);
    });
});

addTodoBtn.onclick = () => {
    const newTodo = newTodoInput.value;
    if (newTodo !== '') {
        const todo = {
            id: ++uniqueId,
            text: newTodo,
            done: false
        };
        addTodoToTable(todo.id, todo.text, todo.done);
        saveTodosToLocalStorage();
    } else {
        alert('Input bosdur');
    }
    newTodoInput.value = '';
}

const addTodoToTable = (id, text, done) => {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdTodo = document.createElement('td');
    const tdActions = document.createElement('td');
    const isDoneButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    isDoneButton.className = "doneBtn";
    deleteButton.className = "deleteBtn";

    tdTodo.innerText = text;
    tdId.innerText = id;
    deleteButton.innerText = '🗑️';
    deleteButton.dataset.id = id;
    isDoneButton.innerText = '✅';
    isDoneButton.dataset.done = done;

    tdActions.append(deleteButton, isDoneButton);
    tr.append(tdId, tdTodo, tdActions);
    tableBody.append(tr);

    deleteButton.onclick = () => {
        tr.remove();
        removeTodoFromLocalStorage(id);
    }

    isDoneButton.onclick = () => {
        if (isDoneButton.dataset.done === 'false') {
            isDoneButton.dataset.done = 'true';
            tr.classList.add("dno");
            isDoneButton.remove();
            updateTodoStatusInLocalStorage(id, true);
        }
    }
}
const saveTodosToLocalStorage = () => {
    const todos = [];
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const id = row.querySelector('td:first-child').innerText;
        const text = row.querySelector('td:nth-child(2)').innerText;
        const done = row.querySelector('.doneBtn').dataset.done === 'true';
        todos.push({ id, text, done });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

const removeTodoFromLocalStorage = (id) => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.id != id);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const updateTodoStatusInLocalStorage = (id, done) => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.map(todo => {
        if (todo.id == id) {
            return { ...todo, done };
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}