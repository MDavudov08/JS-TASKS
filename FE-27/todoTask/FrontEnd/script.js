const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const tableBody = document.getElementById("tableBody");
const Url = 'http://localhost:3000/todos';


const fetchTodos = async () => {
    const response = await axios.get(Url);
    const todos = response.data;
    todos.forEach(todo => addTodoToTable(todo.id, todo.text, todo.done));
};

const addTodo = async (text) => {
    const response = await axios.post(Url, { text, done: false });
    const newTodo = response.data;
    addTodoToTable(newTodo.id, newTodo.text, newTodo.done);
};

const updateTodo = async (id, text, done) => {
    await axios.patch(`${Url}/${id}`, { text, done });
};

const deleteTodo = async (id) => {
    await axios.delete(`${Url}/${id}`);
};

addTodoBtn.onclick = () => {
    const newTodo = newTodoInput.value;
    if (newTodo !== '') {
        addTodo(newTodo);
    } else {
        alert('Input bosdur');
    }
    newTodoInput.value = '';
};

const addTodoToTable = (id, text, done) => {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdTodo = document.createElement('td');
    const tdActions = document.createElement('td');
    const isDoneButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    isDoneButton.className = "doneBtn";
    deleteButton.className = "deleteBtn";
    editButton.className = "editBtn";

    tdTodo.innerText = text;
    tdId.innerText = id;
    deleteButton.innerText = '🗑️';
    deleteButton.dataset.id = id;
    isDoneButton.innerText = done ? '❌' : '✅';
    isDoneButton.dataset.done = done;
    editButton.innerText = '✏️';

    tdActions.append(editButton, deleteButton, isDoneButton);
    tr.append(tdId, tdTodo, tdActions);
    tableBody.append(tr);

    deleteButton.onclick = () => {
        tr.remove();
        deleteTodo(id);
    };

    isDoneButton.onclick = () => {
        const newDoneStatus = isDoneButton.dataset.done === 'false';
        isDoneButton.dataset.done = newDoneStatus;
        isDoneButton.innerText = newDoneStatus ? '❌' : '✅';
        tr.classList.toggle("dno", newDoneStatus);
        updateTodo(id, text, newDoneStatus);
    };

    editButton.onclick = () => {
        const newText = prompt("Edit todo:", text);
        if (newText) {
            tdTodo.innerText = newText;
            updateTodo(id, newText, isDoneButton.dataset.done === 'true');
        }
    };
};

window.addEventListener('load', fetchTodos);
