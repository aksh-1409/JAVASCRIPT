//super keyword
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

class Dog extends Animal {
             
}

const animal = new Animal("animal", 1);
const dog = new Dog("dog", 2);
console.log(animal);
console.log(dog);
