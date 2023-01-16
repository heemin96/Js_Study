function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹 : ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다잉 : ${this.name}`);
  };
}

const cat = new Cat("냐옹");
const dog = new Dog("멍멍");
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();

function printMonitor(printName) {
  console.log(`모니터를 준비하고!, 전달된 콜백을 실행!`);
  printName();
}

printMonitor(cat.printName);
