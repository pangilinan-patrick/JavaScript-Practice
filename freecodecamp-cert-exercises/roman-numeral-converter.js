// In optimizing the code: I put into practice rest parameters and closure

function convertToRoman(num) {
  let input = num;
  // splits the digits into its place values
  let splitInput = input.toString().split("");
  if (splitInput.length < 4) {
    for (let i = 0; i <= 4 - splitInput.length; i++) {
      if (splitInput.length == 1) splitInput.unshift(0);
      splitInput.unshift(0);
    }
  }

  let answer = "";

  for (let i = 0; i < splitInput[0]; i++) {
    answer += "M";
  }

  function romanNumeralDigits(digit, ...romanSymbol) {
    if (splitInput[digit] == 9) answer += romanSymbol[0];
    // if place value is between 5 and 9
    else if (splitInput[digit] > 5 && splitInput[1] < 9) {
      answer += romanSymbol[1];
      for (let i = 0; i < splitInput[digit] - 5; i++) {
        answer += romanSymbol[3];
      }
    }

    // if place value is 5
    else if (splitInput[digit] == 5) answer += romanSymbol[1];
    // if place value is 4
    else if (splitInput[digit] == 4) answer += romanSymbol[2];
    // if place value is between 0.99 and 4
    else if (splitInput[digit] >= 1 && splitInput[digit] <= 4) {
      for (let i = 0; i < splitInput[digit]; i++) {
        answer += romanSymbol[3];
      }
    }
  }

  // Place value is hundredths
  romanNumeralDigits(1, "CM", "D", "CD", "C");
  // Place value is tenths
  romanNumeralDigits(2, "XC", "L", "XL", "X");
  // Place value is ones
  romanNumeralDigits(3, "IX", "V", "IV", "I");

  console.log(answer);
  console.log(splitInput);

  return answer;
}

convertToRoman(100);
