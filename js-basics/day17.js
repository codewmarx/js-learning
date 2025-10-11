
// comparing for and while loop
// A while loop is much the same as a for loop, with statement 1 and statement 3 omitted.

// for loop = used to collect cars from the cars array
const cars = ["Honda", "Rusi", "BMW", "Ferrari"];
cars.push("Toyota");
cars[1] = "Tesla";
let  i = 0;
let text = '';

for (;cars[i];) {
    text += cars[i] + '\n';
    i++
}

console.log(text);