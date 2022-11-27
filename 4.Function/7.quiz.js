function iterate(max, action){
    for (let i =0; i< max; i++){
        action(i);
    }
}

function log(num){
    console.log(num);
}

function doubleAndLog(num){
    console.log(num*2);
}

iterate(3,log);
iterate(3, doubleAndLog)



iterate(3, (num) => console.log(num));

setTimeout(()=>{
 console.log('2초뒤 함수 실행')
},2000)