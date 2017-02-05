function objToMap(obj){
  var map=new Map();
  for(let k of Object.keys(obj)){
    map.set(k,obj[k]);

  }
  return map;
}