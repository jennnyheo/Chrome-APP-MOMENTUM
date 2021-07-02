const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todolist");

let todos = [];
const TODOS_KEY = "todos"
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function deleteTodo(e){
    const li = e.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id)); //filter imp!
    li.remove();
    saveTodos();
}

function showTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = newTodoObj.text; //
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    showTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const loadTodos = localStorage.getItem(TODOS_KEY);
if(loadTodos !== null){
    const parsedTodos = JSON.parse(loadTodos);
    todos = parsedTodos;    //load previous data from array. 
    parsedTodos.forEach(showTodo);
}