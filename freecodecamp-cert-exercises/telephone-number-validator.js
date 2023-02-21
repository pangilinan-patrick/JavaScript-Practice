/* console.log(telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above.
The area code is required. If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.

*/

function telephoneCheck(str) {
  // regular expression to match non-numeric characters excluding hyphens and dashes and spaces
  var regex = new RegExp("[^\\d()-\\s]");
  // new string for the processed string
  var processed = "";
  // bool for checking parenthesis
  var openPFound = false;
  var closePFound = false;

  if (regex.test(str)) {
    return false; // return false if input has non-valid characters
  }

  // if format follows the number with open and closed parenthesis at the beginning format, check if the closing parenthesis is present or in the right position
  if (str[0] == "(" && str[4] !== ")") return false;
  // if there's a dash at the beginning, don't accept the number
  if (str[0] == "-") return false;
  // check if 2nd index has invalid space
  if (str[2] === " ") return false;

  // for loop checking for open and closed parenthesis and removing all spaces between each character on the number
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") openPFound = true;
    if (str[i] == ")") closePFound = true;

    if (!isNaN(str[i]) && str[i] !== " ") {
      processed += str[i];
    }
  }

  // if there's an unfinished parenthesis, reject the number
  if (
    (openPFound === false && closePFound === true) ||
    (openPFound === true && closePFound === false)
  )
    return false;

  // if there's 10 digits, then return true
  if (processed.length === 10) return true;
  // if there's 11 digits, signifying that a country code is used, check if code is 1
  else if (processed.length === 11 && processed[0] == 1) return true;
  // otherwise, return false
  else return false;
}

// Freecode camp inputs
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("55555555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("2 757 622-7382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("2(757)6227382"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("11 555-555-5555"));
