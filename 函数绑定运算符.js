/**
 * ES7
 * 函数绑定运算符是并排的双冒号::
 * 左边是对象,右边是一个函数\
 * 该运算符 会自动将走遍的 对象作为上下文环境(this对象)绑定到右边的函数上
 * */

foo::bar ;
// 等价
bar.bind(foo);

foo::bar(...arguments)
// ===
bar.apply(foo,arguments);

//factorial

function factorial(n){
  if(n===1){
    return 1; 
  }

  return n*factorial(n-1);
}

factorial(5)

function factorial(n,total){
  if (n===1) {
    return total;
  }
  return factorial(n-1,n*total)
}

