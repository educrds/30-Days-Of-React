// 1
let arr = [];

// 2
let vehicles = [
  "carro",
  "moto",
  "bicicleta",
  "barco",
  "aviao",
  "helicoptero",
  "trator",
];

// 3
console.log(vehicles.length);

// 4
const firstItem = vehicles[0];
const middleItem = vehicles[3];
const lastItem = vehicles[vehicles.length - 1];

console.log(firstItem);
console.log(middleItem);
console.log(lastItem);

// 5
let mixedDataTypes = [
  true,
  [3, 4, 7, 8],
  "My name is John",
  450,
  { country: "Brasil" },
  1.0,
];
console.log(mixedDataTypes.length);

// 6
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[3];
const lastCompany = itCompanies[itCompanies.length - 1];

console.log(firstCompany);
console.log(middleCompany);
console.log(lastCompany);

// 10
itCompanies.map((company) => console.log(company));

// 11
itCompanies.map((company) => console.log(company.toUpperCase()));

// 12
console.log(itCompanies.join(", "), "are big IT companies");

// 13
itCompanies.includes("Orkut")
  ? console.log("Orkut")
  : console.log("A company is not found");

// 14
let companiesWithMoreThanOneO = [];

itCompanies.map((company) =>
  !company.includes("oo") ? companiesWithMoreThanOneO.push(company) : null
);

console.log(companiesWithMoreThanOneO);

// 15
console.log(itCompanies.sort());

// 16
console.log(itCompanies.reverse());

// 17
console.log(itCompanies.slice(3));

// 18
console.log(itCompanies.slice(0, 4));

// 19
const arrOutMiddle = itCompanies.slice(0, 3).concat(itCompanies.slice(4, 7));

// 20
itCompanies.shift();
console.log(itCompanies);

// 21
const arrRemoveMiddle = itCompanies
  .splice(0, 2)
  .concat(itCompanies.splice(1, 6));

// 22
itCompanies.pop();
console.log(itCompanies);

// 23
console.log(itCompanies.splice());
