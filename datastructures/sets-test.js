"use strict";
function setOperations() {
  const setInput = new Set();

  function setAddClosure() {
    setAdd(setInput);

    let output = "";
    setInput.forEach((key) => {
      output += key + "<br />";
    });

    document.getElementById("result").innerHTML = output;
    document.getElementById("setInput").value = "";
  }

  function setHasClosure() {
    document.getElementById("has").innerHTML = setHas(setInput);
  }

  function setDeleteClosure() {
    setDelete(setInput);

    let output = "";
    setInput.forEach((key) => {
      output += key + "<br />";
    });

    document.getElementById("result").innerHTML = output;
    document.getElementById("setInput").value = "";
  }

  return {
    setAddClosure,
    setHasClosure,
    setDeleteClosure,
  };
}

function setAdd(setInput) {
  const input = document.getElementById("setInput").value;
  if (input.trim() !== "") setInput.add(input);
}

function setHas(setInput) {
  const input = document.getElementById("setInput").value;
  if (input.trim() !== "") return setInput.has(input);
  else if (input.trim() === "") return "Enter a value!";
  else return false;
}

function setDelete(setInput) {
  const input = document.getElementById("setInput").value;
  if (input.trim() !== "") setInput.delete(input);
}

const setOp = setOperations();
const addResult = setOp.setAddClosure;
const hasResult = setOp.setHasClosure;
const deleteResult = setOp.setDeleteClosure;
