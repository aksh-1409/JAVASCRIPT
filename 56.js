// const user1 = {
//     name:"hasrshit",
//     age:22,
//     about: ()=>{
//         console.log(this);
//         console.log(this.name, this.age);
//     }
// }

const user1 = {
    name:"hasrshit",
    age:22,
    about(){
        console.log(this);
        console.log(this.name, this.age);
    }
}

user1.about();