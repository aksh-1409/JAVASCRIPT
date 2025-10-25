//objects

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

//accessing object properties
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

//want to add new property/key-value pair to object

person.country = "USA";
console.log(person);

//another way of accessing object properties when space is there between key name
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);
console.log(person["country"]);

//want to have an extra key-value pair to object
person["profession"] = "Engineer";
console.log(person);

//want to have an extra vairable and want that value as the key
const key = "email";

person[key] = "john@example.com";
console.log(person);