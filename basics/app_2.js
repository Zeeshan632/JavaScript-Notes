//////////////////////////////////////////

// object destructuring
const band = {
	bandName: "passengers",
	famousSong: "let her go",
	year: 2008,
};

const { bandName, famousSong } = band; //here I can only create the variables same as the keys of the object
console.log(bandName, famousSong);

//If I want to change the variables names
const { bandName: theName, famousSong: theSong, ...restProps } = band;
// const { year: startingYear } = band;
console.log(theName, theSong, restProps);

/////////////////////////////////////////////

//object inside arrays
//very usefull in real world applications

const users = [
	{ userId: 1, firstName: "zeeshan", gender: "male" },
	{ userId: 2, firstName: "ali", gender: "male" },
	{ userId: 3, firstName: "shaikh", gender: "male" },
];

for (let user of users) {
	console.log(user.firstName);
}

////////////////////////////////////////////

//nested destructuring
//here i am taking the same 'users' object from above

const [user1, , { firstName: thirdPersonName }] = users;
// console.log(user1, user3);
console.log(user1, thirdPersonName);

////////////////////////////////////////

//FUNCTIONS

function additionOfNumbers(firstNum, secondNum) {
	return firstNum + secondNum;
}

console.log(additionOfNumbers(10, 20));

//////
//problem: build a function that tell whether a number is odd or even

function evenOrOdd(num) {
	if (num % 2) {
		// if the reminder comes zero, then zero is a 'falsy' expression or number then it is even and if it comes true it will be odd because reminder is non-zero
		return "number is odd";
	}
	return "number is even";
}
console.log(evenOrOdd(12231));

//////
//problem: build a function that takes the string and returns its first character

function firstLetterOfString(sentence) {
	return sentence[0];
}
console.log(firstLetterOfString("hey, my name is zeeshan"));

//////
//Problem: build a function with index of target if it is present

let array1 = ["zeeshan", "bisma", "fatima", "fiza", "arsalan"];

function findTheIndex(array, targetElement) {
	for (let element of array) {
		if (element === targetElement) {
			return array.indexOf(element);
		}
	}
	return "The targeted element does not exist in the given array";
}

console.log(findTheIndex(array1, "arsalan"));

///// function Expression
// just make the vairable of the function declaration

const singHappyBirthday = function (birthdayBoy) {
	console.log(`Happy Birthday to dear ${birthdayBoy}`);
};
singHappyBirthday("zeeshan");

////// Arrow function

const isOdd = (num) => num % 2 !== 0;
// console.log(isOdd(3));

////////////////////////////////////////////////

// REST Parameter

// Question is we need to add all the numbers provided in a functions argument

let addAllNumbers = (...n) => {
	// this usage of using spread operator in parameter create a rest parameter which convert all the arguments to an array
	let total = 0;
	for (let number of n) {
		total = total + number;
	}
	return total;
};

console.log(addAllNumbers(1, 2, 2, 2));

///////////////////////////////////////////////

// DESTRUCTURING Parameters

const person = {
	firstName: "zeeshu",
	lastName: "ali",
};

let printingObjProperties = ({ firstName, lastName }) => {
	console.log(firstName);
	console.log(lastName);
};

printingObjProperties(person);
