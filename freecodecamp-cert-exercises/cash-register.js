/* 
  Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
  payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

  cid is a 2D array listing available currency.

  The checkCashRegister() function should always return an object with a status key and a change key.


  See below for an example of a cash-in-drawer array:

  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
*/

/* 
  if cid < change -> INSUFFICIENT_FUNDS or if can't return exact change
  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

  if cid == change -> CLOSED
  Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

  if cid > change -> OPEN
  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

/* 
  Currency Unit	Amount
  Penny	$0.01 (PENNY)
  Nickel	$0.05 (NICKEL)
  Dime	$0.1 (DIME)
  Quarter	$0.25 (QUARTER)
  Dollar	$1 (ONE)
  Five Dollars	$5 (FIVE)
  Ten Dollars	$10 (TEN)
  Twenty Dollars	$20 (TWENTY)
  One-hundred Dollars	$100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {
  const currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var cumulativeChange = 0;
  var difference = cash - price;
  var tempDifference = difference;
  var changeObj = {
    status: "",
    change: [],
  };
  /* subtract the difference with each item in cid
   * per each successful subtraction (no difference going below negative and not running out of change in a unit of money),
   * add one unit to the currency
   * */

  let j = 0;
  for (let i = cid.length - 1; i >= 0; i--) {
    while (!(tempDifference - currency[i] < 0)) {
      // check cid if it is lower than currency then the while can break
      // if (cid[i] < changeObj.change[j]) break;
      console.log(tempDifference + " - " + currency[i]);
      // console.log("obj change: " + changeObj);
      // console.log(cid[i][1] + " " + changeObj["change"][j]);
      tempDifference -= currency[i];
      tempDifference = Number(tempDifference).toFixed(2);
      if (changeObj.change[j] + currency[i] > cid[i][1]) console.log("more");
      console.log("= " + tempDifference);
      console.log("j: " + j);
      console.log("i: " + i);
      console.log("---");
      if (typeof changeObj.change[j] === "undefined")
        changeObj.change.push(currency[i]);
      else if (tempDifference - currency[i] < 0) {
        changeObj.change[j] += currency[i];
        j++;
      } else changeObj.change[j] += currency[i];
    }
    cumulativeChange += cid[i][1];
  }

  if (cumulativeChange === difference) changeObj.status = "CLOSED";
  else if (cumulativeChange < difference)
    changeObj.status = "INSUFFICIENT_FUNDS";

  console.log("difference: " + difference);
  console.log("cumulative change: " + cumulativeChange);
  console.log(changeObj);
  console.log("----------");
  return changeObj;
}

// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
//
// // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
//
// // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
//
// //  should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
