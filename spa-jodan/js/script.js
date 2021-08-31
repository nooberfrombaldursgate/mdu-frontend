'use strict'; // to enable strict mode and modern JavaScript functionality

//global var
let _allFamilyMembers = [];
let _currentFamilyMember = null;

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

function createFamilyMembers() {
  // create family member objects
  let familyMember1 = new FamilyMember(
    'Arnold Schwarzenegger',
    new Date('1947, 06, 30'),
    '"If it bleeds, we can kill it."',
    'Predator',
    'img/arnold.jpg'
  );
  let familyMember2 = new FamilyMember(
    'Steven Seagal',
    new Date('1952, 04, 10'),
    '"Nobody beats me in my kitchen."',
    'Under Siege 2',
    'img/steven.jpg'
  );
  let familyMember3 = new FamilyMember(
    'Sylvester Stallone',
    new Date('1946, 06, 06'),
    '"They drew first blood."',
    'Rambo',
    'img/sylvester.jpg'
  );
  let familyMember4 = new FamilyMember(
    'Jean-Claude Van Damme',
    new Date('1960, 10, 18'),
    '"Hunting season… Is over."',
    'Hard Target',
    'img/jean-claude.jpg'
  );
  let familyMember5 = new FamilyMember(
    'Bruce Willis',
    new Date('1955, 03, 19'),
    '""Yippie-kai-yay, motherf*****r!""',
    'Die Hard',
    'img/bruce.jpg'
  );
  let familyMember6 = new FamilyMember(
    'Chuck Norris',
    new Date('1940, 03, 10'),
    '"When I want your opinion, I’ll beat it out of you."',
    'Code of Silence',
    'img/chuck.jpg'
  );

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

function filterInFamilyMembers() {
  let searchFilter = document.getElementById('filter-in-family-members');
  searchFilter.addEventListener('keyup', function () {
    appendFamilyMembers();
  });
}

function createFamilyMember() {
  document.getElementById('button-create-family-member').addEventListener('click', function () {
    let name = document.getElementById('input-create-name').value;
    let birthday = new Date(document.getElementById('input-create-birthday').value);
    let iconicMovieQuote = document.getElementById('input-create-iconic-movie-quote').value;
    let iconicMovieQuoteCitation = document.getElementById('input-create-iconic-movie-quote-citation').value;
    // short circuit evaluation for headshot image empty state
    let headshotImg = document.getElementById('input-create-headshot-img').value || 'img/john-doe-720w.png';
    _allFamilyMembers.push(
      new FamilyMember(name, birthday, iconicMovieQuote, iconicMovieQuoteCitation, headshotImg)
    );
    appendFamilyMembers();
  });
}

function appendFamilyMembers() {
  // overview hook
  let contentSection = document.querySelector('#content');
  contentSection.innerHTML = '';
  // search filter hook
  let searchFilterValue = document.getElementById('filter-in-family-members').value.toLowerCase();
  // edit hook
  let editSelectElement = document.getElementById('select-edit-family-members');
  removeSelectOptions(editSelectElement);
  // edit hook
  let deleteSelectElement = document.getElementById('select-delete-family-members');
  removeSelectOptions(deleteSelectElement);
  // make shallow copy
  let shallowCopy = Array.from(_allFamilyMembers);
  // sort shallow copy
  sortFamilyMembersByName(shallowCopy);
  for (let familyMember of shallowCopy) {
    if (familyMember.name.toLowerCase().includes(searchFilterValue)) {
      // overview append
      contentSection.innerHTML += /*html*/ `
      <article>
          <h3>${familyMember.name}</h3>
          <p class="heading-age">${familyMember.age} years old</p>
          <img src="${familyMember.headshotImg}" alt="">
          <blockquote cite="${familyMember.iconicMovieQuoteCitation}">
          ${familyMember.iconicMovieQuote} - ${familyMember.iconicMovieQuoteCitation}
          </blockquote>
      </article>
      `;
      // edit append
      editSelectElement.innerHTML += /*html*/ `
      <option>${familyMember.name}</option>
      `;
      // delete append
      deleteSelectElement.innerHTML += /*html*/ `
      <option>${familyMember.name}</option>
      `;
    }
  }
  // update data list
  appendFamilyMembersDatalist();
}

// remove options from select element
function removeSelectOptions(selectElement) {
  let i,
    L = selectElement.options.length - 1;
  for (i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}

function sortFamilyMembersByName(array) {
  array.sort(function (a, b) {
    let propertyA = a.name;
    let propertyB = b.name;
    // this anonymous function is the compareFunction
    if (propertyA < propertyB) {
      // now the entire values of a & b are compared
      return -1;
    }
    if (propertyA > propertyB) {
      return 1;
    }
    // a must be equal to b, no change to index
    return 0;
  });
}

function appendFamilyMembersDatalist() {
  let familyMembersDatalist = document.getElementById('list-family-members');
  familyMembersDatalist.innerHTML = '';
  for (let familyMember of _allFamilyMembers) {
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

// select eventlisteners (edit/delete)
function onChangeSelectedFamilyMember() {
  let selectElements = document.querySelectorAll('.select-family-member');
  for (let selectElement of selectElements) {
    selectElement.addEventListener('change', function () {
      // set current family member to select element value
      let selectElementValue = this.value;
      if (selectElementValue !== null || '') {
        setCurrentFamilyMember(selectElementValue);
        updateInputElements();
      }
    });
  }
}

// reset select selections
function resetFamilyMemberSelectSelection() {
  let selectElements = document.querySelectorAll('.select-family-member');
  for (let selectElement of selectElements) {
    selectElement.selectedIndex = 0;
    //simulate onChange event
    let event = new Event('change');
    selectElement.dispatchEvent(event);
  }
}

// set _currentFamilyMember, @param = nameIdentifier (string)
function setCurrentFamilyMember(nameIdentifier) {
  if (_allFamilyMembers.length === 0) {
    _currentFamilyMember = null;
    return;
  }
  let index = _allFamilyMembers.findIndex(
    (familyMember) => familyMember.name.toLowerCase() == nameIdentifier.toLocaleLowerCase()
  );
  if (index > -1) {
    _currentFamilyMember = _allFamilyMembers[index];
  }
}

function updateInputElements() {
  let editInputElements = document.querySelectorAll(`.edit-family-member-form > .input-family-member`);
  let deleteInputElements = document.querySelectorAll(`.delete-family-member-form > .input-family-member`);
  if (_currentFamilyMember !== null) {
    editInputElements[0].value = _currentFamilyMember.name;
    deleteInputElements[0].value = _currentFamilyMember.name;
    editInputElements[1].value = _currentFamilyMember.birthday.toJSON().slice(0, 10);
    deleteInputElements[1].value = _currentFamilyMember.birthday.toJSON().slice(0, 10);
    editInputElements[2].value = _currentFamilyMember.iconicMovieQuote;
    deleteInputElements[2].value = _currentFamilyMember.iconicMovieQuote;
    editInputElements[3].value = _currentFamilyMember.iconicMovieQuoteCitation;
    deleteInputElements[3].value = _currentFamilyMember.iconicMovieQuoteCitation;
    editInputElements[4].value = _currentFamilyMember.headshotImg;
    deleteInputElements[4].value = _currentFamilyMember.headshotImg;
    return;
  }
  for (let inputElement of editInputElements) {
    inputElement.value = '';
  }
  for (let inputElement of deleteInputElements) {
    inputElement.value = '';
  }
}

function editCurrentFamilyMember() {
  let editInputElements = document.querySelectorAll(`.edit-family-member-form > .input-family-member`);
  if (_currentFamilyMember !== null) {
    _currentFamilyMember.name = editInputElements[0].value;
    _currentFamilyMember.birthday = new Date(editInputElements[1].value);
    // calc new age
    _currentFamilyMember.age = calculatePersonAge(_currentFamilyMember.birthday);
    _currentFamilyMember.iconicMovieQuote = editInputElements[2].value;
    _currentFamilyMember.iconicMovieQuoteCitation = editInputElements[3].value;
    _currentFamilyMember.headshotImg = editInputElements[4].value;
    return;
  }
  for (let inputElement of editInputElements) {
    inputElement.value = '';
  }
  for (let inputElement of deleteInputElements) {
    inputElement.value = '';
  }
}

function updateEditInputElements(name, birthday, iconicMovieQuote, iconicMovieQuoteCitation, headShotImg) {
  let editInputElements = document.querySelectorAll(`.edit-family-member-form > .input-family-member`);
  if (_currentFamilyMember !== null) {
    editInputElements[0].value = _currentFamilyMember.name;
    editInputElements[1].value = _currentFamilyMember.birthday.toJSON().slice(0, 10);
    editInputElements[2].value = _currentFamilyMember.iconicMovieQuote;
    editInputElements[3].value = _currentFamilyMember.iconicMovieQuoteCitation;
    editInputElements[4].value = _currentFamilyMember.headshotImg;
    return;
  }
  for (let inputElement of editInputElements) {
    inputElement.value = '';
  }
  for (let inputElement of deleteInputElements) {
    inputElement.value = '';
  }
}

// Remove element metoder til Arrays
Array.prototype.removeElement = function (element) {
  const index = this.indexOf(element);
  if (index > -1) {
    this.splice(index, 1);
  }
};

function onClickButtonEdit() {
  let buttonEdit = document.getElementById('button-edit-family-member');
  buttonEdit.addEventListener('click', function () {
    editCurrentFamilyMember();
    appendFamilyMembers();
    resetFamilyMemberSelectSelection();
  });
}

function onClickButtonDelete() {
  let buttonDelete = document.getElementById('button-delete-family-member');
  buttonDelete.addEventListener('click', function () {
    if (_currentFamilyMember !== null) {
      _allFamilyMembers.removeElement(_currentFamilyMember);
      appendFamilyMembers();
      resetFamilyMemberSelectSelection();
    }
  });
}

// SPA

function changePageOnHashChange() {
  window.addEventListener('hashchange', function () {
    resetFamilyMemberSelectSelection();
    changePage();
  });
}

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll('.page');
  for (let page of pages) {
    page.style.display = 'none';
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = 'block';
  setActiveTab(pageId);
}

// sets active navlinks menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll('.nav-links a');
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute('href')) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  }
}

// navigate to a new view/page by changing href
function navigateTo(pageId) {
  location.href = `#${pageId}`;
}

// set default page or given page by the hash url
// function is called 'onhashchange'
function changePage() {
  let page = 'home';
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

function init() {
  //spa
  hideAllPages();
  changePageOnHashChange();
  changePage(); // called by default when the app is loaded for the first time

  // sidebar
  let sidebar = document.querySelector('.sidebar');
  let sidebarBtn = document.querySelector('.sidebarBtn');
  sidebarBtn.onclick = function () {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
      sidebarBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
    } else sidebarBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
  };

  // family members
  _allFamilyMembers = createFamilyMembers();
  _currentFamilyMember = _allFamilyMembers[0];
  appendFamilyMembers();
  filterInFamilyMembers();
  createFamilyMember();
  onChangeSelectedFamilyMember();
  onClickButtonEdit();
  onClickButtonDelete();
  updateInputElements();
}

init();
