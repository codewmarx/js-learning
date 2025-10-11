
// javascript break statement
// The break statement terminates the execution of a loop or a switch statement.

let text = '';

// break in a for loop
for (let i = 1; i < 10; i++) {
    if (i === 3) { 
        break;
    }
    text += "The num is: " + i + '\n';
}

console.log(text);