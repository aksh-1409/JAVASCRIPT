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
    const user = {};
    
    user.firstName = name;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;    
    return user;
}
//so here is also a problem is
//  we have multiple methods of user
//  and we make that methods 
// in the userMethod obj but forget to add in the function createUser then it
//  will be problem and also lengthy 
// so better work in 60.js