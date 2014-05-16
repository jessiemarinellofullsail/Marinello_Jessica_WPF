//Jessie Marinello
//Expressions_Personal
//May 2015

//Estimate your BAC (Blood Alcohol Level)
//BAC = (A*5.14/W*r) - 0.15*H)
//Where A = total number of liquid ounces of alcohol consumed
//Where 5.14 is a constant for average alcohol percent in beverage (can be changed if needed)
//Where W = weight of person in pounds
//Where r = alcohol distribution ratio; men = .73 and women = .66
//Where H = number of hours drinks were consumed over
//Where 0.15 is a constant for alcohol elimination rate

var drinkAmount = prompt("To calculate your BAC level, please enter the following information: \nThe total number of drinks consumed"); //user enters total number of drinks consumed
var numOunces = prompt("Enter in the number of ounces in one drink, i.e. 12 ounces in one beer");
var totalOunces = drinkAmount * numOunces;
//console.log(totalOunces); test math
var alcoholPercentage = prompt("Enter in the alcohol percentage in decimal format. This is usually located on the bottle");
var a = drinkAmount * totalOunces * alcoholPercentage; //calculates info collected from prompts
//console.log(a); test math
const averageAlcohol = 5.14;
var weight = prompt("Please enter your weight in pounds");
var ratio = prompt("If you are a man enter .73. If you are a woman, enter .66");
const elimination = 0.15;
var hours = prompt("How many hours did you drink for?");
var bacPercentage = (a * averageAlcohol / weight * ratio) - elimination * hours;
//console.log(bacPercentage);

alert("Your blood alcohol content is " + bacPercentage + " percent."); //prints to user