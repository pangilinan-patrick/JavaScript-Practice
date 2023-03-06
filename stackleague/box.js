function box(leng, width, heigth, content) {
  // check if volume will fit the content
  if (content <= 0 || leng <= 0 || width <= 0 || heigth <= 0) return null;
  else if (isNaN(content) || isNaN(leng) || isNaN(width) || isNaN(heigth))
    return null;
  const INCHES = 0.393701;
  leng *= INCHES;
  width *= INCHES;
  heigth *= INCHES;
  let volume = leng * width * heigth;
  console.log(volume);
  if (content < volume) return true;
  else if (content > volume) return false;
}

console.log(box(35, 22, 0, 1221.1));
console.log(box(35, 22, 26, "not a number"));
// box(35, 22, 26, 1221.1);
// box(3, 2, 2.6, 1);
