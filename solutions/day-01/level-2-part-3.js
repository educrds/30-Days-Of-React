const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1
let manySkillsName = "";
let skillsQty = 0;

for (const key in users) {
  if (users[key].skills.length > skillsQty) {
    skillsQty = users[key].skills.length;
    manySkillsName = key;
  }
}

// 2

let usersLog = 0;

for (const key in users) {
  if (users[key].isLoggedIn) {
    usersLog++;
  }
}

let pointsGreaterThan50 = 0;

for (const key in users) {
  if (users[key].points >= 50) {
    pointsGreaterThan50++;
  }
}

// 3
Object.entries(users)
  .filter(([_, user]) =>
    user.skills.includes("MongoDB", "Express", "React", "Node")
  )
  .map(([name]) => name)
  .join(", ");

// 4
const object = Object.assign({}, users);
object.Eduardo = {};

// 5
Object.keys(users);

// 6
Object.values(users);
