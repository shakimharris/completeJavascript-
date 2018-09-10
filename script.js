//switch statement
/*var firstName = 'Shakim';
var job = 'instructor';
switch (job){
  case 'teacher':
  case 'instructor':
   console.log(firstName + 'teaches kids how to code.');
   break;
   case 'driver':
   console.log(firstName + 'drives kids in Uber');
   break;
   case 'designer':
   console.log(firstName + 'creates PSD designs');
   break;
   default:
   console.log(firstName + 'teaches kids nothing');

   switch(true) {
   case age < 13:
   console.log(firstName + 'is a teenager');
   break;
   case age >=20 && < 30:
   console.log(firstName + 'is a young man');
   break;
   default:
   console.log(firstName + 'is a man');
}
}
*/


var johnGame1 = 89;
var johnGame2 = 120;
var johnGame3 = 103;

var mikeTeam1 = 116;
var mikeTeam2 = 94;
var mikeTeam3 = 123;

var averageJohn = (johnGame1 + johnGame2 + johnGame3) / 3;
console.log(averageJohn);

var averageMike = (mikeTeam1 + mikeTeam2 + mikeTeam3) / 3;
console.log(averageMike);
//calculate the average score for each team john's 111, mike's 104

if (averageMike > averageJohn){
  console.log('Mike\'s team scores on average higher than John\'s team' + averageMike);
}
else if (averageJohn > averageMike){
  console.log('John\'s team scores on average higher than Mike\'s team' + averageJohn);
}
