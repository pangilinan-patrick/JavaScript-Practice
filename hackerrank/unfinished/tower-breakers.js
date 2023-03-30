function towerBreakers(n, m) {
  const towers = [];
  const movesArr = [];
  let move = 0;
  let counter = 0;

  // create towers of height n
  for (let i = 0; i < n; i++) {
    towers.push(m);
  }

  while (counter < 3) {
    // get highest tower
    let i = towers.indexOf(Math.max(...towers));

    for (let j = towers[i] - 1; j > 1; j--) {
      movesArr.push(towers[i] % j);
      console.log(`j = ${j}`);
      if (towers[i] % j === 0) {
        console.log(j);
        towers[i] -= j;
        counter++;
        move = 1;
        break;
      } else move = 0;
    }
    console.log(towers);
    console.log(`Counter: ${counter}`);
    if (move === 0) {
      if (counter % 2 === 0) {
        console.log("P1 Wins!");
        return 1;
      } else {
        console.log("P2 Wins!");
        return 2;
      }
    }
  }
}

towerBreakers(2, 6);
