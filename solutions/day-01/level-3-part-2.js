let month = prompt("What is the month?: ");
month = month.toLowerCase();

if (month === "february") {
  console.log(`${month} has a 28 days.`);
} else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log(`${month} has 30 days.`);
} else {
  console.log(`${month} has 31 days.`);
}
