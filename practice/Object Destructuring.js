const human = {
  name: "Nicolas",
  age: 30,
  nation: "Columbia",
  favFood: {
    breakfast: "Pizzz",
    lunch: "Chicken",
    dinner: "Hamburger",
  },
};

const {
  favFood: { breakfast, lunch, dinner },
} = human;

console.log(breakfast, lunch, dinner);
