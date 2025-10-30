const obj1 = {
    key1 : "value1",
    key2 : "value2"
}


const obj2 = Object.create(obj1); // since we create object by using Object.create() and passed obj1 as argument
//then it sets the .__proto__ property of the object obj2 so at times of accessinf the property of obj2 when it is not found ,
// so then chainig is done first it will check for obj2 if found then ok, otherwise go to that object whose reference is stored in the .__proto__ property of the object obj2 
//if it found there then ok, otherwise go the .__proto__ property of that object and check there and so on 
// until it found the property or until it reached to the end of the chain
//the end of the chain is null which is the value of the .__proto__ property of the Object.prototype 
//and when it reaches to null then it returns undefined
obj2.key3 = "value3";
console.log(obj2.key2);
console.log(obj2.key4);
console.log(obj2.__proto__);
console.log(obj1.__proto__);//if we do not set the .__proto__ property of the object then it will set to the Object.prototype
console.log(obj1.__proto__.__proto__);
