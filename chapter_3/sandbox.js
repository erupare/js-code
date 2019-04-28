// Flow Control

// for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop :', i);
// }

// console.log('loop finished');

// const names = ['ed', 'ano', 'ati'];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }


// while loops

// let i = 0;

// while (i < 5) {
//     console.log('in loop :', i);
//     i++;
// }

// const names = ['ed', 'ano', 'ati'];

// let i = 0;

// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }


// do while loops

// let i = 5;

// do {
//     console.log('val of i is: ', i);
//     i++;
// } while (i < 5);


// if statements
// const age = 25;

// if (age > 20) {
//     console.log('you are over 20 years old');
// }


// const ninjas = ['ed', 'ano', 'ati', 'tee'];

// if (ninjas.length > 3) {
//     console.log("that's a lot of ninjas");
// }

// const password = 'p@ssword!';

// if (password.length >= 8) {
//     console.log('that password is long enough!');
// }


// // else if statement
// const password = 'p@ssword1234';

// if (password.length >= 12) {
//     console.log('that password is mighty strong!');
// } else if (password.length >= 8) {
//     console.log('that password is long enough!');
// } else {
//     console.log('password is not long enough');
// }



// // logical operators - OR || and AND &&
// const password = 'p@ssw12';

// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is mighty strong!');
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log('that password is strong enough!');
// } else {
//     console.log('password is not strong enough');
// }

// // logical NOT (!)

// let user = false;

// // only want this block to run if user is false
// if (!user) {
//     console.log('you must be logged in to continue');
// }


// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {

//     if (scores[i] === 0) {
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if (scores[i] === 100) {
//         console.log('congrats, you got the top score!');
//         break;
//     }

// }


// switch statements
// const grade = 'D';

// switch (grade) {
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got a B!');
//         break;
//     case 'C':
//         console.log('you got a C!');
//         break;
//     case 'D':
//         console.log('you got a D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     case 'F':
//         console.log('you got an F!');
//         break;
//     default:
//         console.log('not a valid grade');
// }



// variables & block scope

// let age = 30;

// if (true) {
//     // let age = 40;
//     let name = 'ati';
//     console.log('inside 1st code block: ', age, name);

//     if (true) {
//         console.log('inside 2nd code block: ', age, name);
//     }
// }

// console.log('outside code block: ', age, name);

// same rules apply to const
const age = 30;

if (true) {
    const age = 40;
    const name = 'ati';
    console.log('inside 1st code block: ', age, name);

    if (true) {
        const age = 50;
        console.log('inside 2nd code block: ', age, name);

        // var ignores block scope
        var test = 'hello!!';
    }
}

console.log('outside code block: ', age, name);
console.log('outside code block: ', age, name, test);