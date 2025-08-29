console.log("5" == 5);   // true
console.log("5" === 5);  // false

let undefinedVar;
let nullVar = null;

console.log(undefinedVar); // undefined
console.log(nullVar);      // null

// this in regular vs arrow function
const obj = {
    name: "Anna",
    regularFunc: function () {
        console.log("Regular:", this.name);
    },
    arrowFunc: () => {
        console.log("Arrow:", this.name); // `this` doesn't refer to obj
    }
};

obj.regularFunc(); // Anna
obj.arrowFunc();   // undefined (or window/global in browser)

// Array reference vs spread
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1:", arr1); // both changed

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr4.push(4);
console.log("arr3:", arr3); // not changed
console.log("arr4:", arr4);
