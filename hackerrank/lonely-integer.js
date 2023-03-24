function lonelyinteger(a) {
  let unique = 0;
  console.log(a);
  if (a.length === 1) return a[0];
  for (let i = 0; i < a.length; i++) {
    let counter = 0;
    for (let j = 0; j < a.length; j++) {
      console.log(i, "i", j, "j", a[i], a[j]);
      if (a[i] === a[j]) counter++;
      if (counter > 1) {
        console.log("break");
        break;
      }
      if (j === a.length - 1) {
        unique = a[i];
        console.log("unique:", unique);
        return unique;
      }
    }
  }
}
