//function returning function

const powerSetter = (power) => {
	return (poweredNumber = (number) => {
		console.log(number ** power);
	});
};

const cube = powerSetter(3);
cube(2);

const func = () => () => {
	console.log("Hi, You called me!");
	return () => {
		console.log("you called me again");
	};
};

const myFunc = func();
myFunc();
myFunc();
