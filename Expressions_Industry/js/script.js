//Jessie Marinello
//Expressions_Industry
//May 2015
//alert("This is Expressions Industry");

//Find the weighted number of hours you need to spend on homework per night if you only want to work a specific percentage of your time per day
var totalHours = 28; //total amount of hours of school work to be completed in one week (five days)
var mondayTime = prompt("Enter in the percent in decimal format of homework you would like to do on Monday");
var tuesdayTime = prompt("Enter in the percent in decimal format of homework you would like to do on Tuesday");
var wednesdayTime = prompt("Enter in the percent in decimal format of homework you would like to do on Wednesday");
var thursdayTime = prompt("Enter in the percent in decimal format of homework you would like to do on Thursday");
var fridayTime = prompt("Enter in the percent in decimal format of homework you would like to do on Friday");
var monday1 = totalHours * mondayTime;
var tuesday1 = totalHours * tuesdayTime;
var wednesday1 = totalHours * wednesdayTime;
var thursday1 = totalHours * thursdayTime;
var friday1 = totalHours * fridayTime;
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
alert("The amount of hours you have to spend on homework: " + days[0] + " is " + monday1 + " hours, " + days[1]+ " is " + tuesday1 + " hours, " + days[2] + " is " + wednesday1 + " hours, " + days[3] +  " is " + thursday1 + " hours, " + days[4] + " is " + friday1 + " hours");


//Confused....on getting a whole number to convert to decimal. I had var tuesday1 = totalHours * tuesdayTime/10; but could not get a decimal point into the result.  also tried var tuesdayResult = tuesday1/10; but that didn't work either. What am I doing wrong??