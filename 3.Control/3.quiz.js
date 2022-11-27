// 퀴즈 !
let num = 3;

// num의 숫자가 짝수이면 😀, 홀수라면 

if (num %2 ===0){
    console.log('😀')
}else{
    console.log('🍎')
}

num %2 ===0 ? console.log('😀') :console.log('🍎');

let emoji =  num %2 ===0 ? ('😀') :('🍎');

console.log(emoji)