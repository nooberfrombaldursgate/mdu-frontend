import { hello, User } from './user.js';
// import User from './user.js';


export function init() {
    hello();
    let u1 = new User("John Doe", "1990, 01, 01", "/ijs872j.jpg")
    let u2 = new User("Jane Doe", "1980, 01, 01", "/ks828dj.jpg")
    u1.log();
    u2.log();
}

init();
