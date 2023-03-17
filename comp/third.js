function firewoodLogs(costs, coins) {
  let result = 0;
  let total = 0;
  //validation
  if (typeof coins !== "number" || coins < 0) {
    console.log("null");
    return null;
  }
  for (let i = 0; i < costs.length; i++) {
    if (typeof costs[i] !== "number" || costs[i] < 0) {
      console.log("null!");
      return null;
    }
  }
  costs.sort((a, b) => a - b);
  for (let i = 0; i < costs.length; i++) {
    if (coins === total) break;
    if (coins < total + costs[i]) break;
    console.log(costs[i]);
    result++;
    total += costs[i];
  }
  console.log(`result = ${result}`);
  console.log(`total = ${total}`);
  console.log(result);
  return result;
}
firewoodLogs([1, 2, 3, 4, 5], 6);
firewoodLogs([2, 1, 3, 4, 6, 5, 7, 8], 8);
firewoodLogs([1, 2, 3, 4, 5, 6], 6);
firewoodLogs([2, 1, 3, 4, 6, 5, 7, 8, 9], 30);
