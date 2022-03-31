localStorage.clear();
// store data in local storage
localStorage.setItem("name", "mario");
localStorage.setItem("age", 30);

// get data from local storage
let fname = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(fname, age);

//updating data
// localStorage.setItem("name", "zeeshan");
localStorage.setItem("age", 87);
localStorage.name = "zeeshan";

fname = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(fname, age);

// stringifying data and then retrieving it in the form of json and then parsing it
localStorage.clear();

// let todos = [
// 	{ text: "play mariokart", author: "shaun" },
// 	{ text: "buy some milk", author: "mario" },
// 	{ text: "buy some bread", author: "luigi" },
// ];
// localStorage.setItem("todos", JSON.stringify(todos));

const localStorageManager = (dataToBePushed) => {
	let response = JSON.parse(localStorage.getItem("todos"));
	response.push(dataToBePushed);
	localStorage.setItem("todos", JSON.stringify(response));
};

localStorageManager({ text: "working on some projects", author: "zeeshan" });
