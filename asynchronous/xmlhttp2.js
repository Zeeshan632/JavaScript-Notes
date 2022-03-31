const URL = "https://jsonplaceholder.typicode.com/posts";
const URL2 = `${URL}/${4}`;

const sendingXMLReq = (url) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.open("GET", url);
		request.onload = () => {
			if (request.status >= 200 && request.status < 300) {
				const data = JSON.parse(request.response);
				console.log(data);
				resolve();
			} else {
				reject(new Error("Something Went Wrong"));
			}
		};
		request.onerror = () => {
			reject(
				new Error("Something went wrong, might be some connection issues")
			);
		};
		request.send();
	});
};

sendingXMLReq(URL)
	.then(() => sendingXMLReq(URL2))
	.catch((err) => console.log(err));
