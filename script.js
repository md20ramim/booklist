// finding html elements
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const form = document.getElementById("get_form");
const tbody = document.getElementById("bookList");

const store=(status,data)=>
{
    const tdata = document.createElement('td');
    tdata.innerHTML =  status;
    data.appendChild(tdata);
}

//  get todos localStorage
const getTodosLocalStorage=()=>
{
    return localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")):[];
}
// Creating todo
const createTodo=(tRowId,titleValue,authorValue,yearValue)=>
{
    const tRow = document.createElement("tr");
    tRow.id=tRowId;
    store(titleValue,tRow);
    store(authorValue,tRow);
    store(yearValue,tRow);

    tbody.appendChild(tRow);
}
// Add todo
const addTodo=(event)=>
{
    event.preventDefault();
    const titleValue = title.value;
    const authorValue = author.value;
    const yearValue = year.value;
    const tRowId=Date.now().toString();

    // call create todo
    createTodo(tRowId,titleValue,authorValue,yearValue);
    // local Storage
    const todos = getTodosLocalStorage();
    todos.push({tRowId,titleValue,authorValue,yearValue});
    localStorage.setItem("mytodos",JSON.stringify(todos));
}
// load
const loaded=()=>
{
    const todos=getTodosLocalStorage();
    todos.map(todo=>createTodo(todo.tRowId,todo.titleValue,todo.authorValue,todo.yearValue));
}

// add event listener
form.addEventListener("submit",addTodo);
window.addEventListener("DOMContentLoaded",loaded);