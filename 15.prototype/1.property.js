const dog = { name: "와우", emoji: "dog" };

console.log("test1", Object.keys(dog));
console.log("test2", Object.values(dog));
console.log("test3", Object.entries(dog));

console.log("name" in dog);
console.log(dog.hasOwnProperty("name"));

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨

const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc);
const desc2 = Object.getOwnPropertyDescriptor(dog, "emoji");
console.log(desc2);

Object.defineProperty(dog, "name", {
  value: "멍멍",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
console.log(Object.entries(dog));
