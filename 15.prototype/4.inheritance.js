// 객체지향 프로그래밍  --> 상속을 통한 코드 재사용성

//Animal이라는 객체를 만들 수 있는 템플릿
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

//프로토 타입 레벨의 printname
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log("같이 놉시다");
};

const dog1 = new Dog("멍멍", "🐶", "희민");
