// 1
const dog = {
  name: "mel",
  legs: 4,
  color: "white",
  bark: function () {
    return console.log("Woof Woof");
  },
  getDogInfo: function () {
    return `I am ${this.name} and I'm ${this.legs} legs, my color is ${this.color}.`;
  },
};

// 2
console.log(dog);

// 4
const dogValues = Object.values(dog);
console.log(dogValues);
