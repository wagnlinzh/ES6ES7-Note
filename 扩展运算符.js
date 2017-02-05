//由于扩展运算符可以展开数组,所以不再需要apply方法将数组转为函数的参数

//ES5 
function f(x, y, z) {}
var args = [0, 1, 2];
f.apply(null, args);


//ES6
function f(x, y, z) {}
var args = [1, 2, 3]
f(...args)


// 小算法
//ES5
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

//ES6
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2)



var go = function* () {
  yield 1;
  yield 2;
  yield 3;
}

[...go()]


//应用 ES7
//1.数组

//2.对象


let z = {
  a: 3,
  b: 4
};
let n = { ...z}

//等价于 
let n=Object.assign({},z);