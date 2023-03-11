// submission cases not met yet
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function shifts(guards) {
  let temp = [...guards];
  let swaps = 0;
  guards.sort((a, b) => {
    return a - b;
  });

  while (!areArraysEqual(guards, temp)) {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] > temp[i + 1]) {
        let tempSwap = temp[i];
        temp[i] = temp[i + 1];
        temp[i + 1] = tempSwap;
        swaps++;
      }
    }
    // console.log(guards, swaps);
  }

  console.log(temp, swaps);
  return swaps;
}

shifts([3, 4, 1, 2]);
shifts([3, 54, 43, 4, 33, 1, 2]);
