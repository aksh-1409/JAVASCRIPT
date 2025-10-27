// param destructuring

const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    pincode: 123456
};

// function printDetails(person){
//     console.log(person.name);
//     console.log(person.age);
//     console.log(person.city);
//     console.log(person.country);
//     console.log(person.pincode);
// }

function printDetails({name,age,city,country,pincode,code}){
    console.log(name);
    console.log(age);
    console.log(city);
    console.log(country);
    console.log(pincode);
    console.log(person);
    console.log(code);
}
printDetails(person);
