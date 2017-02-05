(()=>{
  let arrayLike={
    '0':'a',
    '1':'b',
    '2':'c',
    length: 3,
  }


  //ES5
  let arr1 = [].slice.call(arrayLike);
  console.log(arr1)

   //ES6
  let arr2 = Array.from(arrayLike); 
  console.log(arr2)
})()



//扩展运算符也可以将某些数据结构转换为数组

[...document.querySelectorAll('div')] ;



//Array.from demo

function typesOf(){
  return Array.from(arguments,value=>typeof value)
}

typesOf(null,[],NaN)

for(let index of ['a','b'].keys){
  console.log(index)
}