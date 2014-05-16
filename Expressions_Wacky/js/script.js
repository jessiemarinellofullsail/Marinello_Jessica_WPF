//Jessie Marinello
//Expressions_Wacky
//May 2015

//Unfortunately, George has an irritable bowel. He often finds himself in the "study" and while he sits upon his porcelain throne, he can't help but wonder how many rolls of toilet paper he uses a week, and how much it costs him.

var sheetsPerRoll = prompt("Enter in number of sheets to a roll");
var sheetsUsedPerVisit = prompt("Enter in number of sheets used per visit");
var visitsPerDay = prompt("Enter in number of visits per day");
const numDays = 7; //number of days in a week, remains constant
var sheetsPerDay = sheetsUsedPerVisit * visitsPerDay;
var sheetsPerWeek = sheetsPerDay * numDays;
var rollsPerWeek = sheetsPerWeek /= sheetsPerRoll;
var costPerRoll = prompt("Enter in the cost of one roll");
var costPerWeek = rollsPerWeek * costPerRoll;
alert("Poor George uses " + rollsPerWeek + " rolls per week, at a total of " + costPerWeek + " dollars per week, assuming George has not had anything spicy to eat.");
