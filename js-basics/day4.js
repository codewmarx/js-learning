
// Working with functions

    // function for sum
    // function showSum () {
    //     let num1 = 1;
    //     let num2 = 99;
    //     let sum = num1 + num2;

    //     document.getElementById("sum").innerHTML = "The sum of two numbers is: " + sum;
    // }

    // function for fahrenheit - celcius
    // function toCelsius() {
    //     let fahrenheit = document.getElementById("userInput").value;

    //     let result = (5/9) * (fahrenheit - 32);

    //     document.getElementById("show").innerHTML = "F - C value: " + result.toFixed(2);
    // }
    

    // Function Problem
    // 1. Create a function that takes a list of exam scores and returns the average score. Then, use that function to find the average of these scores: 90, 85, 78, 92, 88
    // LONG METHOD
    function computeAverage () {
        // my optimized version
        // collect all user input through one class selector
        let userScores = document.querySelectorAll(".scores"); 

        // tranforms from nodelist into an array list
        let allScores = Array.from(userScores).map(input => parseFloat(input.value)); 

        let sum = allScores.reduce((acc, val) => acc + val, 0);

        let average = sum / allScores.length;

        document.getElementById("showAvg").innerHTML = "Your total average is: " + average.toFixed(2); // optional for decimal places
    }
    
    