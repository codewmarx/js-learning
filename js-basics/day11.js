
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

    // price discount
    let price = 500;
    let isValidMember = true;
    let discount = isValidMember ? 0.2 : 0;
    let total = 500 - (price * discount);

    document.getElementById("discount").innerHTML = "Product Price: " + price + "<br>Discount: " + discount + "<br> Final Price: " + total;


//js switch statement
// Based on a condition, switch selects one or more code blocks to be executed.
const deyt = new Date();
const today = deyt.getDay();
let message;
    switch(today) {
        case 0:
            message = "Sunday";
            break;
        case 1:
            message = "Monday";
            break;
        case 2:
            message = "Tuesday";
            break;
        case 3:
            message = "Wednesday";
            break;
        case 4:
            message = "Thursday";
            break;
        case 5:
            message = "Friday";
            break;
        case 6:
            message = "Saturday";
            break;
        default:
            message = "Invalid";
    }

    document.getElementById("switch").innerHTML = "Today is " + message;


// js booleans in conditions
// In JavaScript, a Boolean is a primitive data type that can only have one of two values: true or false
let awers = new Date();
let getAwers = awers.getHours();
let hihi;

    if (getAwers > 18) {
        hihi = "It's evening already";
    } else {
        hihi = "It's daytime!";
    }

    document.getElementById("booleans").innerHTML = hihi;