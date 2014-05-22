//Jessie Marinello
//Conditionals Worksheet
//May 2015

//Last chance for gas
//Do you have enough gas to make it 200 miles?
var gasEfficiency = 20; //in miles per gallon (mpg)
var currentGas = .97; //percent in decimal form (40%)
var tankCapacity = 11; //gallons
if ((200/gasEfficiency) > (currentGas * tankCapacity))
{
    console.log("You only have " + (currentGas * tankCapacity) +" gallons of gas in your tank, better get gas now while you can!");
}else if ((200/gasEfficiency) < (currentGas * tankCapacity)){
    console.log("Yes, you can make it without stopping for gas!");
}


//Check the login
//Make sure the user has the correct username and password
var userName = "Its Me"; //user name entered by user
var userPassword = "123abc"; //password entered by user
var userNameCorrect = "Its Me"; //correct user name
var passwordCorrect = "Abc123";  //correct password
if (userName == userNameCorrect && userPassword == passwordCorrect)
{
    console.log("Welcome " + userName +"!"); //if the username and password is correct
}else if (userName != userNameCorrect){
    console.log("User not found. Try again."); //if the username does not match
}else if (userPassword != passwordCorrect){
   console.log("Password does not match our records."); //if the username matches but the password does not
}

//Movie ticket price
//Customers aged >=55 and <10 get tickets for $7.00 between 3-5.  All other ages and times are $12.00
var movieTime = 6;
var customerAge = 55;
if ((customerAge >= 55 || customerAge < 10) && movieTime ==3 || movieTime ==4 || movieTime ==5) //I know there is a better way to do this, but I can't think of a way to set parameterss
{
    console.log("The ticket price is $7.00.");
}else {
    console.log("The ticket price is $12.00");
}