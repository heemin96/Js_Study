class Tiger {
    constructor(color){
        this.color=color;
    }
    eat(){
        console.log('먹자');
    }
    sleep(){
        console.log('잔다');
    }
}

class Animal {
    constructor(color){
        this.color=color;
    }
    eat(){
        console.log('먹자');
    }
    sleep(){
        console.log('잔다');
    }
}

class Tiger extends Animal{}
const tiger = new Tiger('노랑이')
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal{
    play(){
        console.log('놀자아~!')
    }
}

