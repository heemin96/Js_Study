let day= 10;

switch(day) {
    case 0 :
        dayName = '월요일';
        break;

    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;

    default:
         console.log('해당요일 없음');
}

console.log(day);

let condition='good'; // okay, good -> 좋음 ! , bad -> 나쁨!
let text;

switch(condition){
    case 'okay':
    case 'good':
        text ='좋음';
        break;

    case 'bad':
        text = '나쁨'
        break;
}

console.log(text);