
var s=new Set();

[2,3,4,5,6,2,2].map(x=>s.add(x))

for (let i of s){
  console.log(i)
}


let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]


//ES6
// 数组去重算法

let arr=[3,4,5,7,8,8,2,4,5,6,7,34,56,4,5,6,7]

let unique=[...new Set(arr)]