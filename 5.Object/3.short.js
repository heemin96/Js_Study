const x = 0;
const y = 0;
const coordinate = { x:x , y:y}
console.log(coordinate);

function makeObj(name,age){
    return{
        name,
        age,
    }
}

let a = 3
let b = 4 

makeObj(a,b);

console.log(makeObj(a,b));