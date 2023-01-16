function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  //인스턴스 레벨의 함수 --> 메모리 낭비..?
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}
//프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog("뭉치", "🐶");
const dog2 = new Dog("코코", "🐕");
console.log("test1 :", dog1, ",", dog2);
dog1.printName();
dog2.printName();

//오버라이딩
//인스턴스 레벨에서(지식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
//프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)

dog1.printName = function () {
  console.log("test2 :", "안녕");
};
dog1.printName();

// 정적레벨
Dog.hello = () => {
  console.log("test3 :", "Hello");
};
Dog.hello();
Dog.Max_AGE = 20;

console.log("test4 :", Dog.Max_AGE);
console.log("test5 :", dog1);
console.log("test5 :", Dog);
