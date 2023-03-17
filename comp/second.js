function reach_my_apartment(number_of_rooms, apartment_number) {
  if (
    isNaN(number_of_rooms) ||
    isNaN(apartment_number) ||
    apartment_number <= 0 ||
    number_of_rooms <= 0
  )
    return null;
  let result = Math.ceil(apartment_number / number_of_rooms);
  if (result === 13) result++;
  console.log(result);
  return result;
}
reach_my_apartment(12, 56);
reach_my_apartment(3, 9);
reach_my_apartment(5, 1);
reach_my_apartment(3, 4);
