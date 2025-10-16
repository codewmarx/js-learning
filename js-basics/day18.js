
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