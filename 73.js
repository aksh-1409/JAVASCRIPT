//getters and setters
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("hasrshit", "chauhan", 22);
console.log(person1.fullName); //jab aise karoghe to getter run hogha

person1.fullName = "mohit vashisht";//jab aise karoghe to setter run hoga
console.log(person1.fullName);
