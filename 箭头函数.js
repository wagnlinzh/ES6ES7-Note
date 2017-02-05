var sum = (num1, num2) => num1 + num2

// 
function foo() {
  setTimeout(() => {
    console.log("id:", this.id);
  }, 100)

}
foo.call({
  id: 42
})


//this 指向的固定化, 并不是因为箭头函数内部有绑定this的机制,实际原因是箭头函数根本没有自己的this. 导致内部的this 就是外层代码块的this.只因为没有this, 就不能用作构造函数.

function foo() {
  return () => {
    return () => {
      return () => {
        console.log("id:", this.id);
      }
    }
  }
}

foo.call({
  id: 42
})()()();


//除了this, 指向外层函数的对应变量,在箭头函数中也不存在. arguments, super和 new.target.


//管道机制 

const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;

const addThenMult = pipeline(plus1,mult2);


addThenMult(5);

//way2 

const plus1 = a => a + 1;
const mult2 = a => a * 2;
mult2(plus1(5))