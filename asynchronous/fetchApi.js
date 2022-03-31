const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
// 	.then((response) => {
// 		if (response.ok) {
// 			return response.json();
// 		} else {
// 			throw new Error("Something went wrong");
// 		}
// 	})
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

/////////
//Async Await

const fetchingData = async (url) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("somethind went wrong");
	}
	const data = await response.json();
	return data;
};

fetchingData(URL)
	.then((data) => console.log(data))
	.catch((error) => {
		console.log("inside catch");
		console.log(error);
	});
