function timeTravel(currentDate, referenceDate, memories) {
  let index = 0;
  let keys = Object.keys(memories);

  console.log(keys.indexOf(currentDate));
  console.log(keys.indexOf(referenceDate));
  // if key doesn't exist
  if (!memories.hasOwnProperty(currentDate)) {
    return memories[keys[0]];
  }

  // if reference date index is smaller than current date index
  if (keys.indexOf(referenceDate) < keys.indexOf(currentDate))
    return memories[currentDate];

  return memories[referenceDate];
}

const key = "88f8d82";
const value = "7beb84d";

const data = {
  "1b8fecc": "chore: added path alias",
  a98c2b6: "refactor: added public routes",
  "7beb84d": "feat: user login connected to backend",
  "88f8d82": "feat: added public route",
  "63ec8e3": "refactor: refactor private routes",
};

const result = timeTravel(key, value, data);
console.log(result);
