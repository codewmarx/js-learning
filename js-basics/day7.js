
    // Javascript Arrays
    // Javascript Simple Problem
    // 1. Create a program that:
    // 2. Starts with the cars array.
    // 3. Lets the user add a new car name (via prompt).
    // 4. Checks if the car already exists in the array:
    // 5. If yes → display: "Car already exists in the list!".
    // 6. If no → add it to the array and update the list.
    // 7. Always display the total number of cars and the last car added.
    let carLists = ["Toyota", "Hyundai", "Ford", "Tesla"];
    // let length = carLists.length;

    let userInput = window.prompt("Enter a new car: ");

    // combined predefined array with user input
    let combinedArray = carLists.concat(userInput);
    
    // total length of predefined array and user input
    let arrayLength = combinedArray.length;

    // last list of the array element
    let carLast = combinedArray[combinedArray.length - 1];
    
    if (carLists.includes(userInput)) {
        alert("Input already exists!");
    } else {
        carLists.push(userInput);
        document.getElementById("solving").innerHTML = "Updated cars: " + combinedArray + "<br> The length of the elements is " + arrayLength + "<br> The last added car in the element is " + carLast;
    }