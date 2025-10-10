
// javascript for loop - are fundamental for tasks like performing an action multiple times

// short & simple exercise using for loop
// problem : Sum of Numbers

// Write a program that asks the user for a number (e.g. 5) and then uses a for loop to calculate the sum of all numbers from 1 to that number.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

    rl.question("Enter any number: " , (answer) => {
        numInput = parseInt(answer);
        let sum = 0;

        for (let i = 1; i <= numInput; i++) {
            sum += i;
        }
        rl.close();
        console.log(sum);
    });



