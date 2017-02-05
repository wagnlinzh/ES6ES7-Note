

//解构赋值
const arr = [1, 2, 3, 4]

const [first, second] = arr;


// 对象尽量静态化,一旦定义,就不得随意添加新的属性. 如果添加属性不可避免, 要使用Object.assign()方法

//bad
const a = {};
a.x = 4;

//good
const a = {};
Object.assign(a, {
  x: 3
});

//better
const a = {
  x: null
}
a.x = 34;




var ref = 'some value'

//bad
const atom = {
  ref: ref,
  value: 1,
  addValue: function (value) {
    return atom.value + value;
  }
}

const atom = {
  ref,
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
}

//copy array
let arr = [1, 3, 4, 5]

const itemsCopy = [...arr]

//IEEF
(() => {
  console.log("hellowrod")
})()

[1, 2, 3].map(function (x) {
  return x * x;
});

[1, 2, 3].map((x) => {
  return x * x;
});


//this

//bad 
const self = this;
const boundMethod = function (...params) {
  return method.apply(self, params)
}

//acceptable
const boundMethod = method.bind(this);

//best
const boundMethod = (...params) => method.apply(this, params);



//使用默认值语法设置函数参数的默认值
function handleThings(opts) {
  opts = opts || {};
}

function handleThings(opts = {}) {
  //...
}

//Map 
(() => {
    let obj={
      "name":"wanglinzhizhi",
      "age":"25",
      "job":"engineer",
    };
    let map = new Map(obj);
    for (let key of map.keys()) {
      console.log(key)
    }

    for(let value of map.values()){
      console.log(value)
    }

    for(let item of map.entries()){
      console.log(item[0],item[1])
    } 
})()

(()=>{
  const a1=[undefined,undefined,undefined]
  const a2=[,,,]

  a1.length;
  a2.length;

  a1[0] === a2[0]


  0 in a1
})()



