// higher order function
function createBase(base) {
  // return a function that will use the base variable outside of its scope. It will be accessible due to closure.
  return function (n) {
    return base + n;
  };
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(63));

// inspired by @sagormahtab
