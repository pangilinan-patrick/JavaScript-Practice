// num of participants (t-shirts) > than who can win laptop bag
// num of participants (can win) < half the num of participants

function small_tournament(number_of_participants, N) {
  // output = [laptop bag, tshirt, losers]
  if (isNaN(number_of_participants) || isNaN(N)) return null;
  const initialLimit = number_of_participants / 2;
  let losers = 0;
  let laptop = 0;
  let tshirt = 0;

  for (let i = 0; i < initialLimit; i++) {
    let result = 0;
    result = i * N;

    if (initialLimit < result + i) {
      laptop = i - 1;
      tshirt = (i - 1) * N;
      break;
    }
  }
  losers = number_of_participants - (laptop + tshirt);
  console.log(laptop, tshirt, losers);
  return [laptop, tshirt, losers];
}

small_tournament(100, 2);
small_tournament(63, 4);
small_tournament(10, 6);
small_tournament(59, 1);
