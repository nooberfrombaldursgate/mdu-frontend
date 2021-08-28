"use strict";

// declaring teacher objects

// Birgitte
let teacher1 = {
  name: "Birgitte Kirk Iversen",
  initials: "bki",
  mail: "bki@baaa.dk",
  phone: "+4572286316",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  img: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg",
};

// Jan
let teacher2 = {
  name: "Jan Skovgård Jensen",
  initials: "jsj",
  mail: "jsj@baaa.dk",
  phone: "+4572286330",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  img: "https://www.baaa.dk/media/5qhfbypg/jan-skovg%C3%A5rd-jensen.jpg",
};

// Rasmus
let teacher3 = {
  name: "Rasmus Cederdorff",
  initials: "race",
  mail: "race@baaa.dk",
  phone: "+4572286318",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg",
};

// Lykke
let teacher4 = {
  name: "Lykke Dahlén",
  initials: "ld",
  mail: "lyda@baaa.dk",
  phone: "+4572286329",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  img: "https://www.baaa.dk/media/vk5evkad/lykke-dahlen.jpg",
};

// Dorte
let teacher5 = {
  name: "Dorte Hedevang",
  initials: "dh",
  mail: "dohe@baaa.dk",
  phone: "+4572286024",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Student and Career Counsellor",
  department: "Student Services Centre",
  img: "https://www.baaa.dk/media/ufsl1yg2/dorte-hedevang.jpg",
};

// log objects to the developer console
console.log(teacher1);

// Appending objects to the DOM

// Birgitte
document.querySelector("#grid-teachers").innerHTML += /*html*/ `
<article class="card-teacher">
  <img class="image-teacher" src='${teacher1.img}'>
  <h3>${teacher1.name} (${teacher1.initials})</h3>
  ${teacher1.position}<br>
  ${teacher1.department}<br>
  ${teacher1.address}<br>
  <a href='mailto:${teacher1.mail}'>${teacher1.mail}</a><br>
  <a href="tel:${teacher1.phone}">${teacher1.phone}</a>
</article>`;

// Jan
document.querySelector("#grid-teachers").innerHTML += /*html*/ `
<article class="card-teacher">
  <img class="image-teacher" src='${teacher2.img}'>
  <h3>${teacher2.name} (${teacher2.initials})</h3>
  ${teacher2.position}<br>
  ${teacher2.department}<br>
  ${teacher2.address}<br>
  <a href='mailto:${teacher2.mail}'>${teacher2.mail}</a><br>
  <a href="tel:${teacher2.phone}">${teacher2.phone}</a>
</article>`;

// Rasmus
document.querySelector("#grid-teachers").innerHTML += /*html*/ `
<article class="card-teacher">
  <img class="image-teacher" src='${teacher3.img}'>
  <h3>${teacher3.name} (${teacher3.initials})</h3>
  ${teacher3.position}<br>
  ${teacher3.department}<br>
  ${teacher3.address}<br>
  <a href='mailto:${teacher3.mail}'>${teacher3.mail}</a><br>
  <a href="tel:${teacher3.phone}">${teacher3.phone}</a>
</article>`;

// Lykke
document.querySelector("#grid-teachers").innerHTML += /*html*/ `
<article class="card-teacher">
  <img class="image-teacher" src='${teacher4.img}'>
  <h3>${teacher4.name} (${teacher4.initials})</h3>
  ${teacher4.position}<br>
  ${teacher4.department}<br>
  ${teacher4.address}<br>
  <a href='mailto:${teacher4.mail}'>${teacher4.mail}</a><br>
  <a href="tel:${teacher4.phone}">${teacher4.phone}</a>
</article>`;

// Dorthe
document.querySelector("#grid-teachers").innerHTML += /*html*/ `
<article class="card-teacher">
  <img class="image-teacher" src='${teacher5.img}'>
  <h3>${teacher5.name} (${teacher5.initials})</h3>
  ${teacher5.position}<br>
  ${teacher5.department}<br>
  ${teacher5.address}<br>
  <a href='mailto:${teacher5.mail}'>${teacher5.mail}</a><br>
  <a href="tel:${teacher5.phone}">${teacher5.phone}</a>
</article>`;