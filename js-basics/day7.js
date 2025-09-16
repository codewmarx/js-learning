
    // Javascript Arrays
    
    const cars = ["Toyota", "Hyundai", "Ford"];
    // add another array 
    cars.push("Tesla");
    let car = cars[3]
    // convert array into string
    let transform = cars.toString();
    // check data type
    let type = typeof(transform);
    // count the length of an array
    let arrayLength = cars.length;
    // accessing the last array
    let lastArray = cars[cars.length - 1];
    // checks if an array is an array
    let isArray = Array.isArray(cars);

    let header = "Turning arrays into lists"
    let display = `<h3>${header}</h3><ul>`;
    // loop through each element in cars
    for (const x of cars) {
        display += `<li>${x}</li>`;
    }
    display += `</ul>`;

    document.getElementById("arrays").innerHTML = "My cars are " + cars + "<br> Its data type is " + type + "<br> Array length is " + arrayLength + "<br> The last element of the array is " + lastArray + "<br>Is cars an Array? " + isArray + `<hr> ${display}`; 