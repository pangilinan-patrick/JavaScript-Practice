function caesarCipher(s, k) {
  const charArr = [];
  const nonAlph = /[^a-zA-Z]/;
  // a = 97; z = 122;
  // a = 65; z = 90;
  for (let i = 0; i < s.length; i++) {
    if (nonAlph.test(s[i])) {
      console.log(s[i]);
      charArr.push(s.charCodeAt(i));
      continue;
    }

    if (s.charCodeAt(i) - k < 97 && s.charCodeAt(i) >= 97) {
      let diff = 122 - (96 - (s.charCodeAt(i) - k));
      charArr.push(diff);
    } else if (s.charCodeAt(i) - k < 65 && s.charCodeAt(i) <= 90) {
      let diff = 90 - (64 - (s.charCodeAt(i) - k));
      charArr.push(diff);
    } else {
      charArr.push(s.charCodeAt(i) - k);
    }
    charArr.push(s[i]);
  }
  let text = String.fromCharCode(...charArr);
  console.log(text);
  console.log(charArr);
}

caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3);
