const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log("Array with spread ->", newNumbers);

const user = { name: "Aaron", age: 25 }; 
const updatedUser = { ...user, city: "Manila" };
console.log("Object with spread ->", updatedUser);

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log("Sum with rest ->", sum(1, 2));        // 3
console.log("Sum with rest ->", sum(1, 2, 3, 4)); // 10
console.log("Sum with rest ->", sum(10, 20, 30)); // 60
