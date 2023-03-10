// accepts pos integer
// returns bigger integer formed using same digits
//12 > 21
//513 > 531

// if no bigger number then retun -1

function nextBigger(number) {
  let splitNum = number.toString().split("");
  let check = number.toString().split("");
  if (splitNum.length === 1) return -1;

  check.sort();
  check.reverse();
  let checkResult = parseInt(check.join(""));
  if (checkResult == number) return -1;

  let i = splitNum.length - 1;
  // console.log("splitNum[i - 1]: ", splitNum[i - 1]);
  // console.log("splitNum[i]: ", splitNum[i]);
  while (i > 0 && splitNum[i - 1] >= splitNum[i]) {
    i--;
  }
  // console.log("i: ", i);

  let j = splitNum.length - 1;
  // console.log("splitNum[j]: ", splitNum[j]);
  // console.log("splitNum[i - 1]: ", splitNum[i - 1]);
  while (splitNum[j] <= splitNum[i - 1]) {
    j--;
  }
  // console.log("j: ", j);

  let temp = splitNum[i - 1];
  splitNum[i - 1] = splitNum[j];
  splitNum[j] = temp;

  let sorted = splitNum.slice(i).sort();
  // console.log("sorted: ", sorted);
  // console.log("splitNum: ", splitNum);

  let result = parseInt(splitNum.slice(0, i).concat(sorted).join(""));

  return result;
}

console.log(nextBigger(9));
console.log(nextBigger(11));
console.log(nextBigger(123));
console.log(nextBigger(790));
console.log(nextBigger(513));
console.log(nextBigger(531));
