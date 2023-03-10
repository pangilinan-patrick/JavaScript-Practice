function ingredients_Needed(
  almonds,
  hazelnuts,
  almond_coffee,
  special_hazel_coffee,
  mixed_nut_coffee
) {
  // almond coffee = 2 almonds
  // hazelnut coffee = 3 hazelnuts
  // mixed nut coffee = 1 almond 1 hazel
  if (
    isNaN(almonds) ||
    isNaN(hazelnuts) ||
    isNaN(almond_coffee) ||
    isNaN(special_hazel_coffee) ||
    isNaN(mixed_nut_coffee)
  )
    return null;

  let nut = 0;

  almonds -= almond_coffee * 2;
  hazelnuts -= special_hazel_coffee * 3;

  almonds -= mixed_nut_coffee;
  hazelnuts -= mixed_nut_coffee;
  console.log(`almonds = ${almonds}`);
  console.log(`hazelnuts = ${hazelnuts}`);

  if (almonds > 0) almonds = 0;
  if (hazelnuts > 0) hazelnuts = 0;
  nut = Math.abs(almonds) + Math.abs(hazelnuts);
  console.log(nut);
  return nut;
}

ingredients_Needed(4, 1, 3, 4, 9);
