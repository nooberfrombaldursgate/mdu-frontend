// calculate person age from date (input = JavaScript Date Object)
function calculatePersonAge(dateOfBirth) {
  // calculate time difference from current date in time in ms
  let differenceInMiliseconds = Date.now() - dateOfBirth.getTime();
  // calculate time difference from current date in unix time
  let differenceInUnixTime = new Date(differenceInMiliseconds);
  // extract birth year
  let birthYear = differenceInUnixTime.getUTCFullYear();
  // calculate time difference from birthday and unix epoch in years
  let differenceInYears = birthYear - 1970;
  let age = Math.abs(differenceInYears);
  return age;
}

// family member without birthday property: success
const familyMember1 = {
  name: 'Arnold Schwarzenegger',
  age: calculatePersonAge(new Date('1947, 06, 30')),
  iconicMovieQuote: '"If it bleeds, we can kill it."',
  iconicMovieQuoteCitation: 'Predator',
  headshotImg: 'img/arnold.jpg',
};

familyMember1['testProp'] = 'testVal';

// family member with birthday property: error
const familyMemberTest1 = {
  name: 'Arnold Schwarzenegger',
  birthday: new Date('1947, 06, 30'),
  // age: calculatePersonAge(this.birthday), // Uncaught TypeError: can't access property "getTime", dateOfBirth is undefined
  iconicMovieQuote: '"If it bleeds, we can kill it."',
  iconicMovieQuoteCitation: 'Predator',
  headshotImg: 'img/arnold.jpg',
};

familyMemberTest1['age'] = calculatePersonAge(familyMemberTest1.birthday);
console.assert(familyMember1.age === familyMemberTest1.age); // success

// family member constructor
class FamilyMember {
  constructor(
    name,
    birthday,
    iconicMovieQuote,
    iconicMovieQuoteCitation,
    headshotImg
  ) {
    this.name = name;
    this.birthday = birthday;
    this.age = calculatePersonAge(birthday); // success: no TypeError
    this.iconicMovieQuote = iconicMovieQuote;
    this.iconicMovieQuoteCitation = iconicMovieQuoteCitation;
    this.headshotImg = headshotImg;
  }
}

const familyMemberTest2 = new FamilyMember(
  'Arnold Schwarzenegger',
  new Date('1947, 06, 30'),
  '"If it bleeds, we can kill it."',
  'Predator',
  'img/arnold.jpg'
);
console.assert(familyMember1.age === familyMemberTest2.age); // success

/* test end */
