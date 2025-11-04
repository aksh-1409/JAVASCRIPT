//super keyword
//method overriding
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
     constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
     } 
     
     eat(){
        return `Dog: ${this.name} is eating`;
     }
     run(){
        return `${this.name} is running at ${this.speed}`;
     }     
}

const animal = new Animal("animal", 1);
const dog = new Dog("dog", 2, 10);
console.log(animal);
console.log(dog);
console.log(dog.run());
console.log(dog.eat());
