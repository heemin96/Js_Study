//promise는 callback x

function runInDelay(seconds){
    return new Promise((resolve, reject)=>{
        if(!seconds || seconds<0){
            reject(new Error('seconds가 0보다 작음'))
        }
        setTimeout(resolve, seconds *1000)
    });
}


// .then(필요한일을 수행)
// .catch(에러를 처리)
// .finally(최종적으로 무조건 호출!)

runInDelay(10)
.then(()=>console.log('타이머 완료'))
.catch(error => console.error('오류'))
.finally(()=>console.log('끝났긴함'))

