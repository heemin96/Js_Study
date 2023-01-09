function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => 🥚`)
}

fetchEgg('🐶')
    .then((dog) => console.log(dog));