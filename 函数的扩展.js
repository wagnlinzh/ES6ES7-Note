// ES6 允许为函数的参数设置默认值, 即直接写在参数定义的后面
function loglog(x,y='world'){
  console.log(x,y)
}

loglog('hello')

function fetch(url,{body = '', method = 'GET' , headers={}}){
  console.log(method);
}

//GET
fetch('http://wanglinzhizhi.me',{});


