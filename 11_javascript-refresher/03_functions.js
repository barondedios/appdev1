function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

const square = (num) => num * num;
console.log(square(4));

function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}
console.log(calculator(3, 5));
