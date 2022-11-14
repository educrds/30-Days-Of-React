// 1
function fullName(name, lastName) {
  return `${name} ${lastName}`;
}

// 2
function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

// 3
function areaOfCircle(r1, r2) {
  const pi = 3.14;
  return pi * r1 * r2;
}

// 4
function celsiusToFahrenheit(tempInCelsius) {
  return (tempInCelsius * 9) / 5 + 32;
}

// 5
function bmi(height, weight) {
  const bmi = (weight / Math.pow(height, 2)).toFixed(1);
  switch (true) {
    case bmi < 18.5:
      console.log("Underwweight");
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      console.log("Normal weight");
      break;
    case bmi >= 25 && bmi <= 29.9:
      console.log("Overweight");
      break;
    case bmi >= 30:
      console.log("Obese");
      break;
    default:
      break;
  }
}

// 6
function checkSeason(month) {
  switch (true) {
    case month === "September" || month === "October" || month === "November":
      console.log("Autumn!");
      break;
    case month === "December" || month === "January" || month === "February":
      console.log("Winter!");
      break;
    case month === "March" || month === "April" || month === "May":
      console.log("Spring!");
      break;
    case month === "June" || month === "July" || month === "August":
      console.log("Summer!");
      break;

    default:
      break;
  }
}
