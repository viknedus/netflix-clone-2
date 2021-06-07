const numbers = [2, 45, 30, 20, 10, 11, 5, 16, 7, 8, 9, 22, 44, 100, 99, 88];

numbers.forEach((number) => {
  console.log(number);
});

const animal = ["dog", "cat", "bird"];

animal.push("lion");
// console.log(animal);

// console.log(animal.includes("dog"));
// console.log(animal.includes("lion"));
// console.log(animal.includes("eagle"));

const greetings = ["Hello", "안녕하세요", "Nihao"];

// console.log(greetings.includes("Halo"));
if (!greetings.includes("Halo")) {
  greetings.push("Halo");
}

console.log("greetings", greetings);
