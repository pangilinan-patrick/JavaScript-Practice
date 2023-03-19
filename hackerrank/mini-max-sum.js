function miniMaxSum(arr) {
  let result = 0;
  let finalResult = [];
  let counter = 0;

  outerloop: for (let i = 0; i < arr.length; i++) {
    counter = 0;
    result = 0;
    for (let j = 0; j < arr.length; j++) {
      if (counter === 4) {
        finalResult.push(result);
        continue outerloop;
      }
      if (j === i) continue;
      else {
        result += arr[j];
        counter++;
      }
      // console.log(arr[j]);
    }
    finalResult.push(result);
  }
  const min = Math.min(...finalResult);
  const max = Math.max(...finalResult);
  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);
