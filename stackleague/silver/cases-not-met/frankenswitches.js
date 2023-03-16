// DOESN'T PASS SUBMISSION CASES
function custom_switches(Purple_Switches, Teal_Switches) {
  if (isNaN(Purple_Switches) || isNaN(Teal_Switches)) return null;
  if (Purple_Switches === 1 || Teal_Switches === 1) return 1;
  let result = Math.trunc(Purple_Switches / 3 + Teal_Switches / 3);
  return result;
}
