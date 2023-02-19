// CURRENTLY WORK IN PROGRESS
// Problem: Create the inverse of a sentence
// i.e: If p, then q should be If not p, then not q
function inverseText(input) {
  // Solution: Invert the sentence by starting off the first word after "If", then add "not " to it. Does the same thing for "then"
  // Example input: If dog, then bark
  // Turns the input into lowercase for easy validation
  input = input.toLowerCase();
  // Searches for the index of the word "then"
  let searchThen = input.search("then");
  // Makes a string that starts off the first word after "If"
  let cutIf = input.slice(3);
  // Searches for the index in the cut sentence
  let searchCutIf = cutIf.search("then");
  // Concatenates "not " to the word after "If ", then includes the next words after it before "then"
  let ifOutput = input.slice(0, 3) + "not " + cutIf.slice(0, searchCutIf);

  // Array of pronouns
  let pronouns = ["i", "he", "we", "they"];

  let thenOutputPronoun = input.slice(searchThen);
  console.log(thenOutputPronoun);

  let splitInput = thenOutputPronoun.split(/ /);

  for (let i = 0; i < splitInput.length; i++) {
    for (let j = 0; j < pronouns.length; j++) {
      if (splitInput[i] === pronouns[j]) {
        splitInput.splice(splitInput.indexOf(pronouns[j]) + 1, 0, "won't");
        console.log("There's a pronoun found at index " + i + "!");
        var pronounFound = 1;
        console.log(splitInput);
      }
    }
  }

  // Starts off the word after "then ", then adds "not ", and includes the rest of the sentence.
  let thenOutput =
    input.slice(searchThen, searchThen + 5) +
    "not " +
    input.slice(searchThen + 5);

  // Returns the output of splitting the sentence between "if" and "then"
  switch (pronounFound) {
    default:
      return ifOutput + thenOutput;
      break;

    case 1:
      let output = splitInput.join(" ");
      return ifOutput + output;
      break;
  }
}

// Update the paragraph tag in the HTML doc
function updateInverse() {
  var inputText = document.getElementById("input").value;
  document.getElementById("output").innerHTML = inverseText(inputText);
}
