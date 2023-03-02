"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let posCount = 0;
  let negCount = 0;
  let zerCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) negCount++;
    else if (arr[i] > 0) posCount++;
    else zerCount++;
  }
  const posRatio = posCount / arr.length;
  const negRatio = negCount / arr.length;
  const zerRatio = zerCount / arr.length;

  console.log(
    posRatio.toFixed(5) +
      "\n" +
      negRatio.toFixed(5) +
      "\n" +
      zerRatio.toFixed(5)
  );
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
