// // strings
// console.log('hello, world');

// let email = 'example@me.com';
// console.log(email);

// // string concatenation
// let firstName = 'Mickey';
// let lastName = 'Mouse'

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// // result = email.lastIndexOf('e');

// // Slice from start position to end position
// // result = email.slice(0, 7);

// // Substring from start position and offset by x amount
// result = email.substring(0, 7);

// console.log(result);

// template strings
// const title = 'Best reads of 2019';
// const author = 'Mickey';
// const likes = 30;

// // // concatenation way
// // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// // console.log(result);


// // tempalte string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(result);

// // creating html tempaltes
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);


// let ninjas = ['ed', 'ano', 'ati'];


// // array methods

// // let result = ninjas.join(',');

// // let result = ninjas.indexOf('ati');

// // let result = ninjas.concat('tee', 'rupar');

// // returns length of the new array
// let result = ninjas.push('niamh');
// console.log(ninjas);
// console.log(result);
// result = ninjas.pop();
// console.log(ninjas);

// console.log(result);


// Undefined
// let age;

// // Output: undefined NaN "the age is undefined"
// console.log(age, age + 3, `the age is ${age}`);



// // Null  is intentional whereas undefined is not
// let age = null;

// // Output: null 3 "the age is null"
// console.log(age, age + 3, `the age is ${age}`);


//  boolean

// methods can return boolean
// let email = 'ati@me.com';
// let names = ['ed', 'ano', 'ati'];

// returns true
// // let result = email.includes('@');
// let result = names.includes('ati');

// // returns false
// // let result = email.includes('!');


// console.log(result);

// compaison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age != 25);


// let name = 'ati';

// console.log(name == 'ati');
// console.log(name == 'Ati');
// console.log(name == 'Ed');


// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');


// type conversion
// let score = '100';

// // score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello'); // returns NaN
// let result = String(50); // returns a string
// let result = Boolean(100); // All positive and negative  return true
// let result = Boolean(0); // Number Zero returns false
// let result = Boolean('0'); // String Zero returns true
let result = Boolean(''); // Empty zero length string  returns false
console.log(result, typeof result);

