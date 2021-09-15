'use strict';

let _users = [];

// fetch users from: https://cederdorff.github.io/mdu-frontend/canvas-users/data/users.json
async function fetchUsers() {
  let response = await fetch('https://cederdorff.github.io/mdu-frontend/canvas-users/data/users.json');
  // console.log(response);
  let data = await response.json();
  //   console.log(data);
  _users = data;
  search();
}

function appendUsers(users) {
  let htmlTemplate = '';
  for (let user of users) {
    htmlTemplate += `
    <article class="user-card">
        <h3>${user.name}</h3>
        <img src="${user.avatarUrl}" alt="user">
        <p>${user.id}</p>
        <p>${user.email}</p>
        <p>${user.course}</p>
        <p>${user.enrollmentType}</p>
    </article>
      `;
  }
  document.getElementById('content').innerHTML = htmlTemplate;
}

function search() {
  let searchQuery = document.getElementById('search-filter-in-users').value.toLowerCase();
  let results = _users.filter((user) => {
    let name = user.name.toLowerCase();
    return name.includes(searchQuery);
  });
  let filteredResults = filterSearchResults(results);
  let sortedResults = sortSearchResults(filteredResults);
  appendUsers(sortedResults);
}

function filterSearchResults(users) {
  let filterInStudents = document.getElementById('checkbox-filter-in-students');
  let filterInTeachers = document.getElementById('checkbox-filter-in-teachers');
  let filteredResults = users;
  if (!filterInStudents.checked) {
    filteredResults = filteredResults.filter((user) => {
      let isStudent = user.enrollmentType === 'StudentEnrollment' ? true : false;
      return !isStudent;
    });
  }
  if (!filterInTeachers.checked) {
    filteredResults = filteredResults.filter((user) => {
      let isTeacher = user.enrollmentType === 'TeacherEnrollment' ? true : false;
      return !isTeacher;
    });
  }
  return filteredResults;
}

function sortSearchResults(users) {
  let sortByValue = document.getElementById('sort-by').value;
  let sortedArray = [];
  switch (sortByValue) {
    case 'Name':
      sortedArray = sortUsersByName(users);
      break;
    case 'Id':
      sortedArray = sortUsersById(users);
      break;
  }
  return sortedArray;
}

function sortUsersByName(users) {
  users.sort((user1, user2) => {
    return user1.name.localeCompare(user2.name);
  });
  return users;
}

function sortUsersById(users) {
  users.sort((user1, user2) => {
    return user1.id - user2.id;
  });
  return users;
}

function createUser() {
  let user = {
    name: 'Joachim Danielsen',
    avatarUrl: '',
    createdAt: Date.now().toString(),
    email: '',
    course: '',
    loginId: '',
    id: '',
    get shortName() {
      let abbreviatedName = this.name
        .split(' ')
        .map((string) => string.substring(0, 2))
        .join('')
        .toLowerCase();
      let shortName = `${this.name} (${abbreviatedName})`;
      return shortName;
    },
    set shortName(value) {
      this.shortName = value;
    },
    get sortableName() {
      let surname = this.name.split(" ").slice(-1).join("");
      let firstAndMiddleName = this.name.split(" ").slice(0, -1).join(" ");
      let sortableName = `${surname}, ${firstAndMiddleName}`;
      return sortableName;
    },
    set sortableName(value) {
      this.sortableName = value;
    }
  }
  return user;
}

let user1 = createUser();
console.log(user1.shortName);
console.log(user1.sortableName);

// function createShortName() {
//   let
// }

function init() {
  console.log(
    'Joachim Danielsen'
      .split(' ')
      .map((string) => string.substring(0, 2))
      .join('')
      .toLowerCase()
  );
  fetchUsers();
}

init();
