// Example:
// pop 1000 beginning of year
// increases 2 percent per y
// 50 new life forms come per y

//how many years til pop > 1200

function nbYear(startingPopulation, percent, additional, targetPopulation) {
  //code here
  let years = 0;

  let result =
    startingPopulation + startingPopulation * (percent / 100) + additional;
  console.log(result);
  years++;

  while (result < targetPopulation) {
    result = result + result * (percent / 100) + additional;
    years++;
  }
  console.log(years);
  return years;
}

nbYear(1500, 5, 100, 5000); //15
nbYear(1500000, 2.5, 10000, 2000000); //10
