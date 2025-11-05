export default class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }
    getFullName(){
        console.log(`${this.firstname} ${this.lastname} ${this.age}`);
    }
}
// export default class Person2{
//     constructor(firstname,lastname,age){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;

//     }
//     getFullName(){
//         console.log(`${this.firstname} ${this.lastname} ${this.age}`);
//     }
// }

//there can only be one export default in a single file