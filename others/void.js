"use strict";
// regular IIFE
(function () {
  console.log("This function is executed immediately!");
})();

// same effect as IIFE syntax
void (function () {
  console.log("This function also executed immediately!");
})();
