// Import default and named exports
import greet, { myInfo } from "./15_modules_export.js";

// Use them
console.log(greet()); 
console.log(`My name is ${myInfo.name} and I am ${myInfo.age} years old.`);
