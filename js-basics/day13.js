
// js logical operators = ogical operators are used to combine boolean expressions. Logical operators can be used to modify the results of comparisons.

// AND && operator - OR || operator
let x = 10;
let y = 20;

// && Operators returns true if both expressions are true, else false
document.getElementById("logical").innerHTML = "&& Operator: " + (x > 20 && y < 30) + "<br>" + "|| Operator: " + (x < 40 && y > 15);

// || Operator returns true if either one or both of the expressions are true, else false
document.getElementById("operators").innerHTML = (x === 5 || y === 19) + "<br>" + (x === 10 || y === 30) + "<br>" + (x === 11 || y === 20);

// The ! (NOT) Operator returns true for false expressions and false for true expressions 
document.getElementById("not").innerHTML = (5 == 8) + "<br>" + !(5 == 8);

// The ?? Nullish Coalescing Operator = The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.

let text1 = null;
let text2 = "Marko";
let result = text1 ?? text2;

document.getElementById("nullish").innerHTML = result;