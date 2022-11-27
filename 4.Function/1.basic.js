function add(num1, num2) {
    console.log('function');
    return num1 + num2 ;
}

const result = add(1, 2);
console.log(result);

//사용예제 2 
// let lastName ='김';
// let firstName = '지수';
// let fullName = `${lastName} ${firstName}`
// console.log(fullName);

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`; 
}
 
let lastName= '김';
let firstName = '희민';

console.log(`${firstName} ${lastName}`)


