
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

    if (userInput === null || userInput.trim() === "") {
        alert("Please enter an input!");
    } else if (carLists.includes(userInput)) {
        alert("Input already exists!");
    } else {
        carLists.push(userInput);
    }
    
    // total length of predefined array and user input
    let arrayLength = carLists.length;

    // last list of the array element
    let carLast = carLists[carLists.length - 1];
    
    document.getElementById("solving").innerHTML = "Updated cars: " + carLists + "<br> The length of the elements is " + arrayLength + "<br> The last added car in the element is " + carLast;