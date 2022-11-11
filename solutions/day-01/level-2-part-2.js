// 1
let score = prompt("Enter your score: ");

switch (true) {
  case score >= 80 && score <= 100:
    console.log("A");
    break;
  case score >= 70 && score <= 89:
    console.log("B");
    break;
  case score >= 60 && score <= 69:
    console.log("C");
    break;
  case score >= 50 && score <= 59:
    console.log("D");
    break;
  case score >= 0 && score <= 49:
    console.log("F");
    break;
  default:
    break;
}

// 2
let month = prompt("Enter a month: ");

switch (true) {
  case month === "September" || month === "October" || month === "November":
    console.log("The season is Autumn!");
    break;
  case month === "December" || month === "January" || month === "February":
    console.log("The season is Winter!");
    break;
  case month === "March" || month === "April" || month === "May":
    console.log("The season is Spring!");
    break;
  case month === "June" || month === "July" || month === "August":
    console.log("The season is Summer!");
    break;

  default:
    break;
}

// 3
let today = prompt("What is the day today?: ");
today = today.toLowerCase();

if (today === "saturday" || today === "sunday") {
  console.log(`${today} is a weekend`);
} else {
  console.log(`${today} is a working day`);
}
