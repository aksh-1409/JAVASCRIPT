//when we want to share a method of obe object by another object

// const user1 = {
//     name:"hasrshit",
//     age:22,
//     about: function(){
//         console.log(this.name, this.age);
//     }
// }

// const user2 = {
//     name:"mohit",
//     age:20,
    
// }


// user1.about.call(); //undefined undefined
// user1.about.call(user2);


// const user1 = {
//     name:"hasrshit",
//     age:22,
//     about: function(hobby, fav){
//         console.log(this.name, this.age, hobby, fav);
//     }
// }

// const user2 = {
//     name:"mohit",
//     age:20,
    
// }

// user1.about.call(user2, "gaming", "cricket");


//apply method same as call method but it takes arguments in the form of array
// user1.about.apply(user2, ["gaming", "cricket"]);

//bind method
// const func = user1.about.bind(user2, "gaming", "cricket");
// func();



//call
//apply
//bind 

//dont do this mistake

const user1 = {
    name:"hasrshit",
    age:22,
    about: function(hobby, fav){
        console.log(this);
        console.log(this.name, this.age, hobby, fav);
    }
}

// const func = user1.about;
// func();

//this keyword is not binded to any object
//so it will point to global object

//so we need to bind it with the object we want to call it
//bind method

const func = user1.about.bind(user1);
func();

