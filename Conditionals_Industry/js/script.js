//alert("woof");
//Jessie Marinello
//Conditionals_Industry
//May 2015

//Do I have enough vacation days to leave work and go exploring???

var totalTimeOff = prompt("Do you have enough vacation days to take a break? \nEnter in the total number of days off you are allotted");
if (totalTimeOff === ""){
    //if user did not input anything, prompt again
    totalTimeOff = prompt("Don't forget to add your name!");
}
var totalDaysTaken = prompt("Enter in the number of vacation days you have already taken");
if (totalDaysTaken === ""){
    //if user did not input anything, prompt again
    totalDaysTaken = prompt("Don't forget to add your name!");
}
var numNewDays = prompt("Enter in the number of days you would like to take off");
var availableTime = totalDaysTaken + numNewDays; //calculates number of available vacation days
var vacation;
vacation = (availableTime >= totalTimeOff) ? alert("Wahoo! No work!") : alert("Bummer, no vacation days left!");
