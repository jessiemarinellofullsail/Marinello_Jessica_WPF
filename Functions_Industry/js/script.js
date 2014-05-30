//alert("show me the money!!");
//Jessie Marinello
//Functions Industry
//May 2015

//How many millions of years will it take you to pay off those student loans?

var principalOwed = prompt("Please enter your total loan amount"); //prompt for value
//validate user inputs
while (isNaN(principalOwed) || principalOwed === "") {
    //If conditions above are not met, prompt user to input a number value
    principalOwed = prompt("Please enter a number value for your loan amount");
}

var monthlyPayment = prompt("Please enter your monthly payment"); //prompt for value
while (isNaN(monthlyPayment) || monthlyPayment === "") {
    //If conditions above are not met, prompt user to input a number value
    monthlyPayment = prompt("Please enter a number value for your monthly payment");
}

var interestRate = prompt("Please enter your interest rate"); //prompt for value
while (isNaN(interestRate) || interestRate === "") {
    //If conditions above are not met, prompt user to input a number value
    interestRate = prompt("Please enter a number value for your interest rate");
}