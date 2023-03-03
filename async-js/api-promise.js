const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        const err = "could not find data";
        reject(err);
      }
    });

    //state 0: UNSENT
    //state 1: OPENED
    //state 2: HEADERS_RECEIVED
    //state 3: LOADING
    //state 4: DONE
    request.open("GET", resource); // ready state 1
    request.send(); // ready state 2
  });
};

getTodos("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log("promise 1 resolved: ", data);
    return getTodos("https://jsonplaceholder.typicode.com/todos");
  })
  .then((data) => {
    console.log("promise 2 resolved: ", data);
    return getTodos("https://jsonplaceholder.typicode.com/albums");
  })
  .then((data) => {
    console.log("promise 3 resolved: ", data);
  })
  .catch((err) => {
    console.log(err);
  });
