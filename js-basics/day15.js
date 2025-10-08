
// javascript do while loop = variant of while loop
// The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. 

// Simple password check using do while

const { stdin } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

const myPass = "markopogi123";
let userInput = '';

function verifyPassword() {
    rl.question("Enter the password: ", (answer) => {
        userInput = answer;

        if (userInput === myPass) {
            console.log("Access granted. Welcome Pogi!");
            rl.close();
        } else {
            console.log("Wrong password, try again\n");
            verifyPassword();
        }
    });
}
verifyPassword();