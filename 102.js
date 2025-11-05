export default class Person1{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }
    getFullName(){
        console.log(`${this.firstname} ${this.lastname} ${this.age}`);
    }
}
export class Person2{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }
    getFullName(){
        console.log(`${this.firstname} ${this.lastname} ${this.age}`);
    }
}