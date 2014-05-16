//Jessie Marinello
//Expressions_worksheet
//May 2015



//Dog Years
var humanAge = 12; //dog's age in human years
const dogYears = 7; //"dog years" per human year. this remains constant
//multiply humanAge and constant and assign to dogAge
var dogAge = humanAge * dogYears;
//print output age of dog in dog years
console.log("Sparky is " + humanAge + " human years, which is " + dogAge + " in dog years.");

//Slice of Pie, Part I
var numPeople = 48; //this is the total number of people at the party
var numPizza = 7; //total number of pizzas ordered
var numSlices = 16; //total number of slices per pizza.
//multiply numSlices and numPizza then divide product by numPeople.  assign to totalSlices
var totalSlices = (numSlices * numPizza)/numPeople;
//print output number of total slices each person ate at the party
console.log("Each person ate " + totalSlices + " slices of pizza at the party.");

//Slice of Pie, Part II
//use same variables as Slice of Pie, Part I
//subtract the product of numSlices and numPeople from totalSlices.  assign to dogSlices
var remainder = totalSlices % 1;
console.log("Sparky got" +" "+ remainder +" "+ "slices of pizza")

//Average Shopping
//add amounts of grocery bills to variables for 5 weeks
var groceryBills = [45.60, 89.32, 25.64, 76.00, 57.90];
//create array of variables. add together for total amount spent on groceries
var groceryTotal = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];
//create array of groceryTotal /5
var groceryAverage = groceryTotal/5;
//print output of groceryTotal and groceryAverage
console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is an average of $" + groceryAverage + " per week.");

//Discounts
var itemDescription = "Giant Shark Kite"; //description of item
var originalPrice = 225.40; //original price before tax and/or discounts
var discountPercent = .35; //discount percentage in decimal form
var salesTax = .075; //sales tax percentage in decimal form
//assign the price with no tax to variable
var priceNoTax = (1 - discountPercent) * originalPrice;
console.log(priceNoTax);
//assign the price with tax to variable
var finalPrice = (1 + salesTax) * priceNoTax;
console.log(finalPrice);
//print output of prices with and without taxes of item on discount
console.log("Your " + itemDescription + " was originally $" + originalPrice + ", but after a discount of " + discountPercent + "%, it is now $" + priceNoTax + " without tax and $" + finalPrice + " with tax.");