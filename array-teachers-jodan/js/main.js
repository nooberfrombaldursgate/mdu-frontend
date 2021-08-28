'use strict';

// appending objects to the dom

function appendTeachers(teachers) {
  for (const teacher of teachers) {
    document.querySelector('#grid-teachers').innerHTML += /*html*/ `
    <article class="card-teacher">
      <img class="image-teacher" src='${teacher.img}'>
      <h3>${teacher.name} (${teacher.initials})</h3>
      ${teacher.position}<br>
      ${teacher.department}<br>
      ${teacher.address}<br>
      <a href='mailto:${teacher.mail}'>${teacher.mail}</a><br>
      <a href="tel:${teacher.phone}">${teacher.phone}</a>
    </article>`;
  }
}

function filterInTeachers(teachers, teacherProperty, propertyValue) {
  let filteredTeachers = [];
  for (let teacher of teachers) {
    if (teacher[teacherProperty] === propertyValue) {
      filteredTeachers.push(teacher);
    }
  }
  return filteredTeachers;
}

function init() {
  // array
  let teachers = [
    {
      name: 'Birgitte Kirk Iversen',
      initials: 'bki',
      mail: 'bki@baaa.dk',
      phone: '+4572286316',
      address: 'Ringvej Syd 104, 8260 Viby J',
      position: 'Senior Lecturer',
      department: 'Programmes within Digital Communication and Multimedia',
      img: 'https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg',
    },
    {
      name: 'Jan Skovgård Jensen',
      initials: 'jsj',
      mail: 'jsj@baaa.dk',
      phone: '+4572286330',
      address: 'Ringvej Syd 104, 8260 Viby J',
      position: 'Lecturer',
      department: 'Programmes within Digital Communication and Multimedia',
      img: 'https://www.baaa.dk/media/5qhfbypg/jan-skovg%C3%A5rd-jensen.jpg',
    },
    {
      name: 'Rasmus Cederdorff',
      initials: 'race',
      mail: 'race@baaa.dk',
      phone: '+4572286318',
      address: 'Ringvej Syd 104, 8260 Viby J',
      position: 'Lecturer',
      department: 'Programmes within Digital Communication and Multimedia',
      img: 'https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg',
    },
    {
      name: 'Lykke Dahlén',
      initials: 'ld',
      mail: 'lyda@baaa.dk',
      phone: '+4572286329',
      address: 'Ringvej Syd 104, 8260 Viby J',
      position: 'Lecturer',
      department: 'Programmes within Digital Communication and Multimedia',
      img: 'https://www.baaa.dk/media/vk5evkad/lykke-dahlen.jpg',
    },
    {
      name: 'Dorte Hedevang',
      initials: 'dh',
      mail: 'dohe@baaa.dk',
      phone: '+4572286024',
      address: 'Ringvej Syd 104, 8260 Viby J',
      position: 'Student and Career Counsellor',
      department: 'Student Services Centre',
      img: 'https://www.baaa.dk/media/ufsl1yg2/dorte-hedevang.jpg',
    },
  ];

  let filteredTeachers = filterInTeachers(teachers, 'position', 'Senior Lecturer');
  appendTeachers(filteredTeachers);
}

init();