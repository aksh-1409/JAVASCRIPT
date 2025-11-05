const sectionTodo =   document.querySelector(".section-todo");
console.log(sectionTodo.classList); //DOMTokenList
// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove("container");
const ans =  sectionTodo.classList.contains("container");
console.log(ans);
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark"); //toggle agr classList me hai toh remove kr dega agr nhi hai toh add kr dega


