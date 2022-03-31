const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

const textAndColorChanger = (element, color, changedText) => {
	return new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				resolve(() => {
					element.textContent = changedText;
					element.style.color = color;
				});
			}, 1000);
		} else {
			reject(`The ${element} does not exist`);
		}
	});
};

textAndColorChanger(heading1, "pink", "Hello world")
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading2, "blue", "hello world 2");
	})
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading3, "green", "hello world 3");
	})
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading4, "red", "hello world 4");
	})
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading5, "purple", "hello world 5");
	})
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading6, "violet", "hello world 6");
	})
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading7, "yellow", "hello world 7");
	})
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading8, "indigo", "hello world 8");
	})
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading9, "maroon", "hello world 9");
	})
	.then((styleChanger) => {
		styleChanger();
		return textAndColorChanger(heading10, "brown", "hello world 10");
	})
	.then((styleChanger) => {
		styleChanger();
	});
