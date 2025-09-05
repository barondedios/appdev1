const person = {
  name: "Aaron",  
  age: 25        
};

const { name, age } = person;
console.log("Object destructuring ->", name, age);

const hobbies = ["gaming", "coding"]; 
const [hobby1, hobby2] = hobbies;
console.log("Array destructuring ->", hobby1, hobby2);

function printName({ name }) {
  console.log("Function destructuring ->", name);
}

printName(person);
