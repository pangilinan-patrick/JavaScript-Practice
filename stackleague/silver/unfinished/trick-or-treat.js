// Unfinished
function trick_or_treat(candies, threshold) {
  let accTotal = [];
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    let total = 0;
    for (let j = 0; j < candies.length; j++) {
      // initial check if candy is under threshold
      if (candies[i] + candies[j] < threshold && i !== j) {
        // check if total still hasn't broken threshold after adding two numbers
        if (total > 0 && (total += candies[j]) < threshold) {
          accTotal[i].unshift(j);
          total += candies[j];
          accTotal[i][accTotal[i].length - 1] += candies[j];
          console.log("if");
        } else if (total === 0) {
          // if total hasn't yet been added
          total = candies[i] + candies[j];
          console.log("else");
        } else break;
        accTotal.push([i, j, total]);
        console.log(i, j, candies[i], candies[j], total);
        console.log(accTotal);
      }
    }
  }
  // return empty array if no satisfactory result
  if (accTotal.length === 0) return [];

  // for (let i = 0; i < accTotal.length; i++) {
  //   accTotal[i].sort((a, b) => a - b);
  // }
  // accTotal.sort((a, b) => a[0] - b[0]);

  let minValue = accTotal[0][accTotal[0].length - 1];
  for (let i = 0; i < accTotal.length; i++) {
    if (accTotal[i][accTotal[i].length - 1] < minValue) {
      minValue = accTotal[i][accTotal[i].length - 1];
    }
  }

  console.log(accTotal);
  console.log(minValue);

  for (let i = 0; i < accTotal.length; i++) {
    if (accTotal[i][accTotal[i].length - 1] === minValue)
      console.log(accTotal[i]);
  }
  return result;
}

// let candies = [72, 6, 84, 9, 10];
// let threshold = 99;

// let candies = [62, 67, 100];
// let threshold = 8;

let candies = [6, 88, 1, 12, 15];
let threshold = 33;

trick_or_treat(candies, threshold);
