
// constant arrays 
const cars = ["Toyota", "Volvo", "Honda",];

cars[0] = "Ford";
cars[3] = "Tesla";

cars.push("Hyundai");
cars.push("Chevrolet");

document.getElementById("cars").textContent = "My cars are: " + cars;

// constant objects
const car = {type:"Toyota", model:"Corolla", color:"Super White"};

// override object property
car.type = "Hyundai";
car.color = "Black";

// add new object
car.owner = "Marko.";

document.getElementById("cars").innerHTML = "My car's type is " + JSON.stringify(car);