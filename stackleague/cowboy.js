function cowboy(bullets, dragons) {
  //takes 2 bullets to defeat a dragon
  if (isNaN(bullets) || isNaN(dragons)) return null;
  if (dragons === 0) return true;
  else if (dragons * 2 - bullets === 0) return true;
  else return false;
}

console.log(cowboy(3, 2));
console.log(cowboy(7, 4));
console.log(cowboy(-1, 3));
