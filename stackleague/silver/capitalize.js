function CapitalizeEachWord(text) {
  let split = text.split(" ");
  let strResult = "";
  for (let i = 0; i < split.length; i++) {
    strResult += split[i][0].toUpperCase();
    for (let j = 1; j < split[i].length; j++) {
      strResult += split[i][j].toLowerCase();
    }
    if (split.length - 1 !== i) strResult += " ";
  }

  console.log(strResult);
  return strResult;
}

CapitalizeEachWord("hello world");
CapitalizeEachWord("kUmuSta mUndO");
CapitalizeEachWord("one TWO tHRee FOUr");
