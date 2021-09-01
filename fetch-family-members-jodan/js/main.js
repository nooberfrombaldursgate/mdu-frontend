/*
global variable: _familyMembers
*/
let _familyMembers = [];

/*
Fetches json data from the file persons.json
*/
fetch('json/persons.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    _familyMembers = jsonData;
    appendPersons(_familyMembers);
  });

/*
Appends json data to the DOM
*/
function appendPersons(familyMembers) {
  let htmlTemplate = '';
  for (let familyMember of familyMembers) {
    htmlTemplate += `
    <article>
          <h3>${familyMember.name}</h3>
          <p class="heading-age">${familyMember.birthday} years old</p>
          <img src="${familyMember.img}" alt="">
          <blockquote cite="${familyMember.iconicMovieQuoteCitation}">
          ${familyMember.iconicMovieQuote} - ${familyMember.iconicMovieQuoteCitation}
          </blockquote>
    </article>
    `;
  }
  document.getElementById('persons').innerHTML = htmlTemplate;
}

// doesn't work - why?
function brokenAppendPersons(array) {
  for (let element of array) {
    document.getElementById('persons').innerHTML += `
    <article>
          <h3>${element.name}</h3>
          <p class="heading-age">${element.birthday} years old</p>
          <img src="${element.img}" alt="">
          <blockquote cite="${element.iconicMovieQuoteCitation}">
          ${element.iconicMovieQuote} - ${element.iconicMovieQuoteCitation}
          </blockquote>
    </article>
    `;
  }
}
