const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

// const allDays = [days + otherDays];
// console.log(allDays);

const allDays2 = [...days, ...otherDays, "Sun"];
// console.log(allDays2);

const obj1 = {
  first: "first",
  second: "second",
};

const obj2 = {
  third: "thrid",
  fourth: "fourth",
};

const obj3 = { obj1, obj2 };
// console.log(obj3);

const obj4 = { ...obj1, ...obj2, fifth: "fifth" };
// console.log(obj4);

const handleSpread = (days) => {
  console.log(...days);
};

handleSpread(days);
