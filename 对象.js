//ES5
var foo='bar'
var bar={foo}
console.log(bar)

//ES6
var foo='foooo'
var bar={foo:foo}

function f0(x,y){
  return {x,y};
}

//等价于

function f1(x,y){
  return {x:x,y:y};
}

var o ={
  method(){
    return "hello!";
  }
}

//等同于

var o = {
  method: function(){
    return 'Hello!';
  }
}


var Person = {
  name :'zhangsan',
  birth,
  hello(){
    console.log('hello world' + this.name);
  
  }
}


