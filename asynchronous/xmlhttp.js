// There are three ways to retrieve and send data to the server
// 1. xmlHTTP request
// 2. fetch API
// 3. Axios library

// HERE WE WILL DISCUSS THE WAY OF SENDING xmlHTTP REQUESTS (XHR)

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

// xhr.onreadystatechange = () => {
// 	if (xhr.readyState === 4) {
// 		const response = xhr.response;
// 		const data = JSON.parse(response);
// 		console.log(typeof data);
// 	}
// };

// we have a much easieer way of doing the above thing, as follows

xhr.onload = () => {
	// console.log(xhr.readyState); --> it will print 4, same as above
	if (xhr.status >= 200 && xhr.status < 300) {
		const response = xhr.response;
		const data = JSON.parse(response);
		console.log(data);
	} else {
		console.log("Oops somethind went wrong");
	}
};

xhr.onerror = () => {
	console.log("network error");
};
// console.log(xhr);
