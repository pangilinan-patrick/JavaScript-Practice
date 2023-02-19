function convertToRoman(num) {
  let str = "";
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

  // if hundredths is 900
  if (splitInput[1] == 9) answer += "CM";
  // if hundredths is between 500 and 900
  else if (splitInput[1] > 5 && splitInput[1] < 9) {
    answer += "D";
    for (let i = 0; i < splitInput[1] - 5; i++) {
      answer += "C";
    }
  }

  // if hundredths is 500
  else if (splitInput[1] == 5) answer += "D";
  // if hundredths is 400
  else if (splitInput[1] == 4) answer += "CD";
  // if hundredths is between 99 and 400
  else if (splitInput[1] >= 1 && splitInput[1] <= 4) {
    for (let i = 0; i < splitInput[1]; i++) {
      answer += "C";
    }
  }

  // if tens is 90
  if (splitInput[2] == 9) answer += "XC";
  // if tens is between 50 and 90
  else if (splitInput[2] > 5 && splitInput[2] < 9) {
    answer += "L";
    for (let i = 0; i < splitInput[2] - 5; i++) {
      answer += "X";
    }
  }

  // if tens is 50
  else if (splitInput[2] == 5) answer += "L";
  // if tens is 40
  else if (splitInput[2] == 4) answer += "XL";
  // if tens is between 9 and 40
  else if (splitInput[2] >= 1 && splitInput[2] <= 4) {
    for (let i = 0; i < splitInput[2]; i++) {
      answer += "X";
    }
  }

  // if ones is 9
  if (splitInput[3] == 9) answer += "IX";
  // if ones is between 5 and 9
  else if (splitInput[3] > 5 && splitInput[3] < 9) {
    answer += "V";
    for (let i = 0; i < splitInput[3] - 5; i++) {
      answer += "I";
    }
  }

  // if ones is 5
  else if (splitInput[3] == 5) answer += "V";
  // if ones is 4
  else if (splitInput[3] == 4) answer += "IV";
  // if ones is between 1 and 4
  else if (splitInput[3] >= 1 && splitInput[3] <= 4) {
    for (let i = 0; i < splitInput[3]; i++) {
      answer += "I";
    }
  }
  console.log(answer);
  console.log(splitInput);

  return answer;
}

convertToRoman(100);
