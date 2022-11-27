//반복문 Loop Statement
//for(변수선언문; 조건식; 증감식){}

for(let i =0; i<5; i++){

    for(let j =0; j<5; j++){
        
        console.log(i,j);
    }
}

//무한루프 
//for (;;){
//}

//반복문 제어 : continue, break; 
for(let i = 0; i<20; i++){
   if(i===10){
    
    // continue // 이 아래 있는 코드 무시하고 바로 다음으로 증액 
    console.log('i가 10이 되어서 멈춤')
    break;
   } 
   console.log(i)
}