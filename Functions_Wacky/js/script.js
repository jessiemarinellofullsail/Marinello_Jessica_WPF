//alert("show me the money!");
//Jessie Marinello
//Functions_Wacky Assignment
//May 2015

//Create a random lotto number generator to help you WIN BIG!

var numbersNeeded = prompt("Enter in the amount of numbers you need"); //this number will be used for FOR LOOP to acheive requested amount of numbers
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
}

//console.log(numbersNeeded); validate user input with while loop and prompts
//console.log(maximumNumbers); validate input with while loop and prompts

//create function to choose numbers at random

function lottoNumbers (minimumNumber1, maximumNumbers1 ) {
    var randomNumbers = Math.round( Math.random() * (maximumNumbers1 - minimumNumber1) + Number(minimumNumber1) );
    //console.log(randomNumbers);

    return randomNumbers;
}

var yourNumbers = lottoNumbers(minimumNumber, maximumNumbers); //create variable to hold function in order to alert user
//console.log(yourNumbers);

for (var i = 0; i<numbersNeeded; i++){ //create for loop to return the amount of winning numbers user requested

    alert("Your winning numbers are: " + "" + lottoNumbers (minimumNumber, maximumNumbers) ); //how to break up all of my random numbers in an alert or prompt?! tried researching without much luck.
    //add function to loop in order for values to be returned
}
