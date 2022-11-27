const apple = {
    name: 'apple',
    display: function (){
        console.log(`${this.name} : 🍎`)
    }
}

apple.display();
console.log(apple.name);