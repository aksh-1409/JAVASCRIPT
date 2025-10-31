//new keyword
function createUser(name, age){
    this.name = name;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.name, this.age);
}
const user1 = new createUser("hasrshit", 22);
user1.about();


//new keyword
// 1. creates empty object this = {}
// 2. return {}
// 3. sets the __proto__ property of the object as the function prototype property
