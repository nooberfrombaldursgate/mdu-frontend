// ========== GLOBAL VARIABLES ==========

const _baseUrl = "https://api.jsonbin.io/v3/b/614308859548541c29b30249";
const _headers = {
  "X-Master-Key": "$2b$10$oCNhreJmOuRa5fiTY7VKzeFveBU0VXXjd7VkIX1BGgO1dJwNj8fi2",
  "Content-Type": "application/json"
};

// ========== READ ==========

/**
 * Fetchs person data from jsonbin
 */
async function loadUsers() {
  showLoader(true);
  const url = _baseUrl + "/latest"; // make sure to get the latest version
  const response = await fetch(url, { headers: _headers });
  const data = await response.json();

  _users = data.record;  

  for (let user of _users) {
    console.log(user.name);
  }
  // for (const user of _users) {
  //   user.age = calculateAge(user.birthDate);
  // }
  appendUsers(_users);
  navigateTo("#/");
}

// ========== CREATE ==========

async function createUser() {
  // references to input fields
  navigateTo()
  showLoader(true);
  let nameInput = document.querySelector('#nameInput');
  let mailInput = document.querySelector('#mailInput');
  let birthDateInput = document.querySelector('#birthDateInput');
  let imgInput = document.querySelector('#imageInput');
  // dummy generated user id 
  const userId = Date.now();
  // declaring a new user object
  const newUser = {
    name: nameInput.value,
    email: mailInput.value,
    id: userId,
    age: calculateAge(birthDateInput.value),
    img: imgInput.value || 'img/arnold.jpg'
  };
  // pushing the new user object to the _users array
  _users.push(newUser);
  // append to dom

  // wait for update
  await updateJSONBIN(_users);
}

// ========== UPDATE ==========

// todo

// ========== DELETE ==========

// todo

// ========== Services ==========
/**
 * Updates the data source on jsonbin with a given users arrays
 * @param {Array} users 
 */
async function updateJSONBIN(users) {
  // put users array to jsonbin
  const response = await fetch(_baseUrl, {
    method: "PUT",
    headers: _headers,
    body: JSON.stringify(users)
  });
  // todo ...
}

 function appendUsers(users) {
  const usersContainer = document.getElementById('users-content');
  let htmlTemplate = '';
  for (let user of users) {
    htmlTemplate += `
    <section class="user-card">
        <img src="${user.img}" alt="user">
        <p>${user.name}</p>
        <p>${user.email}</p>
        <p>${user.age}</p>
        <p>${user.id}</p
    </section>
    `;
    usersContainer.innerHTML = htmlTemplate;
  }
}

function calculateAge(dateOfBirth) {
  let date = new Date(dateOfBirth);
  // calculate time difference from current date in time in ms
  let differenceInMiliseconds = Date.now() - date.getTime();
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

// ========== Loader ==========

function showLoader(show) {
  let loader = document.getElementById('loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}

function init() {
  showLoader(false);
  loadUsers();
}

init();