function biased_system(members) {
  // a upvote no matter what
  // b haters
  // c folows majority
  let votes = 0;
  let a = 0;
  let b = 0;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== "string") return null;
    if (members[i].toUpperCase() === "A") {
      console.log("votes up", a);
      votes++;
      a++;
    } else if (members[i].toUpperCase() === "B") {
      console.log("votes down", b);
      b++;
    } else if (members[i].toUpperCase() === "C" && a > b) {
      console.log("votes up for c");
      votes++;
    } else if (members[i].toUpperCase() === "C" && a < b) {
      console.log("votes down for c");
      votes--;
    } else votes++;
  }
  console.log(votes);
  return votes;
}

biased_system(["A", "A", "B", "B", "C"]);
