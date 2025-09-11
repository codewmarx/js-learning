
// variables
let x = 5;
let y = 50;

let result = x * y;

function btnAdd() {
    document.getElementById("result").innerHTML = "Result: " + result;
}

function btnClick() {
    document.getElementById("changedText").style.display = "none";
}

function btnChange() {
    document.getElementById("changedText").innerHTML = "<I><b>Veteran Web Developer</b></I>";
}

function btnAlert() {
    window.alert("You have clicked a button!");
}