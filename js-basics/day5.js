
// initialize empty object then assign values later
// or initialize it first inside the const variable
    // const myInfo = {
    //     fname:"Mark Anthony",
    //     lname:"Garado",
    //     age: 21,
    //     status:"Single",
    // };

    // myInfo.fname = "Mark Anthony";
    // myInfo.lname = "Garado";
    // myInfo.age = 21;
    // myInfo.status = "Single";

    // document.getElementById("objects").innerHTML = "My name is " + myInfo.fname + " " + myInfo.lname + " and I am " + myInfo.age + " years old " + " and I am still " + myInfo.status + " up to this point.";

    // js objects
    const student = {
        fname: "Marko",
        lname: "Garado",
        age: 21,
        occupation: "student",
        eyeColor: "brown",
    };

    // add new object
    student.uni = "ESSU Guiuan";

    // using backsticks
    document.getElementById("objects").innerHTML = `Hello my name is ${student.fname} ${student.lname} and I am ${student.age} years old. I am still a ${student.occupation} at ${student.uni} and I have ${student.eyeColor} eyes.`;

    // js object methods (function inside objects)
    const personalInfo = {
        firstName: "Marko",
        lastName: "Garado",
        myAge: 21,
        myOccupation: "student",
        
        fullName () {
            return `${this.firstName} ${this.lastName} and I am ${this.myAge} years old.`;
        }
    };
    document.getElementById("methods").innerHTML = `My full name is ${personalInfo.fullName()}`;

    // object constructor functions
    class Person {
        constructor (fName, lName, age, bloodType) {
            this.firstname = fName;
            this.lastname = lName;
            this.personAge = age;
            this.personbloodType = bloodType;
        }
    }
    
    Person.prototype.combineAge = function(otherAge) {
        return this.personAge + otherAge.personAge;
    }

    const sister = new Person("Isabel", "Garado", 21, "A");
    const brother = new Person("Mark", "Garado", 24, "O");

    document.getElementById("constructor").innerHTML = "My sister is " + sister.firstname + " and my brother is " + brother.firstname + " and their combined age is " + (sister.combineAge(brother)); 