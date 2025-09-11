
// js operators
// addition
let x = 5;
let y = 10;

let sum = x + y;

document.getElementById("p1").innerHTML = "Sum: " + sum;

// subtraction
let diff1 = 50;
let diff2 = 10;

let diff = diff1 - diff2;

document.getElementById("p2").innerHTML = "Differrence: " + diff;

// multiplication
let p1 = 5;
let p2 = 10;

let product = p1 * p2;

document.getElementById("p3").innerHTML = "Product: " + product;

// division
let q1 = 100;
let q2 = 20

let quotient = q1 / q2;

document.getElementById("p4").innerHTML = "Quotient: " + quotient;

// mixed
let num1 = 500;
let num2 = (1500 - 500) - num1;

document.getElementById("p5").innerHTML = "Result: 1000 - 500 = " + num2;

// concatenate strings
let add = 10;
add += 5;

document.getElementById("p6").innerHTML = "Result: " + add;

// comparison operator/s
let firstNum = 400; 
let secNum = 1000;

let isBigger = firstNum < secNum;

document.getElementById("p7").innerHTML = "Is 400 less than 1000? " + isBigger;