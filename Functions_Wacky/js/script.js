alert("i'm the weiner!");

//Create a random lotto number generator to help you WIN BIG!

var numbersNeeded = prompt("Enter in the amount of numbers you need"); //this number will be used for FOR LOOP to achieve requested amount of numbers
//validate user inputs
while (isNaN(numbersNeeded) || numbersNeeded === "" || numbersNeeded > 7) {
    //If conditions above are not met, prompt user to input a number value
    numbersNeeded = prompt("Hey! It has to be a number and it can't be more than 7.");
}

var minimumNumber = prompt("Enter in your minimum number range.");
while (isNaN(minimumNumber) || minimumNumber === "") {
    //If conditions above are not met, prompt user to input a number value
    minimumNumber = prompt("You forgot to enter in your minimum number range.");
}

var maximumNumbers = prompt("Enter in your maximum number range.");
while (isNaN(maximumNumbers) || maximumNumbers === "") {
    //If conditions above are not met, prompt user to input a number value
    maximumNumbers = prompt("Don't forget to enter in your maximum number range.");