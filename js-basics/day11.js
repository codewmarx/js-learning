
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