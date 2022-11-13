// 1
const personAccount = {
  firstName: "Eduardo",
  lastName: "Cardoso",
  incomes: {
    salary: 5000,
    investments: 1000,
    rentals: 1500,
  },
  expenses: {
    car: 500,
    house: 1000,
    holidaysPerMonth: 1500,
  },
  totalIncome: () => {
    return Object.values(personAccount.incomes).reduce((a, b) => a + b, 0);
  },
  totalExpense: () => {
    return Object.values(personAccount.expenses).reduce((a, b) => a + b, 0);
  },
  addIncome: (description, value) => {
    return (personAccount.incomes[description] = value);
  },
  addExpense: (description, value) => {
    return (personAccount.expenses[description] = value);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

// 2
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(email) {
  users.filter((user) => {
    if (email === user.email) {
      console.log("User already exist.");
    }
  });
}
function signIn(email, password) {
  users.filter((user) => {
    if (user.email === email && user.password === password) {
      console.log("Welcome back");
    } else {
      console.log("User or password incorrect");
    }
  });
}

// 3. a
function rateProduct(id, rateProduct) {
  products.filter((product) =>
    product.name === "Laptop"
      ? product.ratings.push({ userId: id, rate: rateProduct })
      : null
  );
}

// 3. b
function averageRating(productName) {
  return products
    .filter((product) => product.name === productName)
    .map(
      (item) =>
        item.ratings.reduce((a, b) => a + b.rate, 0) / item.ratings.length
    );
}

// 4
function likeProduct(userId, productName) {
  return products
    .filter((product) => product.name === productName)
    .map((like) => {
      like.likes.includes(userId)
        ? like.likes.pop()
        : like.likes.push(userId);
    });
}
