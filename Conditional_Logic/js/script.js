//alert("now you see me");

/*var oldEnough = true;
//if the child is old enough print to the console "you can ride"

if(oldEnough){
   console.log("You can ride the coaster!"); //code performed if condition is true
}*/

//Relational Expressions
var kidHeight = 46;
var minHeight = 48;
var wParent = 45;
//if the child is old enough print to the console "you can ride"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){ //can put variable into action
    //you can ride
    console.log("You can ride the coaster!"); //code performed if condition is true
 }
else if (kidHeight > wParent){
    //ride with a parent if kid meets wParent height
    console.log("Ride with a parent");
}
//could also create a variable for the 2, ie sneakerLift = 2;
//if (kidHeight + sneakerLift > minHeight)

//If and Else (else should never have a condition)
else{ //code performed if condition is false. but else against end curly brace of if statement
    //nope
    console.log("Sorry, you've got to grow.");
}
//Else IF (for 3 or more blocks of code) Always has a condition present




