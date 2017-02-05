//避免重名

var s1=Symbol('foo')



var s2=Symbol('foo')

s1===s2 //false

var mySymbol = Symbol();

//第一种写法
var a={}
a[mySymbol]='Hello'

//第二种写法
var a = {
  [mySymbol]:'Hello'
}

//第三种写法
var a ={}
Object.defineProperty(a,mySymbol,{value: 'Hello!'})

a[mySymbol]


var obj={}
var foo=Symbol('foo')

Object.defineProperty(obj,foo,{
  value:'foobar'
})

for(var i in obj){
  console.log(i);
}

Object.getOwnPropertyNames(obj)

Object.getOwnPropertySymbols(obj)