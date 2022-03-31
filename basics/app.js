// toUpperCase()
// toLowerCase()
// slice()
// trim()
let myName = "zeeshan ali                     ";
let age = 23;
console.log(myName.trim().length); // trim method removes the spaces from the starting and end of the stirng but not the spaces between the string words
console.log(myName.slice(0, 3)); // slice cuts the specific part of a string besed on the index that you provide

///////////////////////////////////////////////

// converting number to string
console.log(typeof (age + "")); // which means just simply add the number with an empty string and it will be changed to string
let myScore = 98;
myScore = 98 + "";
console.log(typeof myScore);

// converting string to number
let yourScore = "97";
yourScore = +"97"; // which means just put a plus sign in front of a string and it will be converted to number
console.log(typeof yourScore);

/////////////////////////////////////////////////

// A new data type released in JavaScript called BigInt;
console.log(Number.MAX_SAFE_INTEGER); // this acutally shows the limit of the number that can be assigned to a variable.
// to assign number to a variable greater than MAX_SAFE_NUMBER we need to use BigInt;
let i = BigInt(22); // And any common number be converted to BigInt
console.log(i);
let j = 22n; // this is another way of declaring a BigInt
console.log(j);
console.log(i + j); // we can add two BigInt s;
// BUT WE CAN NOT ADD A BigIng WITH A COMMON NUMBER

////////////////////////////////////////////////

// there are some falsy values and some truthy values
// Falsy Values
// 1. false
// 2. ""
// 3. null
// 4. undefined
// 5. 0 (zero number)

///////////////////////////////////////////////

// Ternary Operator
let myAge = 13;
let drink = myAge >= 14 ? "Coffee" : "Milk";
console.log(drink);

///////////////////////////////////

// prompt function asks the question
let winningNumber = 23;
// let userGuess = +prompt("Guess a number!"); // Notice I used a plus sign in front of the prompt function, it is because prompt function always get the value in the form of a string and it will convert it to a number

// console.log(
// 	userGuess === winningNumber ? "You Guessed Right" : "You Didn't Guess Right"
// );

//////////////////////////////////////

let day = 3;

switch (day) {
	case 0:
		console.log("sunday");
		break;
	case 1:
		console.log("monday");
		break;
	case 2:
		console.log("tuesday");
		break;
	case 3:
		console.log("wednesday");
		break;
	case 4:
		console.log("thursday");
		break;
	case 5:
		console.log("friday");
		break;
	case 6:
		console.log("saturday");
		break;
	default:
		console.log("invalid day");
}

//////////////////////////////////

//while Loop
let newNum = 10;
let answer = 0;

while (newNum >= 0) {
	answer = answer + newNum;
	newNum--;
}
console.log(answer);

let total = (newNum * (newNum + 1)) / 2; // doing the same thing with the hllp of formula
console.log(total);

//for loop

for (let i = 0; i <= newNum; i++) {
	answer = answer + i;
}
console.log(answer);

////////////////////////////////

// break and continue keywords

// => break keyword breaks the loop and the continue keyword continues the loop but skips that step
// for example
for (let i = 0; i <= 5; i++) {
	if (i === 4) {
		continue;
	}
	console.log(i);
}

///////////////////////////////////

//do while loop

let min = 1;
let max = 12;

let generatedNum = Math.round(Math.random() * (max - min) + 1);
console.log(generatedNum);

let k = 0;
let hint;
let guesses = 0;

do {
	// let userInput = +prompt(
	// 	guesses === 0 ? `Guess a number between ${min} & ${max}` : hint
	// );
	userInput = generatedNum;

	if (userInput === generatedNum) {
		// alert("You Won, you guessed the right number");
		console.log("You Won, you guessed the right number");
		break;
	} else if (userInput === 0) {
		break;
	} else {
		hint =
			userInput < generatedNum
				? "Your Number is less than the right Number"
				: "Your Number is greater than the right Number";
	}
	guesses++;
	k++;
} while (k <= generatedNum);

////////////////////////////////

// push() and pop() array methods are faster than shift() and unshift()

/////////////////////////////////////

// How to clone arrays?

// there are two methods that are not elegant but can be used as a hack

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// console.log(array1 === array2); // this will return false because both these variable has different arrays stored in Heap.
// if we mutate the array1 then the array2 will not get affected

// first method to clone the array is:
// let array2 = array1.splice(0);
// console.log(array1 === array2); // this will return as explained above

// second non elegant method is :
// let array2 = [].concat(array1);
// console.log(array1 === array2); // this will also be same as above

// THE MOST ELEGANT METHOD IS spread operator:
let array2 = [...array1];
console.log(array1 === array2); // this will also return false because of the same reason that the cloned array is stored separately in heap

///////////////////////////////////////////

// for loop on arrays
let fruits = ["apple", "mango", "grapes", "banana"];
let capitalFruits = [];

for (let i = 0; i < fruits.length; i++) {
	capitalFruits.push(fruits[i].toUpperCase());
}
console.log(capitalFruits);

///////////////////////////////////////////

// there are two new JavaScript loop that i wasn't aware of
// for of loop

//here i am taking the same fruits array explained above
let moreFruits = ["pineapple", "blue berry", "cherry"];

for (let fruit of moreFruits) {
	capitalFruits.push(fruit.toUpperCase());
}
console.log(capitalFruits);

// for in loop
//here i am also taking the same array explained above
let moreCapitalFruits = [];

for (let index in fruits) {
	moreCapitalFruits.push(fruits[index].toUpperCase());
}
console.log(moreCapitalFruits);

/////////////////////////////////////////////////

// Array Destructuring

let myArray = ["value1", "value2", "value3", "value4"];

// let [var1, var2] = myArray;
// let [var1, , var2] = myArray; // Now this will give var2 the value of 'value3' because we skip the second index by putting an other comma
let [var1, var2, ...myNewArray] = myArray; // this actually shows that we can include the rest of the elements of the arrayy in a new array using Destructuring

console.log(var1, var2, myNewArray);

/////////////////////////////////////////////////

// HOW TO ITERATE THROUgh YOUR <--OBJECT-->

let myself = {
	name: "zeeshu",
	age: "23",
	"my hobbies": ["playing videogames", "eating", "sleeping"],
};

//we can use TWO methods
// 1. for in loop
// 2. for of loop with Object.keys

for (let key in myself) {
	console.log(myself[key]);
}

console.log(Object.keys(myself)); // this function return us an array of all the keys in an object thus we can use this in "for of" loop to acces all the data within object

//here we are using this in for of loop
for (let key of Object.keys(myself)) {
	console.log(myself[key]);
}

///////////////////////////////////////////////

//spread operator in OBJECTS

const newArray1 = [..."abc"];
// const myObj = { ..."abc" };
const myObj = { ...["item1", "item2"] };
console.log(newArray1, myObj); // did you noticed the difference between the spread operators in array and in objects

const obj1 = {
	key1: "value1",
	key2: "value2",
};
const obj2 = {
	key3: "value3",
	key4: "value4",
};

// Another method of cloning an object that is old, and you might see it in the older javascript code
// that is
const myObjCloned = Object.assign({}, myObj);
console.log(myObjCloned);

// const objWithSpreadOperator = { ...obj1, ...obj2 };
const objWithSpreadOperator = { ...obj1, ...obj2, key5: "value5" };
console.log(objWithSpreadOperator);

//a very usefull example,
// if you want to create an object which has all the alphabet with their cossesponding arrangment as their key
const aphabetsObj = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(aphabetsObj);
