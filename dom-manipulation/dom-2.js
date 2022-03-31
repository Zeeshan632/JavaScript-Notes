//////////////////////////////////////////
//static list vs live list
const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

const ul = document.querySelector(".todo-list");
ul.append(sixthLi);

console.log(listItems);

////////////////////////////////////////////
// how to get the dimensions of an element

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);

/////////////////////////////////////////////
// event listeners

const body = document.body;

body.addEventListener("keypress", (e) => {
	console.log(e.key);
});

//////////////////////////////////////////////
// event bubbling / event propagation
// event capturing
// event delegation
