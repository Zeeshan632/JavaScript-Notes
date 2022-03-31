const heading = document.getElementById("main-heading");

// The difference between innerText and textContent property
console.log(heading.innerText);
console.log(heading.textContent);

//////////////////////////////
//get and set attribute

const firstNavLink = document.querySelector("a");

console.log(firstNavLink.getAttribute("href"));
firstNavLink.setAttribute("href", "https://www.youtube.com/");
firstNavLink.setAttribute("target", "_blank"); // to open it in new tab
console.log(firstNavLink.getAttribute("href"));

/////////////////////////////
// get multiple elements using getElementsByClassName
// get multiple elements using querySelectorAll
// difference between HTML Collection and Node List

const navItems = document.getElementsByClassName("nav-item");
console.log(navItems); // this will return us a HTML Collection, these array like objects are iterable, which means we can use for and for of loops but we can't use forEach or other array methods and its elements can be accessed with the help of index
console.log(Array.isArray(Array.from(navItems))); // this method Array.from(navItems) will convert the HTMLCollection into an array on which we can then apply all the higher order array methods

const allAnchorTags = document.querySelectorAll("a");
console.log(allAnchorTags); // this will return a NodeList, which is also a array like object like HTML Collection, but unlike HTML Collection you can use forEach() method but not all the array methods. To use all the array methods you need to convert this node list to an array using the same above technique

//////////////////////////////////////
// innerHTML

heading.innerHTML =
	"<h1><span style='font-weight: 300;'>Hello,</span><br>Manage Your Tasks</h1>";

//////////////////////////////////////
//
console.log("//////////////////////////");

const headingsParent = heading.parentElement;
const headingsParentSibling = heading.parentElement.nextSibling.nextSibling;

console.log(headingsParent, headingsParentSibling);

////////////////////////////////////
// classList, add and remove or toggle class
const sectionTodo = document.querySelector(".section-todo");

// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove("container");
console.log(sectionTodo.classList.contains("container")); // it will return either true or false

sectionTodo.classList.toggle("bg-dark"); // first it adds up the class
sectionTodo.classList.toggle("bg-dark"); // then it toggles back and remove it

/////////////////////////////////////////
// adding <li> elements in the todo list

const todoList = document.querySelector(".todo-list");
todoList.innerHTML += `<li>
<span class="text">added html with elem.innerHTML</span>
<div class="todo-buttons">
  <button class="btn todo-btn done">Done</button>
  <button class="btn todo-btn remove">Remove</button>
</div>
</li>`;
// You should not use the above .innerHTML because of performance issues. You should only use it if you need to change a particular tag, instead of adding

///////////////////////////////////////////////////
// for the above work you should use
//document.createElement()
//append
//prepend
//remove
//before
//after

const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teaching students");
// newTodoItem.appendChild(newTodoItemText);
newTodoItem.textContent = "Teaching students";

const newTodoItemClone = newTodoItem.cloneNode(true); // here i have cloned the html element to use it in both the append and prepend conditions
todoList.append(newTodoItem); // append will add it in the end
todoList.prepend(newTodoItemClone); // prepend weill add it in the beginning

//////////////////////////////////////////////////////
// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

todoList.insertAdjacentHTML("beforeend", "<li>inserted Adjacent HTML </li>"); //this is not good because we are adding the HTML instead of adding a variable as in append method
