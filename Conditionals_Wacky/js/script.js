//alert("booya");
//Jessie Marinello
//Conditionals_Wacky
//May 2015

//LOOOOVEEE METER
//Just because

var yourName = prompt("What's your name?");
if (yourName === ""){
    //if user did not input anything, prompt again
    yourName = prompt("Don't forget to add your name!");
}
var loversName = prompt("What's your lover's name?");
if (loversName === ""){
    //if user did not input anything, prompt again
    loversName = prompt("Don't forget to add your lover's name!");
}
var length1 = yourName.length;
var length2 = loversName.length;
//console.log(length1);
//test string length property (found at http://www.w3schools.com/jsref/jsref_length_string.asp)

totalLength = length1 + length2;
//console.log(totalLength);
//test addition of string length 1 and 2

if (length1 > length2) {
    //if the length of characters in length1 is more than the characters in length2, subtract 5
    //numbers are made up; trust me, there is no scientific process for this :)
    totalLength = totalLength - 5;
} else {
    //if length1 is not more than length2, add 3
    //see above in regards to made up numbers
    totalLength = totalLength + 3;
}

// Multiply by 42 (the meaning of life! For real! http://en.wikipedia.org/wiki/42_(number))
totalLength = totalLength * 42;

// Divide by 100 + length2
totalLength = totalLength / (100 + length2);

if (totalLength > 10){
    totalLength = 10;
}else {
    totalLength = Math.round(totalLength, 0);
}

alert(yourName + " and " + loversName + " score " + totalLength + " out of 10!");