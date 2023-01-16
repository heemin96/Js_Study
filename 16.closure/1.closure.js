const text = "hello";
function func() {
  console.log("test 1 :", text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner : ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();
