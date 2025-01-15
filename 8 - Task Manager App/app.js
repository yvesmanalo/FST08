// Step 1: Select DOM Elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

function addTodo(event){
  event.preventDefault();

  // Create the todoDiv container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo")

  // Create a new todo list item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item")
  newTodo.textContent = todoInput.value;
  todoDiv.appendChild(newTodo);
  console.log(todoDiv)

  // Create a trash button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn")
  completeButton.innerHTML = `<i class="fas fa-check"></i>`
  todoDiv.appendChild(completeButton);
  

  // Create a trash button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn")
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
 
  
}

function deleteOrCompleteTodo(){


}

function filterTodos(){


}