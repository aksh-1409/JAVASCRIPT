//clone using Object.assign

const obj = {key1: "value1", key2: "value2"};
// const obj2 = Object.assign({}, obj);
const obj2 = Object.assign({key3:"value3"}, obj);
console.log(obj2);

//clone using spread operator
const obj3 = {...obj};
console.log(obj3);
