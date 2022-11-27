//클래스 class 
class Fruit{

    //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name,emoji){

        this.name = name ; //this 객체 자기 자신 뜻함
        this.emoji = emoji;
    }

    display = () => { 
        console.log(`${this.name} : ${this.emoji}`)
    }
    
}

// apple은 fruit 클래스의 인스턴스 이다
const apple = new Fruit ('apple', '🍎');
const orange = new Fruit ('orange' , '🍊');
 console.log(apple);
 console.log(orange);
 