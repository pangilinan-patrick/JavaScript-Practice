function stackcubes(a, b) {
  let totalCubes = 0;
  if (isNaN(a) || isNaN(b)) return null;
  for (let i = a; i <= b; i++) {
    totalCubes += i * i * i;
    console.log("pre-mod: ", totalCubes);
    totalCubes %= 1000003;
    console.log("post-mod: ", totalCubes);
  }
  console.log("\n");
  return totalCubes;
}

stackcubes(1, 5);
stackcubes(2, 5);
stackcubes(3, 5);
stackcubes(4, 5);
stackcubes(5, 5);
