"use strict";

let sampleMap = new Map();

sampleMap.set("name", "John");
sampleMap.set("age", 32);
sampleMap.set("contact", { phone: "123-456-789", address: "123 address str" });

sampleMap.has("age");
sampleMap.get("name");

console.log("First map");
sampleMap.forEach((value, key) => {
  console.log(key, value);
});

const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

const mapFromArray = new Map(kvArray);

console.log("\n");
console.log(mapFromArray.get("key1"));
// printing map from spread
console.log([...mapFromArray]);

//merge the two maps
const merged = new Map([...sampleMap, ...mapFromArray]);
console.log("\n");
console.log(merged);
