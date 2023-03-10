function store_promotion(
  Money,
  buy_chips_promo_with_free,
  free_chips,
  chips_price
) {
  if (
    isNaN(Money) ||
    isNaN(buy_chips_promo_with_free) ||
    isNaN(free_chips) ||
    isNaN(chips_price)
  )
    return null;
  const chipsBought = Math.trunc(Money / chips_price);
  const result =
    Math.trunc(chipsBought / buy_chips_promo_with_free) * free_chips +
    chipsBought;

  console.log(result);
  return result;
}

store_promotion(45, 21, 67, 2);
store_promotion(89, 2, 14, 8);
store_promotion(4, 98, 71, 7);
store_promotion(1, 25, 27, 1);
