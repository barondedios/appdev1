const hobbies = ["Gaming", "Coding", "Reading"];
hobbies.map(hobby => console.log(hobby));

// Destructuring
const student = { name: "Mike", age: 21 };
const { name, age } = student;
console.log(name, age);

// Spread operator
const original = [1, 2, 3];
const copy = [...original, 4, 5];
console.log(copy);
