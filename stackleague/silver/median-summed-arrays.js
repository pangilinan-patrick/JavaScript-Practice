class Numbers {
  constructor() {
    this.finalResult = [];
  }
  // this will return the summed array with the given conditions
  // on the problem
  static GetSummedArray(input) {
    let nanFlag = false;
    input.forEach((row) =>
      row.forEach((col) => {
        if (isNaN(col)) nanFlag = true;
      })
    );
    if (input.every((row) => Array.isArray(row) && row.length === 0)) return [];
    if (nanFlag === true) return [];
    const result = input[0].map((_, colIndex) => {
      return input.reduce((acc, row) => acc + row[colIndex], 0);
    });

    this.finalResult = result.map((row) => {
      if (row % 2 === 0) {
        return row * 2 + 1;
      } else return row * row;
    });
    console.log(this.finalResult);
    return this.finalResult;
  }

  // this function will return the median of the summed array
  static GetMedian(input) {
    let nanFlag = false;
    input.forEach((row) =>
      row.forEach((col) => {
        if (isNaN(col)) nanFlag = true;
      })
    );
    if (input.every((row) => Array.isArray(row) && row.length === 0)) return [];
    if (nanFlag === true) return [];
    let middle = [];
    let median = 0;
    const summedArray = [...this.finalResult];
    let div = summedArray.length / 2;
    if (summedArray.length % 2 === 0) {
      middle = summedArray.slice(div - 1, div + 1);
    } else {
      median = Math.floor(div);
      console.log(summedArray[median]);
      return summedArray[median];
    }
    median = middle.reduce((acc, row) => acc + row, 0);
    console.log(median / 2);
    return median / 2;
  }
}

// Numbers.GetMedian([[], []]);
Numbers.GetSummedArray([
  [1, 2, 3, 4],
  [10, 5, 2, 0],
]);
Numbers.GetMedian([
  [1, 2, 3, 4],
  [10, 5, 2, 0],
]);
