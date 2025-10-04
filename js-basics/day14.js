
// js loops = Loops can execute a block of code a number of times.

// for loop
const students = ["Marko", "Mark", "Marky", "Marc"];
let text = "";

for (let i = 0; i < students.length; i++) {
    text += students[i] + "<br>";
}

document.getElementById("loops").innerHTML = text;