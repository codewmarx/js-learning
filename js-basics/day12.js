// js type conversion in user input = change data type of a value to another data type (strings, numbers, booleans)

let age = parseInt(window.prompt("How old are you marko?"));

age+=1;
let x = "Garado";
let y = false;

document.getElementById("conversion").innerHTML = age + " is a typeof " + (typeof age) + "<br>" + x + " is a typeof " + (typeof x) + "<br>" + y + " is a typeof " + (typeof y);
