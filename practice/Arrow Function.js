const sayHello = (name = "Cody") => "Hello " + name;
const sayHello2 = (name = "Cody") => {
  return "Hello " + name;
};

sayHello("Lion");
sayHello2("Cat");
