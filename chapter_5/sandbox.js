// object literals - Part 1

// let user = {
//     name: 'crystal',
//     age: '30',
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);

// // access properties with dot notation
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// // we can alos access properties with square bracket notation
// console.log(user['email']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// // square bracket notation can be useful when using variables
// const key = 'location';

// console.log(user[key]);

// console.log(typeof user);


// object literals - Part 2
// a method is a function defined inside an object - in thiscase login method inside user object
// let user = {
//     name: 'crystal',
//     age: '30',
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: () => {
//         console.log('the user logged in');
//     },
//     logout: function () {
//         console.log('the user logged out');
//     }
// };

// user.login();
// user.logout();

// object literals - Part 3
// let user = {
//     name: 'crystal',
//     age: '30',
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: () => {
//         console.log('the user logged in');
//     },
//     logout: function () {
//         console.log('the user logged out');
//     },
//     logBlogs: function () {
//         // console.log(this); // refers to user object
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();
// in js this refers to context of execution.
// console.log(this); // logs the window object

// object literals - Part 4
// shorthand version of writing regular functions inside an object and we will use that going forward.

// let user = {
//     name: 'crystal',
//     age: '30',
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('the user logged out');
//     },
//     logBlogs() {
//         // console.log(this); // refers to user object
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();

// object literals - Part 5
// storing objects in blogs array i.e. an array of objects

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

// console.log(blogs);

let user = {
    name: 'crystal',
    age: '30',
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        // console.log(this); // refers to user object
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();


// Math Object - Part 1
/*
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
*/

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));


// random numbers

const random = Math.random();

// random number between 0 and 1
console.log(random);

// random number between 0 and 100
console.log(Math.round(random * 100));


// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);

