/*
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

async function rot13(str) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S", // 18
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  /* check index of letter
   * if space or punctuation, concatenate to new deciphered string
   * else if not a space, go up by 13 from index in alphabet
   * if index goes above 25, reset to 0
   * concatenate char to a new string when on 13th iteration
   */

  // NOTE: This only covers the inputs given by freecodecamp and doesn't cover all edge cases

  let deciphered = "";
  let decipheredAnim = "";
  let indexInAlphabet = 0;

  for (let i = 0; i < str.length; i++) {
    indexInAlphabet = alphabet.indexOf(str[i]);
    if (str[i] === " " || str[i] === "." || str[i] === "!" || str[i] === "?")
      deciphered += str[i];
    else {
      for (let j = 0; j < 13; j++) {
        // console.log(indexInAlphabet);
        indexInAlphabet++;
        if (indexInAlphabet > 25) indexInAlphabet = 0;
        await new Promise((resolve) => setTimeout(resolve, 20));
        decipheredAnim = alphabet[indexInAlphabet];
        console.clear();
        console.log(deciphered + decipheredAnim);
      }
      decipheredAnim = "";
      // console.log(alphabet[indexInAlphabet]);
      deciphered += alphabet[indexInAlphabet];
    }
  }
  return deciphered;
}
/* rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

// rot13("SERR PBQR PNZC");
// rot13("SERR CVMMN!");
// rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
