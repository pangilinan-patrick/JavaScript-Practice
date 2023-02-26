// Creating a range of numbers through recursion
function rangeOfNumbers(startNum, endNum) {
  // returns starting number if both are the same number (meaning there is no range to be made) e.g. (4,4)
  if (startNum === endNum) return [startNum];
  else {
    // creates an array range to recurse through the rangeOfNumbers function
    const range = rangeOfNumbers(startNum, endNum - 1);
    // push current number of endNum as it decreases down to startNum
    range.push(endNum);
    console.log(range);
    return range;
  }
}

rangeOfNumbers(1, 5);
