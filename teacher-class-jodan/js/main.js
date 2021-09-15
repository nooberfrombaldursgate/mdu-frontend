"use strict"; // to enable strict mode and modern JavaScript functionality

class Person {
  constructor(name, birthDate, img) {
    this.name = name;
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

class Teacher extends Person {
  constructor(name, birthDate, img, initials, department) {
    super(name, birthDate, img);
    this.initials = initials;
    this.department = department;
  }
  getMail() {
    return `${this.initials}@eaaa.dk`
  }
  sayHi() {
    window.alert(`Hi ${this.name}`);
  }
  appendPerson() {
    let content = document.getElementById('content');
    let htmlTemplateString = `
    <p>${this.name}</p>
    <p>${this.birthDate}</p>
    <p>${this.img}</p>
    <p>${this.initials}</p>
    <p>${this.department}</p>
    <p>${this.getAge()}</p>
    `;
    content.innerHTML += htmlTemplateString;
  }
}

let t1 = new Teacher("John Doe", "1990, 01, 01", "/ijs872j.jpg", "jod", "Graphic Design Teacher"); 

t1.log;
t1.sayHi();
t1.appendPerson();