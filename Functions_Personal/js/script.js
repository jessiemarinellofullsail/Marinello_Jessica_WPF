//alert("STEAK");
//Jessie Marinello
//Functions_Personal
//May 2015

//How many calories per day your furry child needs
//Where you first calculate RER (Resting Energy Requirements)
//RER = 30(dog's weight in kilograms) + 70
//multiply RER by 1.8 (conversion rate for a normal, adult dog's activity level
//http://www.tailsofsuccessny.com/web_media/Calculating%20Dog%20Calories.pdf
//30 and 70 will remain constants in this equation
//To convert pounds to kilograms: pounds/2.2 (conversion rate)

var weight = prompt("Is your dog constantly stealing your food? Even after they just ate? Maybe you're not feeding them enough of their own measly, bland food. Find out how many calories per day does your dog needs. \nEnter in the weight, in pounds, of your pooch:");
while (isNaN(weight) || weight === "" || weight > 99 || weight <= 1) {
    //If conditions above are not met, prompt user to input a number value
    weight = prompt("Enter in the weight. Its gotta be more than 1 and less than 99 pounds");
}

const rer30 = 30;
const  rer70 = 70;
var getKilograms = weight / 2.2 //convert wight in pounds to kilograms
//console.log(getKilograms); Test var getKilograms to ensure proper conversion

var caloriesNeeded = findRestingEnergyRequirement(rer30, getKilograms, rer70) * 1.8;

function findRestingEnergyRequirement(resting1, conversion, resting2) { //create function to calculate the RER of the dog
    var rerCalculation = Math.round((resting1 * conversion) + resting2);
    //console.log(rerCalculation);
    return rerCalculation;
}

//console.log(caloriesNeeded); test working function

var caloriesPerCup= prompt("Enter in the calories per cup serving to find out the estimated amount to feed Spot per day");
while (isNaN(caloriesPerCup) || caloriesPerCup === "") {
    //If conditions above are not met, prompt user to input a number value
    weight = prompt("Don't forget to enter in the calories per cup serving");
}

alert("Your dog needs " + caloriesNeeded + " calories per day, and about " + Math.round((caloriesNeeded/caloriesPerCup)) + " cups of food per day"); //divide calories needed by calories per cup to determine how much food should be given per day