

const carName = "Volvo";
let fName = "Marko";
let carPrice = 1000000000;
let student = true;
let date = new Date("09-11-2025")
let nums = 5 + "2" + 3;

let car = ["honda", "volvo", "BMW"];

document.getElementById("car").innerHTML = 
"Hello I am " + fName + " and my first ever car is " + carName + " with a US Dollar price of " + "$" + carPrice + " which I purchased on " + date; 

// document.getElementById("dataType").textContent = (typeof student);

document.getElementById("dataType").textContent = "My collection of cars contains the ff: " + car;

// document.getElementById("dataType").textContent = nums;

