
// Working with functions

    // function for sum
    // function showSum () {
    //     let num1 = 1;
    //     let num2 = 99;
    //     let sum = num1 + num2;

    //     document.getElementById("sum").innerHTML = "The sum of two numbers is: " + sum;
    // }

    // function for fahrenheit - celcius
    function toCelsius() {
        let fahrenheit = document.getElementById("userInput").value;

        let result = (5/9) * (fahrenheit - 32);

        document.getElementById("show").innerHTML = "F - C value: " + result.toFixed(2);

    }
    