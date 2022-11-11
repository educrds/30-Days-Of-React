import countries from "./countries.mjs";
import web_techs from "./web_techs.mjs";

// 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");

console.log(words);
console.log(words.length);

// 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart[2] = "Green Tea";

console.log(shoppingCart);

// 4
let countryIndex = countries.indexOf("Ethiopia");
countryIndex !== -1 ? countries.push("Ehiopia") : console.log("Ethiopia");

// 5
let webTechsIndex = web_techs.indexOf("Sass");
webTechsIndex !== -1
  ? console.log("Sass is a CSS preprocess")
  : web_techs.push("Sass");

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

