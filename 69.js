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

class Dog {
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

const animal = new Animal("animal", 1);
const dog = new Dog("dog", 2);
console.log(animal);
console.log(dog);

//but here baar baar same cheez repeate ho rhi hai isliye in series me example hai anghe ke 70.js & 71.js