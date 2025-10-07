
// javascript while loop
// The while loop loops through a block of code as long as a specified condition is true.

// Mini Project - Countdown Timer (While Loop)
// Goal: Print numbers from 10 down to 1 using a while loop, then print "Blast off!". Live Countdown
let timer = 10;
const text = document.getElementById("while");

    const interval = setInterval(() => {
        if (timer <= 0) {
            text.innerHTML = "Blast off!";
            clearInterval(interval);
            return;
        }
        text.innerHTML = `Bomb exploding in ${timer}`;
        timer--;
    }, 1000);
