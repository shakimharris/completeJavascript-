//Functions
function calculateAge(birthYear){
  return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageMary = calculateAge(1888);
console.log(ageJohn, ageMike, ageMary);

function yearsuntilRetirement (year, firstName){
  var age = calculateAge(year);
  var retirement = retirement - age;
  console.log(firstName + 'retires in' + retirement + 'years');
}
yearsuntilRetirement(1990, 'John');
