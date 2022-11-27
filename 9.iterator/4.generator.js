function* multipleGenerator(){
    for(let i =0; i<10; i++){
        console.log(i);
        yield i ** 2;
    }
}
//multiple.return(); 
const multiple =multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
// multiple.throw('error!')
next = multiple.next();
console.log(next.value, next.done);


