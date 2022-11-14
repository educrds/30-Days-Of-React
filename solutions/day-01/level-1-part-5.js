// 1
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

products.forEach((product) => {
  console.log(product.price);
});

// 2
products.forEach((product) => {
  console.log(
    `The price of ${product.product} is ${
      product.price > 0 ? product.price : "unknown"
    } euros.`
  );
});

// 3
sumPrices = 0;
products.forEach((element) => {
  element.price > 0 ? (sumPrices += element.price) : null;
});
console.log(sumPrices);

// 4
const price = products.map((item) => item.price);
console.log(price);

// 5
const withPrice = products.filter((item) => item.price > 0);
console.log(withPrice);

// 6
const sumPrice = products
  .filter((item) => item.price > 0)
  .reduce((a, b) => a + b.price, 0);
console.log(sumPrice);

// 7
products.reduce((a, b) => a + b.price, 0);
