export function hello() {
    console.log("Hello from user.js module");
}

export class User {
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