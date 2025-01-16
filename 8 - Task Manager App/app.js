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

function deleteOrCompleteTodo(event){
  const targetBtn = event.target;
  
  if (targetBtn.classList.contains("trash-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add("fall");

    todoDiv.addEventListener("transitionend", function(){
        todoDiv.remove();
    })
  }

  if (targetBtn.classList.contains("complete-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed")

  }

}

function filterTodos(event){
  const filterValue = event.target.value;
  const todos = todoList.childNodes;
  todos.forEach(function (todo){
    if (filterValue === "all"){
      todo.style.display = "flex";
      
    } else if (filterValue === "completed"){
      if (todo.classList.contains("completed")){
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
      
    } else if (filterValue === "uncompleted")
      if (!todo.classList.contains("completed")){
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
  })

}