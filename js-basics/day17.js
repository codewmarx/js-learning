
// javascript continue statement
// The continue statement skips the current iteration in a loop.

let text = '';

// break in a for loop
for (let i = 1; i < 10; i++) {
    if (i === 5) { //once i = 5, it skips it 
        continue;
    }
    text += "The num is: " + i + '\n';
}

console.log(text);