
// javascript for loop - are fundamental for tasks like performing an action multiple times

// use a for loop to collect car names from the cars array

const cars = ["BMW", "Honda", "Rusi", "Ford"];
let len = cars.length;
let text = '';

for (let i = 0; i < len; i++) {
    text += cars[i] + '\n';
}
console.log(text);
