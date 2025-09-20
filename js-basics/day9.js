

// == operator
let x = 5;

document.getElementById("operator").innerHTML = `Is 5 = 8? ${x == 8} <br> Is 5 = 5? ${x == 5} <br> Is 5 = "5"? ${x == "5"}`;


// === operator
let num = 5;

document.getElementById("strict").innerHTML = `Is 5 = 10? ${num === 10} <br> Is 5 = 5? ${num === 5} <br> Is 5 = "5"? ${num === "5"}`;

// != operator
let value = 100;

document.getElementById("!equal").innerHTML = `Is 100 != 100? ${value != 100} <br> Is 100 != 99? ${value != 99} <br> Is 100 != "100"? ${value != "100"}`;

// !== operator
let var1 = 50;

document.getElementById("strict!equal").innerHTML = `Is 50 !== 50? ${var1 !== 50} <br> Is 50 !== 51? ${var1 !== 51} <br> Is 50 !== "50"? ${var1 !== "50"}`;

// <, >, <=, >= operators
let age = 21;

document.getElementById("operators").innerHTML = `Is 21 less than 20? ${age < 21} <br> Is 21 greater than 20? ${age > 20} <br> Is 21 less than or equal to 20?${age <= 20} <br> Is 21 greater than or equal 20? ${age >= 20} <br> Is 21 less than or equal to 21? ${age <= 21} <br> Is 21 greater than or equal to 21? ${age >= 21}`;


// alcohol verifier
let myAge = 21;
 
    if (myAge < 18) {
        document.getElementById("alcohol").innerHTML = "You are not allowed to drink!";
    } else {
        document.getElementById("alcohol").innerHTML = "You are allowed to drink!";
    }