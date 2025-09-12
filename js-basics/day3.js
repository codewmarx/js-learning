
// operand raised to a certain power by another operand
// using Math.pow()
let num1 = 5;
let power = Math.pow(num1, 10);
document.getElementById("expression1").innerHTML = "5 raised to the power of 10 = " + power;

let res = (100 + 2)  * 3;

document.getElementById("expression2").innerHTML = "PEMDAS Rule = " + res;

// assignment operator &
// assignment operator on strings
let flName = "Marko"; flName += " Garado";

document.getElementById("expression3").innerHTML = "Concat strings: " + flName;

// logical && AND assignment operator
// replaces if truthy
let exp1 = 100;
let y = exp1 &&= false;

document.getElementById("expression4").innerHTML = exp1;

// logical ||= OR assignment operator
// replaces if falsy
let value = false;
let exp = value ||= "marko pogi";

document.getElementById("expression5").innerHTML = exp;


// logical ??= coalescing assignment operator
// assigns the second value if the first value is
// null or undefined
let a = null; // only if null or undefined
let b = a ??= "marko so handsome";

document.getElementById("expression6").innerHTML = a;


// the ... spread operator
//  used for spliting arrays,strings into individual elements using variable-name.join();
const numbers = [1, 2, 3, 4, 5];
document.getElementById("expression7").innerHTML = "Using 'variable.join': " + numbers.join(" ") + "<br> or with just square brackets: " + [...numbers];
