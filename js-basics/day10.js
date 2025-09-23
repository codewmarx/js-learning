

// the if statement
let myAge = 21;

    if (myAge >= 18) {
        document.getElementById("conditionals").innerHTML = "I am an adult";
    }

// the else statement
let gwa = 1.47;

    if(gwa <= 1.75) {
       document.getElementById("conditionals1").innerHTML = "I am a candidate for Dean's Lister"; 
    } else {
        document.getElementById("conditionals1").innerHTML = "I am not a candidate for Dean's Lister"; 
    }

// the else if statement
let grade = 92;
let message;

    if (grade >= 90) {
        message = "Excellent grade!";
    } else if (grade >= 80) {
        message = "Good grade!";
    } else if (grade >= 75) {
        message = "Fair grade!";
    } else {
        message = "Poor grade!";
    }

    document.getElementById("conditionals2").innerHTML = message;


// switch statement
let day = 2;
let indicate;

    switch (day) {
        case 0:
        indicate = "It's sunday";
        break;
        case 1:
        indicate = "It's monday";
        break;
        case 2:
        indicate = "It's tuesday";
        break;
        case 3:
        indicate = "It's wednesday";
        break;
        case 4:
        indicate = "It's thursday";
        break;
        case 5:
        indicate = "It's friday";
        break;
        case 6:
        indicate = "It's saturday";
        break;
        default: 
        indicate = "Invalid day";
    }

    document.getElementById("conditionals3").innerHTML = indicate;
    
    

    // PRACTICE QUIZ on CONDITIONAL Statements
    // IF statement
    // PROBLEM 1 : Write an if statement that checks if the temperature is greater than 30.
    // If it is, display "It's a hot day!" inside an element with ID "conditionals3".
    let temperature = 35;
    let indicator;

    if (temperature > 30) {
        indicator = "It's a hot day!";
    }

    document.getElementById("quiz1").innerHTML = indicator;

    // IF ELSE statement
    // PROBLEM 2 : Write a program that checks a person’s age. If the age is 18 or older, display “You are eligible to vote”. Else, display “You are not eligible to vote”. 
    let age = 16;
    let eligibility;

    if (age >= 18) {
        eligibility = "You are eligible to vote!";
    } else {
        eligibility = "You are not eligible to vote!";
    }

    document.getElementById("quiz2").innerHTML = eligibility;


    // ELSE IF statement
    // PROBLEM 3 : Weather Clothing Suggestion
    // Write a program that suggests clothing based on temperature: If temperature is 30 or above, display "Wear light clothes, it's hot!" Else if temperature is 20 or above, display "It's warm, wear a t-shirt!" Else if temperature is 10 or above, display "It's cool, wear a jacket!" Otherwise, display "It's cold, bundle up!"
    let temp = 30;
    let suggestion;

    if (temp === 30) {
        suggestion = "It's exactly 30, still hot!";
    } else if (temp >= 30) {
        suggestion = "Wear light clothes, it's hot!";
    } else if (temp >= 20) {
        suggestion = "It's warm, wear a t-shirt!";
    } else if (temp >= 10) {
        suggestion = "It's cool, wear a jacket!";
    } else {
        suggestion = "It's cold, bundle up!";
    }

    document.getElementById("quiz3").innerHTML = suggestion;

    
    // SWITCH CASE
    // PROBLEM 4
    // Day of the Week Greeting. Write a program using switch that takes a number (1–7) as input (representing days of the week). If it’s 1, display "Sunday - Relax, it’s weekend!" If it’s 2–6, display "Weekday - Stay productive!" If it’s 7, display "Saturday - Enjoy your weekend!" If the number is outside 1–7, display "Invalid day!"
    let userInput = parseFloat(prompt("Enter a number between 1-7 for the day of the week"));
    let greeting;

    switch (userInput) {
        case 1:
        greeting = "Sunday - Relax, it's weekend!";
        break;
        case 2:
        greeting = "Weekday - Stay productive!";
        break;
        case 3:
        greeting = "Weekday - Stay productive!";
        break;
        case 4:
        greeting = "Weekday - Stay productive!";
        break;
        case 5:
        greeting = "Weekday - Stay productive!";
        break;
        case 6:
        greeting = "Weekday - Stay productive!";
        break;
        case 7:
        greeting = "Saturday - Enjoy your weekend";
        break;
        default: 
        greeting = "Invalid day";
    }

    document.getElementById("quiz4").innerHTML = greeting;