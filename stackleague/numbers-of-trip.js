const Trips = (people, limit) => {
  let result = 0;
  let trips = 0;
  people.forEach((item) => {
    result += item;
  });

  while (result > 0) {
    result -= limit;
    trips++;
  }

  return trips;
  console.log(result);
  console.log(trips);
};

Trips([1, 2, 3, 4, 5], 1);
