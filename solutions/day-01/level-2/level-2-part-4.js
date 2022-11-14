// 1
function solveQuadEquation(a, b, c) {
  const rPlus = ([-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)] / 2) * a;
  const rMinus = ([-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)] / 2) * a;

  return console.log(rPlus, rMinus);
}

// 2
function printArray(arr) {
  arr.map((item) => console.log(item));
}

// 3
function showDateTime() {
  const now = new Date();

  return `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
}

// 4
function swapValues(x, y) {
  console.log(`x = ${y}, y = ${x}`);
}

// 5
function reverseArray(array) {
  return array.reverse();
}

// 6
function capitalizeArray(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 7
function addItem(item) {
  let array = [];
  array.push(item);
  return array;
}

// 9
function evenAndOdds(number) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i <= number; i++) {
    i % 2 === 0 ? even++ : odd++;
  }
  return console.log(
    `The number of odds are ${odd}.\nThe number of evens are ${even}`
  );
}

// 13
function sumArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// 1
let guid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  };
  return s4();
};


// 2
function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}
