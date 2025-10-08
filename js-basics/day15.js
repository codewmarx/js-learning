
// javascript do while loop = variant of while loop
// The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. 

let text = '';
let i = 0;

    do {
        text += "The current number is: " + i + '\n';
        i++;
    } while (i < 10); // it runs at least once even if the condition is false from the start;

    console.log(text);