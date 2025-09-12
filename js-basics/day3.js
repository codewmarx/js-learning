
// sets of variety of problems

// PROBLEM 1
// Write code to calculate how many grains of rice you’d have if you start with 1 grain and double it every day for 30 days.

let days = 30;
let grain = 2;
let grainsOfRice = Math.pow(grain, days);

document.getElementById("problem1").innerHTML = "With a grain of 2 each day," + " after " + days + " days, you will have a total of " + grainsOfRice.toLocaleString() + " grains of rice.";

// PROBLEM 2
// Calculate the total price if you buy 3 apples (₱10 each) and 2 bananas (₱8 each), then add a ₱5 tax.
// Check that PEMDAS is respected.
let apples = 3
let applePrice = 10;

let bananas = 2;
let bananaPrice = 8;

let tax = 5;

let totalPrice = (apples * applePrice) + (bananas * bananaPrice) + tax;

document.getElementById("problem2").innerHTML = "The total price of 3 apples (10 pesos each) and 2 bananas (8 pesos each) is equals to: " + totalPrice;


// PROBLEM 3
// Start with a variable message = "Hello".
// Append "World" using += and show the final string.
let text1 = "Hello";
text1 += " World.";
document.getElementById("problem3").innerHTML = "If you append 'Hello' and 'World' together using different variables and '+=', the result would be: " + text1;


// PROBLEM 4
// You have a variable isLoggedIn = true.
// Use &&= to assign "Welcome, User!" only if isLoggedIn is truthy.
let isLoggedIn = true;
// isLoggedIn &&= "Welcome, User";
const message = isLoggedIn ? "Logged in! Welcome, User!" : "User is not logged in!";
document.getElementById("problem4").textContent = "User Status: " + message;


// PROBLEM 5
// You have a variable username = "".
// Use ||= to assign a default username like "Guest" if it’s empty or falsy.
let username = '';
let auth = username ||= "Guest";
document.getElementById("problem5").textContent = "Guest Status: " + auth;


// PROBLEM 6
// You have theme = null.
// Use ??= to assign "light-mode" only if theme is null or undefined.
let theme = null;
let color = theme ??= "light-mode";
document.getElementById("problem6").textContent = "The color of the theme is: " + color;


// PROBLEM 7
// Given an array const nums = [10, 20, 30];,
// use the spread operator to: Copy it into a new array. Add a new number 40 at the end.
const nums = [10, 20, 30];
nums.push(40);
const newValue = [...nums]


document.getElementById("problem7").textContent = "Number of arrays in spread form: " + newValue;

// spreading 'marko' into characters
const fname = "Marko";
const newName = [...fname];

document.getElementById("problem8").textContent = "My first name in spread form: " + newName;