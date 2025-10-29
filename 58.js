// const user1 = {
//     name:"hasrshit",
//     age:22,
//     email : "hasrshit@gmail.com",
//     address:"345, home nagar", 
//     about(){
//         // console.log(this);
//         console.log(this.name, this.age);
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

//but since if we want to make multiple  objects then this will be so long to write each and every time its values of the properties 

//so let create a function 

// function createUser(name, age, email, address){
//     const user = {};
    
//     user.firstName = name;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = function(){
//         console.log(this.firstName + " is " + this.age + " years old");
//     }
//     user.is18 = function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser("hasrshit", 22, "hasrshit@gmail.com", "345, home nagar");
// console.log(user1);

// user1.about();
// console.log(user1.is18());

// const user2 = createUser("hasrshit", 22, "hasrshit@gmail.com", "345, home nagar");

// const user3 = createUser("hasrshit", 22, "hasrshit@gmail.com", "345, home nagar");

//since here the multiple times the about() and is18 method are being created in the object creation but both have the common task for all so we create a different object for them

const userMethods = {
    about : function(){
        console.log(this.firstName + " is " + this.age + " years old");
    },
    is18 : function(){
        return this.age >= 18;
    }
}
const about = function(){
    console.log(this.firstName + " is " + this.age + " years old");
}

function createUser(name, age, email, address){
    const user = {};
    
    user.firstName = name;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    
    return user;
}

const user1 = createUser("hasrshit", 22, "hasrshit@gmail.com", "345, home nagar");
console.log(user1);

user1.about();
console.log(user1.is18());

const user2 = createUser("hmohit", 0, "hasrshit@gmail.com", "345, home nagar");
console.log(user2);
user2.about();
console.log(user2.is18());

// const user3 = createUser("hasrshit", 22, "hasrshit@gmail.com", "345, home nagar");