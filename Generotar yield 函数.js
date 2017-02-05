function * hellowroldGenerator(){
  yield console.log('hello');
  yield console.log('world');
  return  console.log('ending');
}

var hw=helloWorldGenerator();
hw.next();
hw.next();
hw.next();