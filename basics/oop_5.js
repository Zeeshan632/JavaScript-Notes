// OBJECT ORIENT PROGRAMMING

//this keyword
function personInfo() {
	console.log(this.firstName, this.age);
}

const person_1 = {
	firstName: "Zeeshan",
	age: 23,
	about: personInfo,
};
const person_2 = {
	firstName: "Adil",
	age: 32,
	about: personInfo,
};
const person_3 = {
	firstName: "Shaikh",
	age: 23,
	about: personInfo,
};

person_1.about();
person_2.about();
person_3.about();

//////////////////////////////////
//////////////////
// call(), apply(), bind() method

const user1 = {
	firstName: "harshit",
	age: 8,
	about: function (favouriteSong) {
		console.log(
			this.firstName,
			this.age,
			`His favourite song is ${favouriteSong}`
		);
	},
};
const user2 = {
	firstName: "mohit",
	age: 23,
};
// user1.about()
// Now if I want to call the 'about' function of the first object, but putting the values of the second 'user2' object,
// for this we need to change the value of 'this', if 'this' points towards the user2 object instead of user1, then we can use the about function
// and for this we use call() function

user1.about.call(user2); // Now you will get the values of user2 object

// and now if we have parameters in the method, then we can put parameter in call function as:
user1.about.call(user2, "Alvida");

//Now if we want we can extraxt this function out, and then by applying the call() function we can set the value of 'this' to any object that we want
// for example

function studentName(studentName) {
	console.log(`from ${this.schoolName}, the topper is ${studentName}`);
}

const school_1 = {
	schoolName: "young school",
	classTeacher: "miss kenbeen",
};
const school_2 = {
	schoolName: "big school",
	classTeacher: "miss kubra",
};

studentName.call(school_1, "harshit");
studentName.call(school_2, "mohit");

//////////////////////
// apply()

// The apply() method is similar to call() method, except in apply() method, you need to pass the extra arguments in an array
// for example:

const folder_1 = {
	doc_1: "file-1",
	doc_2: "file-2",
	doc_3: ["file-1", "file-8", "file-23"],
};
const folder_2 = {
	doc_1: "file-32",
	doc_2: ["file-11", "file-78", "file-88"],
	doc_3: ["file-77", "file-54"],
};

function impFile(miDoc, liDoc) {
	console.log(
		`The most important file/files in this folder are ${this[miDoc]} and the least important file/files are ${this[liDoc]}`
	);
}

impFile.apply(folder_1, ["doc_2", "doc_1"]);
impFile.apply(folder_2, ["doc_2", "doc_1"]);

///////////////////////////
// bind()

// what bind method does is, instead of returning the desired output, it return a function that we can use anytime
// for exampele
function filesForPresentation(docName) {
	console.log(
		`The files for presentation are inside ${docName} of this folder and it contain ${this[docName]}`
	);
}

const presentationReady = filesForPresentation.bind(folder_2, "doc_2");

presentationReady(); // Now wheneven we will call this function then our above function with particular arguments will be called

/////////////////////////////////////////////////////////
///////// NOW we will study about OBJECT CREATORS,
/////////// AND here we will study the most important thing about objects in javascript that is __proto__

const userMethods = {
	about() {
		console.log(`${this.firstName} is ${this.age} years old`);
	},
};

function createUser(firstName, lastName, email, age, address) {
	const user = Object.create(userMethods);
	user.firstName = firstName;
	user.lastName = lastName;
	user.email = email;
	user.age = age;
	user.address = address;
	return user;
}

const newUser1 = createUser(
	"Zeeshan",
	"Ali",
	"zeeshanadil632@gmail.com",
	23,
	"my address"
);
console.log(newUser1);
newUser1.about();

//////////////////////////////////////////////////////////
///////////////////////////////////////
// A function is the combo of both --> object and function
// In function you can set the properties of the object too

// for example
function hello() {
	console.log("Hello world");
}
console.log(hello.name); // the name property is built in, which tells the name of the function

// lets set our own property

hello.prototype.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

console.log(hello.prototype);

// that's why if we can get this empty object called function.prototype, then we should store our methods in this empty object instead of storing it in a separate object
// for example
function kidsData(kidsName, kidsAge, kidsId) {
	const kid = Object.create(kidsData.prototype); // Notice that here instead of entering the name of a separate object that contain methods, I have entered a the name of the free object that we get along with a function called kidsData.prototype,,, Now in this kidsData.prototype I will be writing the methods

	kid.kidsName = kidsName;
	kid.kidsAge = kidsAge;
	kid.kidsId = kidsId;

	return kid;
}

kidsData.prototype.kidsInfo = function () {
	console.log(
		`${this.kidsName} of Id ${this.kidsId} is ${this.kidsAge} years old`
	);
};
kidsData.prototype.kidsPlaying = function () {
	console.log(`${this.kidsName} is playing in the ground`);
};

const kid_1 = kidsData("adil", 9, 1124);
console.log(kid_1);
kid_1.kidsPlaying();

////////////////////////////////////////////////////////////////////
/////////////////////////////////////
// new keyword

// The new keyword does 3 functions
// 1-- it creates an empty object
// 2-- it replaces the code line "Object.create(function.prototype)" by automatically connecting the function.prototype with the __proto__ of the object created
// 3-- it returns the object in the function by itself

// for example
function RipenedFruit(fruitName, isRipened) {
	// Notice that in the function i used Pascal notation instead of camel case notation because it is a convention to use Pascal notation when defining the constructor function,,, and all of the functions that we explained above, which generates an object are called Construstor function
	this.fruitName = fruitName;
	this.isRipened = isRipened;
}

//Now lets add a methods in the prototype of the function
RipenedFruit.prototype.aboutFruit = function () {
	console.log(
		`The fruit ${this.fruitName} is ${
			this.isRipened ? "now ripened" : "not ripened"
		}`
	);
};

const fruit_1 = new RipenedFruit("papaya", false);
console.log(fruit_1);

fruit_1.aboutFruit();

///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// Classes in javascript

// classes creates the making of constructor functions even much more easier
// for example

class Animal {
	constructor(animalName, animalAge) {
		this.animalName = animalName;
		this.animalAge = animalAge;
	}

	eat() {
		return `${this.animalName} of ${this.animalAge} years, has been eating since morning`;
	}
}

const animal_1 = new Animal("horse", 43);
console.log(animal_1);

console.log(animal_1.eat());

//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// extends keyword in javascript

// extend keyword is used when we need to inherit all the properties from a previous class

class Dog extends Animal {}
const dog_1 = new Dog("tommy", 3);
console.log(dog_1);
//I can also use the methods
console.log(dog_1.eat());

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////
// super keyword in javascript

// this extends keyword inherit all the properties from the previous class but what if we want some new properties in the Dog class, then we need to use super keyword
// for example

class Cow extends Animal {
	constructor(animalName, animalAge, isGrazing) {
		super(animalName, animalAge); // see how super() is used

		this.isGrazing = isGrazing;
	}
	// for example if we want to modify the eat() method already presend in the previous/super class, then we just need to define the method agian in the new class, simple!!!
	eat() {
		return `The cow named ${this.animalName} of ${this.animalAge}, has been grazing the grass since morning`;
	}
}

const myCow = new Cow("browny", 24, true);
console.log(myCow);

console.log(myCow.eat());
