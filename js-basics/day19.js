
// js string search
// string search methods

// js string indexOf() = returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text = "Find my name 'Marko' in its index position.";
let find = text.indexOf("Marko", 11);
console.log(find);

// js string lastIndexOf() = returns the index of the last occurrence of a specified text in a string
let text2 = "My name are Marko and Marko";
let findText = text2.lastIndexOf("Marko");
console.log(findText);

// js string search() = returns the position of the first occurrence of a string in a string.
let intro = "I am MARK ANTHONY GARADO";
let search = intro.search(/mark/i);
console.log(search);

// js string match() = returns an array containing the results of matching a string against a string (or a regular expression).
let words = "I am going to SPAIN to find mainly the beautiful plain only to see the rain.";
match = words.match(/ain/gi); //enable regex for global-insensitive search
console.log(match.length, match);

// js string matchAll() =  returns an iterator containing the results of matching a string against a string (or a regular expression).
let thoughts = "I love cats. Cats are my favourite animal. Cats are very popular.";
let matchAll  = thoughts.matchAll(/cats/gi);
console.log(Array.from(matchAll));

// js string includes() = returns true if a string contains a specified value, case-sensitive, and does not accept regular expressions
let express = "This world is called Earth";
let verify = express.includes("Earth");
console.log(verify);

// js string startsWith() = reutrns true if a string begins with a specified value, otherwise, false
let me = "My name is Marko Garado, Aspiring Web Developer";
let findMe = me.startsWith("Marko", 11);
console.log(findMe);

// js string endsWith() = returns true if a string ends with a specified value, otherwisem=, false
let findAgain = me.endsWith("Developer", 47);
console.log(findAgain);