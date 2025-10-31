
//constructor function bolte hai apn createUser ko 
function createUser(firstName, age, email, address){
    this.firstName = firstName;
    this.age = age;
    this.email = email;
    this.address = address;
}
createUser.prototype.about = function(){
    console.log(this.firstName + " is " + this.age + " years old");
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}
createUser.prototype.sing = function(){
    return "la la la";
}

const user1 = new createUser("hasrshit", 22, "hasrshit@gmail.com", "345, home nagar");
console.log(user1);
user1.about();
console.log(user1.is18());
console.log(user1.sing());
