
//alert("i'm watching you");
//Jessie Marinello
//Conditionals_Personal
//May 2015

//BMI Calculator
//Formula is as follows:
//W/(H * H) *703
//Where W=Weight in pounds
//Where H=Height in inches
//Where 703 = standard conversion factor for calculating BMI
//Information on BMI found at http://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html?s_cid=tw_ob064

/*var weight = prompt("Enter in your weight");
var heightFeet = prompt("Enter in your height in feet");
var heightInches = prompt("Enter in your height in inches");
heightFeetConvert = heightFeet * 12;
var height = heightFeetConvert + heightInches;
if ( (weight <= 35) || (weight >= 500) || (height <= 48) || (height >= 120) ) {
    alert("Invalid data.  Please check and re-enter!");
}
console.log(height);*/

var weight = prompt("Enter in your weight");
var heightFeet = prompt("Enter in your height in feet");
var convertFeet = heightFeet * 12;
var heightInches = prompt("Enter in your height in inches");
var height = (convertFeet * 1) + (heightInches * 1 ); //multiply each number by 1 since original calculation was being treated as a string (original formula noted above)
//console.log(height);
if ( (weight <= 35) || (weight >= 500) || (height <= 48) || (height >= 120) ) {
    //if weight is too small or too great, alert user
    alert("Please check your weight and height and re-enter");
}

bmi = (Math.round((weight * 703) / (height * height)));
//console.log(bmi);
if (bmi <19) {
    alert("Underweight");
} else if (bmi >=19 && bmi <=25){
    alert("Your BMI is " + bmi + ", which is Desirable");
} else if (bmi >=26 && bmi <=29) {
    alert("Your BMI is " + bmi + ", which is Prone to health risks");
} else if (bmi >=30 && bmi <=40) {
    alert("Your BMI is " + bmi + ", which is Obese");
} else if (bmi >40){
    alert("Your BMI is " + bmi + ", which is Extremely obese");
}


