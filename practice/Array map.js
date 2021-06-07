const days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

const checkDays = days.map((day, index) => {
  return `${index + 1}day`;
});

console.log(checkDays);
