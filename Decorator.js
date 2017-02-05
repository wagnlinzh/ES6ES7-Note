
function testable(target){
  target.isTestable= true;
}

@testable
class MyTestableClass{}

console.log(MyTestableClass.isTestable)



export var firstName = 'Michael';
export var lastName= 'Jackson'
export var year=1985;

export { firstName, lastName, year} ;



import * as circle from './circle'

// === 

module circle2 from './circle2';


// export default 

import {counter ,incCounter} from './t'
console.log(counter);//3

incCounter();
console.log(counter);//4