//methods 
//function inside object

// const person = {
//     name:"hasrshit",
//     age:22,
//     about: function(){
//         console.log(this.name, this.age);
//     }
// }
// person.about();

//why we use this keyword here when we have the function(method) of the object

//beacause --

function personInfo(){
    console.log(this.name, this.age);
}

const person1 = {
    name:"hasrshit",
    age:22,
    about: personInfo
}

person1.about();

const person2 = {
    name:"mohit",
    age:20,
    about: personInfo
}

person2.about();
