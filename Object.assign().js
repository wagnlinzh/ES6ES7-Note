//Object.assign()

var target={a:1}
var source1={b:2}
var source2={c:3}

Object.assign(target,source1,source2)


//克隆对象
function clone(origin) {
  return Object.assign({},origin)
}
//此方法不能保持继承链

