// 동등 비교 관계 연산자 
// 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름 

console.log(2==2);
console.log(2 !=2);
console.log(2 !=3);
console.log(2 ==3);
console.log(2=='2') // ture 타입은 다르지만 값은 같으니까 
console.log(2==='2'); // false 타입 값 다 같아야 하니까

console.clear();

console.log(true==1);
console.log(true ===1);
console.log(false ==0);
console.log(false ===0);

const obj1 ={
    name:'js'  // ox111 메모리주소 
}

const obj2 ={
    name:'js' // 0x112 메모리주소
}


console.clear();

console.log(obj1 ==obj2); // false 메모리 주소 다르니까 false 나오는 거임 ㅇㅇ 

console.log(obj1 === obj2);

console.log (obj1.name == obj2.name); //true
console.log (obj1.name === obj2.name); //true

let obj3 = obj2; //참조값을 obj3 에 할당

console.log(obj3 ==obj2);