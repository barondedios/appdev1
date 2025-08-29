let foods = ["Pizza", "Sushi", "Burger"];
foods.push("Pasta");      // Add one more
foods.shift();            // Remove first

for (const food of foods) {
    console.log(food);
}

const likes = foods.map(food => `I like ${food}`);
console.log(likes);
