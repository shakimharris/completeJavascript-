//function expressions
var whatdoyouDo = function (job, firstName){
  switch(job){
    case 'teacher':
    return firstName + 'teaches how to code';
    case 'driver':
    return firstName + 'drives a Lyft';
    case 'designer':
    return firstName + 'creates web designs';

    default:
    return firstName + 'does other things';
  }
}
console.log(whatdoyouDo('teacher', 'John'));
console.log(whatdoyouDo('designer', 'Kristina'));
console.log(whatdoyouDo('driver', 'Umar'));
