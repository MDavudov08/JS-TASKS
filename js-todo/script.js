const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const tableBody = document.getElementById("tableBody");
let uniqueId = 0;
const modeToggleBtn = document.getElementById('modeToggle');
const body = document.querySelector('.body');
modeToggleBtn.innerHTML = "☀️";

modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (modeToggleBtn.innerHTML === "🌙") {
        modeToggleBtn.innerHTML = "☀️";
    } else {
        modeToggleBtn.innerHTML = "🌙";
    }
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
    }

    isDoneButton.onclick = () => {
        if (isDoneButton.dataset.done === 'false') {
            isDoneButton.dataset.done = 'true';
            tr.classList.add("dno");
            isDoneButton.remove();
        }
    }
}
