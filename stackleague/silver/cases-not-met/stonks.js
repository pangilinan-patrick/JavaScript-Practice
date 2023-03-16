// submission cases not met
function trader(stock_prices) {
  let streak = 1;
  let max = 0;
  let invalidPrice = false;

  if (stock_prices.length === 0) return null;
  stock_prices.forEach((item) => {
    if (isNaN(item) || item < 0) {
      invalidPrice = true;
      console.log("Null!");
    }
  });
  if (invalidPrice) return null;

  for (let i = 0; i < stock_prices.length; i++) {
    if (stock_prices[i] <= stock_prices[i + 1]) streak++;
    else {
      max = streak;
      streak = 1;
    }
  }
  console.log(max);
  return max;
}

trader([]);
trader([34, 123654, 675, 34, 65]);
trader([3, 2, 1, 1]);
trader([5, 34, 231]);
