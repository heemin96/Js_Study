function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("바나나");
    }, 1000);
  });
}

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("바나나");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("사과");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

// 바나나와 사과를 같이 가지고 오기

Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all", fruits))
  .catch(console.log);

Promise.race([getBanana(), getApple()]).then((fruit) =>
  console.log("race", fruit)
);

Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all", fruits))
  .catch(console.log);
