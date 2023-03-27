function diagonalDifference(arr) {
  let j = 0;
  let k = arr.length - 1;
  let lrd = 0; // left to right
  let rld = 0; // right to left
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    lrd += arr[i][j];
    rld += arr[i][k];
    j++;
    k--;
  }
  result = Math.abs(lrd - rld);

  return result;
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
