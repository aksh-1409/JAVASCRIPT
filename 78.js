//inner html 
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.innerHTML);
sectionTodo.innerHTML = "<h2>Todo List</h2>";
sectionTodo.innerHTML += "<p>Todo List</p>";
//since there are issue with this because when we try to update and add the element every time it will render the previous one so slow 

//when we should use -- when only the whole html iw changed one time and not be updated again and again in that only