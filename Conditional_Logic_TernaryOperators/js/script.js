//Ternary Operators
//requires 3 components

var gpa = 48;

//if the gpa is over min 2.0 the student can graduate
/*if (gpa > 2.0){
    console.log("You can graduate");
}else{
    console.log("no graduation");
}*/

/*(gpa > 2.0) ? console.log("You can graduate") : console.log("gpa too low");*/

var age = 11;
var book;
//if the child is under 10 they get green eggs over 10 they get other book

/*if (age<10){
    book = "Green Eggs";
}else{
    book = "Other Book";
}
console.log(book);*/

book = (age <10) ? "green Eggs" : "Other Book";
console.log(book);