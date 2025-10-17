
// js basic string methods

let text = "Pneumonoultramicroscopicsilicovolcanoconiosis";

// 1. legth property
let lngth = text.length;
console.log(lngth);

// 2. charAt() string method
let char = text.charAt(1);
console.log(char);

// 3. charCodeAt() string method
let utfCode = text.charCodeAt(0);
console.log(utfCode);

// 4. codePointAt() string method
let codePnt = text.codePointAt(1);
console.log(codePnt);

// 5. Property accesss []
let proprty = text[2];
console.log(proprty);

// 6. js string concat()
let fname = "Marko";
let lname = "Garado";
let fullName = fname.concat(" ", lname);
console.log(fullName);

// 7. extracting string parts
// a. js string slice()
let food = "Gwapogi";
let extract = food.slice(3, 7);
console.log(extract);

// b. js string substring() 
let extracted = food.substring(0, 5);
console.log(extracted);

// 8. js string toUpperCase()
let myName = "marko";
let toUpper = myName.toUpperCase();
console.log(toUpper);

// 9. js string toLowerCase() 
let me = "POGI";
let toLower = me.toLowerCase();
console.log(toLower);

// 10. js strijng isWellFormed()
let word = "Hello World";
let checker = word.isWellFormed();
console.log(checker);

// 11. js string trim() 
let greeting = "    Good Morning    ";
let trem = greeting.trim(); //trim() method removes whitespaces
console.log(greeting.length, trem.length);

// 12. js string trimStart() 
// let's use the value of let = greeting from 11.
let startTrem = greeting.trimStart(); // only trims/removes whitespace from the start of a string 
console.log(startTrem.length);

// 13. js string trimEnd() = removes/trims whitespace from the end of a string
let endTrem = greeting.trimEnd();
console.log(endTrem.length);

// 14. js string padding
// padStart()
let hrs = 9;
let transform = hrs.toString();
let result = transform.padStart(2, "0"); //appends 0 at the start 
console.log(result);

// 15. padEnd()
let mns = 5;
let transformm = mns.toString();
let resultt = transformm.padEnd(2, "7"); //appends 7 at the end
console.log(resultt);

// append both hrs and mns
let appended = "Current time: ";
let result1 = appended + result + ':' + resultt;
console.log(result1);

// 16. js string repeat()
let mySelf = "Marko is";
let truth = "pogi";
let display = mySelf + truth.repeat(3); //returns a string with a number of copies of a string
console.log(display);