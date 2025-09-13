
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
    function computeAverage () {
        let value1 = Number(document.getElementById("avg1").value);
        let value2 = Number(document.getElementById("avg2").value);
        let value3 = Number(document.getElementById("avg3").value);
        let value4 = Number(document.getElementById("avg4").value);
        let value5 = Number(document.getElementById("avg5").value);

        let average = (value1 + value2 + value3 + value4 + value5) / 5;

        document.getElementById("showAvg").innerHTML = "Your total average is: " + average.toFixed(2);
    }
    
    