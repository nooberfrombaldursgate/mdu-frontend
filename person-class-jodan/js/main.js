"use strict"; // to enable strict mode and modern JavaScript functionality

class Person {
  constructor(name, mail, birthDate, img) {
    this.name = name;
    this.mail = mail;
    this.birthDate = birthDate;
    this.img = img;
  }
  log() {
    for (let prop in this) {
      console.log(`${prop} : ${this[prop]}`);
    }
  }
  getAge() {
    let dateOfBirth = new Date(this.birthDate);
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
  getHtmlTemplate() {
    let htmlTemplateString = `
    <p>${this.name}</p>
    <p>${this.mail}</p>
    <p>${this.birthDate}</p>
    <p>${this.img}</p>
    <p>${this.getAge()}</p>
    `;
    return htmlTemplateString;
  }
}

function appendToDom(htmlTemplateString) {
  let content = document.getElementById('content');
  content.innerHTML += htmlTemplateString;
}

let p1 = new Person('John', 'john@example.com', '1980, 01, 01', 'img/john.jpg');
let p2 = new Person("Jane", "jane@example.com", '1975, 01, 01', "img/jane.jpg");

p1.log();
p2.log();

console.log(p1.getAge());
console.log(p2.getAge());

appendToDom(p1.getHtmlTemplate());
appendToDom(p2.getHtmlTemplate());