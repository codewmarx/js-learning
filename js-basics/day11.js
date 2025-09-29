
// javascript if statement
// used to execute a block of code when a condition is true

const d = new Date();
const awr = d.getHours();
let msg;


    if (awr > 18) {
        msg = "It's evening in Guiuan!";
    }

    document.getElementById("ifState").innerHTML = msg;

// using if statement with logical ADN (&&) operator
let dayCount = 4;
let day = "Wednesday";
let full;

    if (dayCount == 4 && day == "Wednesday") {
        full = "It's wednesday 4th now!";
    }

    document.getElementById("day11").innerHTML = full;


// javascript else statement
// Use the else statement to specify a block of code to be executed if a condition is false.

const hour = new Date();
const getHour = hour.getHours(); // get current local time
let indicator;

    if (getHour > 18) {
        indicator = "It's evening time!";
    } else {
        indicator = "It's day time!";
    }

    document.getElementById("elseifState").innerHTML = indicator;


// Javascript Ternary Operator
// The conditional ternary operator is a shorthand for writing conditional if...else statements.
let age = 21;

    let show = (age > 18) ? "You are allowed to drink!" : "You are not allowed to drink!";

    document.getElementById("ternary").innerHTML = show;