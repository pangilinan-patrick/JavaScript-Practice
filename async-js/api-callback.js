const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  //state 0: UNSENT
  //state 1: OPENED
  //state 2: HEADERS_RECEIVED
  //state 3: LOADING
  //state 4: DONE
  request.open("GET", resource); // ready state 1
  request.send(); // ready state 2
};

// callback hell
getTodos("https://jsonplaceholder.typicode.com/todos/", (err, data) => {
  console.log(data);
  getTodos("https://jsonplaceholder.typicode.com/albums", (err, data) => {
    console.log(data);
    getTodos("https://jsonplaceholder.typicode.com/posts", (err, data) => {
      console.log(data);
    });
  });
});
