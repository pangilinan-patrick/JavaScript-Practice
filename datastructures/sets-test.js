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
    setDeleteClosure,
  };
}

function setAdd(setInput) {
  const input = document.getElementById("setInput").value;
  if (input.trim() !== "") setInput.add(input);
}

function setDelete(setInput) {
  const input = document.getElementById("setInput").value;
  if (input.trim() !== "") setInput.delete(input);
}

const setOp = setOperations();
const addResult = setOp.setAddClosure;
const deleteResult = setOp.setDeleteClosure;
