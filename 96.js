//ES6 module
// import { firstname} from './97.js'
//other way of writing
import { firstname, firstname as fname} from './97.js'
import { age} from './98.js'
// import { Person} from './99.js'
import Person from './100.js' //if we import from the export default then we can import it without using the {} 
//also we can write Person as p or anything directly in import without writing [as] , in case of export default
// import Person2 from './101.js' 
import Person1,{Person2} from './102.js'

// console.log(`firstname is ${firstname} and age is ${age}`);
// console.log(`firstname is ${fname} and age is ${age}`);

const person = new Person(firstname,"joe",age);
person.getFullName();