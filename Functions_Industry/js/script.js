//alert("show me the money!!");
//Jessie Marinello
//Functions Industry
//May 2015

//How many millions of years will it take you to pay off those student loans?
//to calculate time to pay off loan:
//log(1+(rate/(monthly payment / principal) - rate) / log(1 + rate)
//Where rate = your interest rate
//Where payment = your monthly payments
//Where principal = total amount of loan
//Assume that interest rate and monthly payments remain constant

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

var rate = interestRate/1200; //12 months * 100 percent
console.log(rate); //rate is calculating properly

//create function to calculate loan
function calculateLoan() {
    var calculate1 = Math.round(Math.log(1 + (rate / (monthlyPayment / principalOwed) - rate)) / Math.log(1 + rate) / 12);
    console.log(calculate1);
    return calculate1;
}