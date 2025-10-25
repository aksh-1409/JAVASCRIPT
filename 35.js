const person = {
  name: "John",
  age: 30,
  city: "New York",
};

//for looping in obj

// for (let key in person) {
//     console.log(person.key);
// } shows undefined in dot accessing

// for (let key in person) {
//     console.log(person[key]);
// }

for (let key of Object.keys(person)) {
  console.log(key);
}

//want to have all keys from the object

let arr = Object.keys(person);
console.log(typeof arr, arr);
