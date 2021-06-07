// Human이라는 클래스를 생성했다.
// 클래스 안에서는 함수를 함수명(){} 형태로 만든다.
class Human {
  // constructor함수는 클래스를 생성할 때 필요한 인자들을 받는다.
  // 그 인자들을 이용해서 아래에서 new Human()으로 객체를 생성할 수 있다.
  // 누군가 새로운 클래스를 생성한다면 name과 lastName에 해당하는 값을 전달한다.
  // 그리고 무엇을 주었던지 간에 해당 클래스의 name과 lastName에 넣는다.
  // 앞에 this는 현재 이 클래스를 의미한다.(즉, Human.name=name, Human.lastName=lastName과 같은 의미이다.)
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

// 또한 클래스는 확장을 할 수 있다는 것이다.
// 아래처럼 Baby라는 클래스에 extends를 통해 Human클래스를 확장했다.
// 이렇게 되면 Human클래스의 모든 것을 Baby클래스가 가지게 되고 추가적으로 Baby클래스만의 것을 따로 가질 수 있다.
// Baby클래스는 Human클래스의 확장된 것을 가지기 때문에 Human클래스가 가지고 있는 constructor()함수 또한 가지게 된다.
class Baby extends Human {
  // cry라는 함수를 생성했다.
  cry() {
    console.log("Baby Crying");
  }

  // sayName이라는 함수를 생성하고 sayName함수는 Baby클래스 내에 있는 name값을 this.name을 통해 가져온다.
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const cody = new Human("코디", "가브란트");
console.log(cody);

const myBaby = new Baby("미니", "아기");
console.log(myBaby);
console.log(myBaby.cry());
console.log(myBaby.sayName());
