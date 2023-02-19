function palindrome(str) {
  // turn the string into lower case for easy validation
  str = str.toLowerCase();
  // string regex for special symbols
  str = str.replace(/[.,\ \*\-\_\\()]/g, "");
  // initialize reversed string
  let reversedStr = "";
  // reverse the string
  for (let i = str.length - 1; i !== -1; i--) reversedStr += str[i];
  // if reversed string is equal to input string, true
  if (reversedStr == str) return true;
  else return false;
}

console.log(palindrome("Eye"));
