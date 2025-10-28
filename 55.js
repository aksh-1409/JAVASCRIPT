//arrow functions 

const user1 = {
    name:"hasrshit",
    age:22,
    about: ()=>{
        console.log(this);
        console.log(this.name, this.age);
    }
}
//for arrow functions this keyword is not binded to any object
//so it will point to global object window because in arrow functions this takes from the parent scope
// user1.about();
user1.about.call(user1); //same as user1.about()
user1.about.apply(user1); //same as user1.about()
user1.about.bind(user1)(); //same as user1.about()
