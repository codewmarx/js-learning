
// javascript while loop
// The while loop loops through a block of code as long as a specified condition is true.

// Mini Project - Countdown Timer (While Loop)
// Goal: Print numbers from 10 down to 1 using a while loop, then print "Blast off!".
let timer = 10;
let text = '';

    while (timer > 0) {
        text += 'Bomb exploding in ' + timer + '\n';
        timer--;
    }
    text += "Blast off";
    console.log(text);
