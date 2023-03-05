"use strict";

function setInsert() {
  const setInput = new Set();

  return function setInsertClosure() {
    const input = document.getElementById("setInput").value;
    setInput.add(input);

    let output = "";
    setInput.forEach((key) => {
      output += key + ", ";
    });
    document.getElementById("result").innerHTML = output;
  };
}

const addResult = setInsert();
