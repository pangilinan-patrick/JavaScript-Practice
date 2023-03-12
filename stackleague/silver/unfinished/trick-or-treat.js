function trick_or_treat(candies, threshold) {
  let results = [34, 24, 25];
  for (let i = 0; i < candies.length; i++) {
    results[i] = 0;
    for (let j = 0; j < candies.length; j++) {
      results += candies[j];
    }
  }
  console.log(results);
}

trick_or_treat([33, 20, 12, 19, 29], 33);
