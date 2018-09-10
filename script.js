//CODING CHALLENGE #1;

var johnWeight = 300;
var markWeight = 333;
var johnHeight = 5;
var markHeight = 6;

//completed step 1
//BMI = mass / height ^ 2 (height x height)

var bmiJohn = johnWeight / (johnHeight * johnHeight);
console.log(bmiJohn);

var bmiMark = markWeight / (markHeight * markHeight);
console.log(bmiMark);

//completed step 2
var highestBMI = bmiMark > bmiJohn;
console.log(highestBMI);
//completed step 3
console.log("Is Mark's BMI higher than John's?" + highestBMI);
//completed step 4 
