### rest参数 

`...` + `变量名`

获取函数 的多余的参数.类似于arguments对象,但是 是个数组

demo
```javascript
const sortNumbers = ()=>
  Array.prototype.slice.call(arguments).sort();


//rest
const sortNumbers=(...numbers)=>
  numbers.sort();
```


### 扩展运算符 
`...`+`数组`

