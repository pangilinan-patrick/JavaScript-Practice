function timeConversion(s) {
  // get variables for time
  let hh = s.substring(0, 2);
  const mm = s.substring(3, 5);
  const ss = s.substring(6, 8);

  // check for meridiem
  if (s.substring(8) === "PM" && hh !== "12") hh = parseInt(hh) + 12;
  else if (s.substring(8) === "AM" && hh === "12") hh = "00";

  console.log(`${hh}:${mm}:${ss}`);
  // console.log(s.substring(8));
  return `${hh}:${mm}:${ss}`;
}

timeConversion("01:05:45PM");
