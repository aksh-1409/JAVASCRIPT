const userMethods = {
    about : function(){
        console.log(this.firstName + " is " + this.age + " years old");
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return "la la la";
    }
}

function createUser(name, age, email, address){
    const user = Object.create(userMethods);
    
    user.firstName = name;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}

const user1 = createUser("hasrshit", 22, "hasrshit@gmail.com", "345, home nagar");
console.log(user1);
user1.about();
console.log(user1.is18());
user1.sing();
