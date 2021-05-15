const whichSchool = function (age) {
  if (age < 13) {
  return 'Elementary School';
  } else if (age >= 13 && age <= 18) {
  return 'Secondary School';
  } else (age > 18 && age <= 100)
  return 'Lighthouse Labs';
  };
console.log('I am 46. Which School should I go to?');
console.log(whichSchool(46));
console.log('I am 10. Which school should I go to?');
console.log(whichSchool(10));
console.log('I am 17. Which school should I go to?');
console.log(whichSchool(17));
