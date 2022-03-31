// WHAT ARE ITERABLES
// Iterables are on which we can apply 'for of' loops, for Example, String and Array
const myFirstName = "zeeshan";

for (let char of myFirstName) {
	console.log(char);
}

///////////////////////////
//Array like objects
//which has length property and whose elements can be accessed by index
// example:- String

///////////////////////////////////////
/////////////////////
// SETS
// It is also iterable
// store iterables' data
// There is no index-bases access
// Order is not guaranted, which means order can be changed
// Set also have its own methods
// uniques items only, no duplicates allowed

const numbers = [1, 2, 3, 2, 5, 3];
let numberSet = new Set(numbers); // here in parantesis, i can write any iterable

console.log(numberSet); // this does not contain similar element which is the major difference between array and set

numberSet.add(6);
console.log(numberSet);

// we can also add an independent array
// for example:--
let items = ["item1", "item2"];
numberSet.add(items);
console.log(numberSet);

// we can also check the availability of an element in a Set using 'has' method

console.log(numberSet.has(5));

///////////////////////////////
//////////////
// MAPS are like object
// Map is an iterable (which means you can apply for loop)
// store data in order fashion

// store key value pair (like objects)
// but duplicate keys are not allowed like objects

// objects can only have symbol or string as key
// But in Maps you can use anything like Array, Number and string as key

const person = new Map();
person.set("key1", "value1");
person.set(2, "value2"); //Here I can use number as a key
person.set([1, 2, 3], "threeDigits"); // I can also use array as a key
person.set({ personName: "zeeshan", age: 23 }, "biodata"); // Here I can also use object literals as a key too

console.log(person);

// Here we can't access the properties with the help of dot operator or bracket notation, else we need to apply a get() function to get a value of a key in Map
console.log(person.get("key1"));

// MAP IS ITERABLE, and this can be proved if it can work with 'for of' loop

for (let keyValuePair of person) {
	console.log(keyValuePair); // Notice that it gives key value pairs in the form of array thus we can destructure it, as it is done below
}
//for keys
for (let key of person.keys()) {
	console.log(key);
}
// for values
for (let value of person.values()) {
	console.log(value);
}
// since it gives 'key value pairs' in the form of arrays, so we can also destructure it in the loop
for (let [key, value] of person) {
	console.log(key, value);
}

////////////////////////////////////////
//////////////////////
// Optional Chaining

const user = {
	firstName: "zeeshan",
	address: { houseNumber: "328" },
};

console.log(user?.firstName);
console.log(user?.address?.houseNumber); // This question mask before the dot to access the values of keys of an object represents optional chaining, what it does is, if the key does not exist in the object then it would return undefined instead of giving an error
