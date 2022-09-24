{
  /* <li>
          Finish Frontend Simplified
          <button class="todo__delete">
            x
          </button>
        </li> */
}

const list = document.querySelector(".list");
const input = document.querySelector("input");

let todoList = [];
let counter = 0
let todoInputValue = "";

function onInputChange(event) {
  todoInputValue = event.target.value;
}

function addTodo() {
  if (!todoInputValue) {
    return;
  }
  const task = {
    id: counter++,
    task: todoInputValue,
  };
  todoList.push(task);
  renderTodos();
  input.value = "";
  todoInputValue = "";
}

function deleteTodo(id) {
  todoList = todoList.filter((todo) => {
    return todo.id !== id;
  });
  renderTodos();
}

function renderTodos() {
  list.innerHTML = todoList
    .map(
      (element) =>
        `<li>
    ${element.task}
    <button class="todo__delete" onclick="deleteTodo(${element.id})">
      x
    </button>
  </li>`
    )
    .join("");
}


