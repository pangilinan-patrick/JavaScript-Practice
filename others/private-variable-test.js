// Private functions
function myFunc() {
  var private = "test";
  return function () {
    return private;
  };
}
var getPriv;
getPriv = myFunc();
console.log(getPriv());
