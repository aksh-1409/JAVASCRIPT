//2015/es6
//class keyword
//classes are fake

class createUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        console.log(this.firstName + " " + this.lastName + " is " + this.age + " years old");
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la";
    }
}

const user1 = new createUser("hasrshit", "chauhan", "hasrshit@gmail.com", 22, "345, home nagar");
console.log(user1);
user1.about();
console.log(user1.is18());
console.log(user1.sing());
//multiple ways to check the protoype
console.log(user1.__proto__);
console.log(createUser.prototype);
console.log(Object.getPrototypeOf(user1));
 