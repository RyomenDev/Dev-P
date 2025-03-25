function fetchData(url, callback) {
  console.log("Fetching data from", url);

  const data = { id: 1, name: "Product A" };
  callback(data); // Calling the callback function with fetched data
}

function handleResponse(response) {
  console.log("Received data:", response);
}

// Calling fetchData and passing handleResponse as a callback
fetchData("https://api.example.com/product", handleResponse);
