
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
// a. js string slice*()
let food = "Adobobo";
let extract = food.slice(3, 7);
console.log(extract);
