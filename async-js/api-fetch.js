// async & await
const getTodos = async () => {
  // chaining
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  // check if data not found
  if (response.status !== 200) {
    throw new Error("couldn't find the data.");
  }

  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log("resolved: ", data, data[0]))
  .catch((err) => console.log("error: ", err.message));

// fetch api with no async & await
// fetch("https://jsonplaceholder.typicode.com/todos")
//   //response only happens on network error
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
