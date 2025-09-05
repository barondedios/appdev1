// Base class
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

// Subclass
class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

// Usage
const person1 = new Person("Aaron");
person1.sayHello(); // Hi, I am Aaron

const student1 = new Student("Elmer");
student1.sayHello(); // Hi, I am Elmer
student1.study();    // Elmer is studying
