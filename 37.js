//object destructuring

const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    pincode: 123456
};


const { name, age, city, ...rest } = person;
console.log(name, age, city, rest);
