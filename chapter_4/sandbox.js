// // function declaration
// function greet() {
//     console.log('hello there');
// }

// // invoke function
// greet();

// // function expression
// const speak = function () {
//     console.log('good day!');
// };

// // invoke function expression
// speak();


// Hoisting
// hoisting works with functiondeclarations but not with function expressions


//************  WORKS */
// invoke function before function definition
// greet();

// // function declaration
// function greet() {
//     console.log('hello there');
// }


//************  DOES NOT WORK */ // Uncaught ReferenceError: Cannot access 'speak' before initialization
// invoke function expression function expression
// speak();

// // function expression
// const speak = function () {
//     console.log('good day!');
// };


// from now on we will mainly use function expressions to enforce good coding practice
// arguments & parameters
// const speak = function (name = 'tee', time = 'night') {
//     console.log(`good ${time} ${name}`);
// };

// // invoke function expression
// speak();
// speak('ano', 'morning');
// speak('alexa');


// returning values

// const speak = function (name = 'tee', time = 'night') {
//     console.log(`good ${time} ${name}`);
// };

// const calcArea = function (radius) {
//     return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);


// converting reguar function into an arrow function

// regular function
// const calcArea = function (radius) {
//     return 3.14 * radius ** 2;
// };

// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius ** 2;
// };

// We only need parethesis around the parameter if we have zero or more than one parameter.
// We can shorten above to
// const calcArea = radius => {
//     return 3.14 * radius ** 2;
// };

// above be simplified further to
// const calcArea = radius => 3.14 * radius ** 2

// const area = calcArea(5);
// console.log('area is:', area);


// practice arrow functions
// const greet = function () {
//     return 'hello, world!';
// };

// const greet = () => {
//     return 'hello, world!';
// };


// const greet = () => 'hello, world!';

// const greeting = greet();
// console.log(greeting);

// example 2
// const bill = function (products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }



// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 15, 30], 0.2));


// const name = 'ati';

// // functions
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);


// General principles of callbacks
// const myfunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// // Invoke myFunc
// myfunc(function (value) {
//     // do somethng
//     console.log(value);
// });

// // OR 

// // Invoke myFunc
// myfunc((value) => {
//     // do somethng
//     console.log(value);
// });

// // OR

// // Invoke myFunc
// myfunc(value => {
//     // do somethng
//     console.log(value);
// });

// callbacks & foreach


// let people = ['ed', 'tee', 'ano', 'ati', 'alexa'];

// people.forEach(function (person) {
//     console.log(person);
// });


// people.forEach(person => {
//     console.log(person);
// });


// people.forEach((person, index) => {
//     console.log(index, person);
// });

// // We can define our own callback function and pass it to the forEach method

// // Define callback function logPerson

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// // Use logPerson callback
// people.forEach(logPerson);


// get a reference to the 'ul' 
const ul = document.querySelector('.people');

const people = ['ed', 'tee', 'ano', 'ati', 'alexa'];

let html = ``;


// people.forEach(function (person) {
//     // create html template
//     html += `<li style="color: purple">${person}</li>`
// });

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`
});


console.log(html);
ul.innerHTML = html;


