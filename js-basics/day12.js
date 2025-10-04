// js type conversion in user input = change data type of a value to another data type (strings, numbers, booleans)

// let age = parseInt(window.prompt("How old are you marko?"));

// age+=1;
// let x = "Garado";
// let y = false;

// document.getElementById("conversion").innerHTML = age + " is a typeof " + (typeof age) + "<br>" + x + " is a typeof " + (typeof x) + "<br>" + y + " is a typeof " + (typeof y);

// js booleans in while loop
let num = 1;
let text = "";

    while (num < 10) {
        text += num;
        num++;
    }

    document.getElementById("loops").innerHTML = text;

// You can use the Boolean() function to find out if an expression (or a variable) is true:
document.getElementById("checker").innerHTML = Boolean(9 == "9");

// anything that has no value returns false (0, null, undefined, NaN, empty string = "")
let x = "";
document.getElementById("empty").innerHTML = Boolean(x);

// js booleans as objects: booleans can also be defined as objects with the keyword new:
// Do not create Boolean objects.
// The new keyword complicates the code and slows down execution speed.
let val = false;
let obj = new Boolean(false);
document.getElementById("object").innerHTML = typeof val + "<br>" + typeof obj;
