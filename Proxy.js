var proxy = new Proxy(target, handler)

var proxy = new Proxy({}, {
  get: function (target, property) {
    return 35;
  }
})



var person = {
  'name': 'zhangsan'
}

var proxy = new Proxy(person, {
  get: function (target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new ReferenceError(`Property \`` + property + `\` does not exist .`);
    }
  }
});

proxy.name;
proxy.age; //Errow





var pipe = (function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fn(val);
          },value);
        }
        funcStack.push(window[fnName]);
        return oproxy;
      }
    });

    return oproxy;
  }
}());

var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

pipe(3).double.pow.reverseInt.get; // 63

