//동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의
const heemin = { name: "희민" };
const dog = { name: "와우", emoji: "🐶", owner: heemin };

//오브젝트 수정 못함.
Object.freeze(dog);

dog.name = "멍멍";
console.log(dog);
dog.age = 4;
console.log(dog);

delete dog.name;
console.log(dog);

heemin.name = "희민쓰";
console.log(dog);

//밀봉! Object.seal 값의 수정 🆗 , 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
cat.name = "냐옹";
console.log(cat);
delete cat.emoji;
console.log(cat);

//확장 금지 preventExtensions 추가 ❌
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = " 어흐응";
console.log(tiger);
delete tiger.name;
console.log(tiger);
