// function add(a, b){
//     return a+b;
// }
// const result = add(1,2);
// console.log(result);

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function print(num){
    if(num<0){
        return undefined;
    }

    console.log(num);
}
print('num');
   