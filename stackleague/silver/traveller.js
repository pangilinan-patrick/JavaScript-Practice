// ALL SUBMISSION CASES NOT MET YET
function traveller(map, travelString, baseFare) {
  let distance = parseInt(travelString.match(/\d+/));
  let transpo = travelString.substring(0, travelString.indexOf(distance));
  const MI = 1.609344;

  if (distance < 0 || baseFare < 0) return null;

  if (travelString.substring(travelString.length - 2) === "mi")
    distance = distance * MI;

  // console.log(transpo);
  // console.log(distance);
  let result = Math.ceil(
    map[transpo][1] * (distance - map[transpo][0]) + baseFare
  );
  console.log(result);
  return result;
}

const map = {
  Jeepney: [5, 2.5],
};

const travelString = "Jeepney7";
const baseFare = 10;

traveller(map, travelString, baseFare);
