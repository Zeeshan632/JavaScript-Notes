////////////////////////////////////////////////

//IMPORTANT Array Methods

/////////////
// 1--- foreach() method
let numbers = [4, 2, 5, 8];

numbers.forEach((number) => {
	return number * 2;
});

const users = [
	{ userId: 1, firstName: "zeeshan", gender: "male" },
	{ userId: 2, firstName: "ali", gender: "male" },
	{ userId: 3, firstName: "shaikh", gender: "male" },
];

users.forEach((user) => {
	console.log(user.firstName);
});

/////////////
// 2--- map() method

let numbersArray = numbers.map((number) => {
	return number * 2;
});

console.log(numbersArray);
// ===>> The KEY DIFFERENCE between foreach() and map() is, that foreach() returns every element of the array passed with the operation applied while map() return a completely new array of the elements of the array passed with the operations applied

//question ....
// Here you can use the above 'User' array defined above

let userNames = users.map((user) => {
	return user.firstName;
});
console.log(userNames);

////////
// 3--- filter() method
// the special thing about filter() method is, it always return either true or false, if the condition is true for the element being processed then it will be returned in to the new filtered array.

let randomNumbers = [2, 3, 4, 5, 6, 7, 8, 9];

let evenNumbers = randomNumbers.filter((number) => {
	return number % 2 === 0;
});
let oddNumbers = randomNumbers.filter((number) => {
	return number % 2 !== 0;
});

console.log(evenNumbers);
console.log(oddNumbers);

//////////
// 4--- reduce() method

//here I am using the above already defined array called 'randomNumbers'

let sumOfNum = randomNumbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});

console.log(sumOfNum);

// question
const userCart = [
	{ productName: "mobile", price: 12000 },
	{ productName: "laptop", price: 40000 },
	{ productName: "cycle", price: 10000 },
	{ productName: "tv", price: 22000 },
];

let totalPrice = userCart.reduce((totalPrice, currentProduct) => {
	return totalPrice + currentProduct.price;
}, 0);

console.log(totalPrice);

//////////
// 5--- sort() method
// sort() changes the original array

// The weired thing is sort() method generally works after converting number to string and arranging them according to their "ASCII value",, thus in the following example:

let numbersToBeSorted = [2, 30000, 35, 230, 223000, 100];
let sortedNumbers = numbersToBeSorted.sort();
console.log(sortedNumbers); //this show that weired result because numbers with more than one digit, the ASCII value that is evaluated is only of the first digit

//this evaluation of sort() method is helpfull when sorting strings present in an array, for example:
let classmates = [
	"daren",
	"ashfaq",
	"rabel",
	"silvester",
	"habibi",
	"trevor",
	"Zeeshan",
];
console.log(classmates.sort()); // Here you can notice that all the names are ordered according their first letter, but for the names 'Zeeshan', there is capital Z is used and the capital letters have lesser ASCII values that's why 'Zeeshan' with Z is soreted First

//Now the question arises how to sort an array with numbers, OUR THAT PROBELEM IS STILL NEED TO BE SOLVED
numbersToBeSorted.sort((a, b) => {
	return a - b; // 'a' is the first value and 'b' is the second value, if their subtraction yields Positive number then 'b' will be sorted first and if it yields a negative number then 'a' will be sorted first
});
console.log(numbersToBeSorted);

///
//question ---> sort the products in the userCart in an ascending order

// Here I am using the same 'userCart' array defined above
// userCart.sort((a, b) => {
// 	return a.price - b.price;
// });

console.log(userCart); //Since sort manipulates the original arraya and we don't want it, so we need to clone the array

let sortedProducts = userCart.slice(0).sort((a, b) => {
	return a.price - b.price;
});

console.log(sortedProducts);

////////////
// 6--- find() method
//find() method returns the item for which true is returned by the callback function

let animals = ["elephant", "rhinocerose", "duck", "dog", "cat"];

let threeLetteredAnimal = animals.find((animal) => {
	return animal.length === 3;
});
console.log(threeLetteredAnimal);

//question
//here i am using the same userCart array defined above

let laptop = userCart.find((product) => product.productName === "laptop");
console.log(laptop);

///////////////
// 7--- every() method
//this method returns either 'true' or 'false' value if the condition given is true for every element of the array

let priceChecking = userCart.every((product) => product.price <= 40000);
console.log(priceChecking);

////////////
// 8--- some() method
// this method would also return either 'true' or 'false' value like every method but unlike every(), some() would return true even if just one element return true for the condition

let lowestPriceChecking = userCart.some((product) => product.price < 100);
console.log(lowestPriceChecking);

//////////////////
// 8--- fill() method
// fill() changes the original array

const myArray = new Array(10).fill(-1);
console.log(myArray);

const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myNewArray.fill(0, 2, 5);
console.log(myNewArray);

////////////////////
// 9--- splice() method
// splice() method is used to insert or delete elements from an array

let splicedArray = myNewArray.splice(2, 3);
console.log(splicedArray);
console.log(myNewArray);
//the splice method changes the original array

// now inserting element with the help of splice()
myNewArray.splice(2, 0, 3, 4, 5); // this happened because after starting arguments , the third argument recieves values to be inserted
console.log(myNewArray);

// now we insert and delete at the same time
myNewArray.splice(2, 3, 5, 4, 3);
console.log(myNewArray);
