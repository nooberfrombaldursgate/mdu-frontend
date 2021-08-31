'use strict'; // to enable strict mode and modern JavaScript functionality

let allFamilyMembers = [];

// calculate family member age from date (input = JavaScript Date Object)
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
  if (Number.isNaN(age)) {
    age = 0;
  }
  return age;
}

function createFamilyMembers() {
  // create family member objects
  let familyMember1 = {
    name: 'Arnold Schwarzenegger',
    age: calculatePersonAge(new Date('1947, 06, 30')),
    iconicMovieQuote: '"If it bleeds, we can kill it."',
    iconicMovieQuoteCitation: 'Predator',
    headshotImg: 'img/arnold.jpg',
  };
  let familyMember2 = {
    name: 'Steven Seagal',
    age: calculatePersonAge(new Date('1952, 04, 10')),
    iconicMovieQuote: '"Nobody Beats Me In The Kitchen."',
    iconicMovieQuoteCitation: 'Under Siege 2',
    headshotImg: 'img/steven.jpg',
  };
  let familyMember3 = {
    name: 'Sylvester Stallone',
    age: calculatePersonAge(new Date('1946, 06, 06')),
    iconicMovieQuote: '"They drew first blood."',
    iconicMovieQuoteCitation: 'Rambo',
    headshotImg: 'img/sylvester.jpg',
  };
  let familyMember4 = {
    name: 'Jean-Claude Van Damme',
    age: calculatePersonAge(new Date('1960, 10, 18')),
    iconicMovieQuote: '"Hunting season… Is over."',
    iconicMovieQuoteCitation: 'Hard Target',
    headshotImg: 'img/jean-claude.jpg',
  };
  let familyMember5 = {
    name: 'Bruce Willis',
    age: calculatePersonAge(new Date('1955, 03, 19')),
    iconicMovieQuote: '""Yippie-kai-yay, motherf*****r!""',
    iconicMovieQuoteCitation: 'Die Hard',
    headshotImg: 'img/bruce.jpg',
  };
  let familyMember6 = {
    name: 'Chuck Norris',
    age: calculatePersonAge(new Date('1940, 03, 10')),
    iconicMovieQuote: '"When I want your opinion, I’ll beat it out of you."',
    iconicMovieQuoteCitation: 'Code of Silence',
    headshotImg: 'img/chuck.jpg',
  };

  // push all objects to list
  let familyMembers = [];
  familyMembers.push(familyMember1);
  familyMembers.push(familyMember2);
  familyMembers.push(familyMember3);
  familyMembers.push(familyMember4);
  familyMembers.push(familyMember5);
  familyMembers.push(familyMember6);

  return familyMembers;
}

function addFilterEventListener() {
  let searchFilter = document.getElementById('filter-in-family-members');
  searchFilter.addEventListener('keyup', appendFamilyMembers);
}

function addCreateFamilyMemberEventListener() {
  document.getElementById('button-create-family-member').addEventListener('click', function() {
    let name = document.getElementById('input-name').value;
    let birthday = new Date(document.getElementById('input-birthday').value);
    let iconicMovieQuote = document.getElementById('input-iconic-movie-quote').value;
    let iconicMovieQuoteCitation = document.getElementById('input-iconic-movie-quote-citation').value;
    // short circuit evaluation for headshot image empty state
    let headshotImg = document.getElementById('input-headshot-img').value || 'img/john-doe-720w.png';
    allFamilyMembers.push(new FamilyMember(name, birthday, iconicMovieQuote, iconicMovieQuoteCitation, headshotImg));
    appendFamilyMembers();
  });
}

class FamilyMember {
  constructor(name, birthday, iconicMovieQuote, iconicMovieQuoteCitation, headshotImg) {
    this.name = name || 'John Doe';
    this.birthday = birthday;
    this.age = calculatePersonAge(birthday);
    this.iconicMovieQuote = iconicMovieQuote || '"Frankly, my dear, I don\'t give a damn."';
    this.iconicMovieQuoteCitation = iconicMovieQuoteCitation || 'Gone with the Wind';
    this.headshotImg = headshotImg;
  }
}

function appendFamilyMembers() {
  let contentSection = document.querySelector('#content');
  contentSection.innerHTML = "";
  let searchFilterValue = document.getElementById('filter-in-family-members').value.toLowerCase();
  for (let familyMember of allFamilyMembers) {
    if (familyMember.name.toLowerCase().includes(searchFilterValue)) {
      contentSection.innerHTML += /*html*/ `
      <article>
          <h3>${familyMember.name}</h3>
          <p>${familyMember.age} years old</p>
          <img src="${familyMember.headshotImg}" alt="">
          <blockquote cite="${familyMember.iconicMovieQuoteCitation}">
          ${familyMember.iconicMovieQuote} - ${familyMember.iconicMovieQuoteCitation}
          </blockquote>
      </article>
      `;
    }
  }
}

function appendFamilyMembersDatalist() {
  let familyMembersDatalist = document.getElementById('list-family-members');
  familyMembersDatalist.innerHTML = "";
  for (let familyMember of allFamilyMembers) {
    familyMembersDatalist.insertAdjacentHTML('beforeend', `<option>${familyMember.name}</option>`);
  }
}

function filterInFamilyMembersOlderThan(familyMembers, ageTreshold) {
  let filteredFamilyMembers = [];
  for (let familyMember of familyMembers) {
    if (familyMember.age > ageTreshold) {
      filteredFamilyMembers.push(familyMember);
    }
  }
  return filteredFamilyMembers;
}

function init() {
  allFamilyMembers = createFamilyMembers();
  appendFamilyMembersDatalist();
  appendFamilyMembers();
  addFilterEventListener();
  addCreateFamilyMemberEventListener();
  // const filteredFamilyMembers = filterInFamilyMembersOlderThan(familyMembers, 65);
  // console.log(filteredFamilyMembers);
}

init();
