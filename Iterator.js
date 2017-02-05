/**
 * 遍历器(Iterator) 是一种机制,他是一个借口,为各种不同的数据结构提供统一的访问机制. 
 * 任何数据结构只要 部署Iterator 接口,就可以完成遍历操作(即一次处理改数据结构的所有成员)
 * 
 * 
 * 
 * */


var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}


