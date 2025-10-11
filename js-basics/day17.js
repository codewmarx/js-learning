
// comparing for and while loop
// A while loop is much the same as a for loop, with statement 1 and statement 3 omitted.

// while loop = used to collect cars from the cars array
const cars = ["Honda", "Rusi", "BMW", "Ferrari"];
cars.push("Toyota");

let  i = 0;
let text = '';

while (cars[i]) { //pretty much the same except that I omitted statement 1 and 2 
    text += cars[i] + '\n';
    i++
}

console.log(text);