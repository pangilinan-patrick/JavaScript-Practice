function money_changer(moneys, change) {
  // sort moneys
  // loop from end index
  // nested loop for multiplying end index from 1
  // add the highest result from each index
  // as long as not over change
  // push successful addition into an array
  let result = 0;
  let added = 0;
  const resultsArray = [];
  moneys.sort();
  for (let i = moneys.length - 1; i >= 0; i--) {
    let j = 0;
    console.log("\n i =", i, ":", moneys[i]);
    while (change > result) {
      j++;
      // for pushing only the product of the last iteration in the last index
      if (moneys[i] * j > change) {
        resultsArray.push([moneys[i], j - 1]);
        break;
      }

      // if addition goes above change, go to next index
      if (change < result + moneys[i] * j && moneys.length - 1 !== i) {
        break;
      }

      // if in last index
      if (moneys.length - 1 === i) {
        result = moneys[i] * j;
        console.log("=", j, "*", moneys[i]);
      } else {
        console.log("=", result, "+", j, "*", moneys[i]);
        result += moneys[i] * j;
      }
      console.log(result);
      if (moneys.length - 1 !== i) resultsArray.push([moneys[i], j]);
    }
  }
  console.log(resultsArray);
  return resultsArray;
}

// money_changer([2, 4, 6], 8);
// money_changer([1, 2, 3, 4, 5], 11);
money_changer([2, 3, 6, 5, 8], 28);
