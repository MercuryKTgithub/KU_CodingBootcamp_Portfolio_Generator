// Warm-up I

// https://nodejs.org/dist/latest-v12.x/docs/api/process.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var greetings = 'Hello Node!';
console.log(greetings);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
 
// var commandLineArgs = process.argv[1];
// console.log(commandLineArgs);

var profileDataArgs = process.argv.slice(2, process.argv.length); // same as var profileDataArgs = process.argv.slice(1);
// console.log(profileDataArgs);

// // the classic style
// const printProfileData = function (pfDataArgArr){
//    console.log(pfDataArgArr);
// }

// // the arrow function expression:
// const printProfileData = pfDataArgArr => {
//    console.log(pfDataArgArr);
// }
// printProfileData(profileDataArgs);

// // omit keyword function, omit {} and implicit return
// const addNums = (numOne, numTwo) => numOne + numTwo;
// const sum = addNums(9, 4); // sum would be 8
// console.log(sum)

// // Apply the arrow function in function expression and do a loop
// const printProfileData = profileDataArr => {
//    for (let i = 0; i < profileDataArr.length; i++) 
//    {
//      console.log(profileDataArr[i]);
//    }
//  }; //the semi-colon does not matter
// 
//  printProfileData(profileDataArgs); // make a call to the function "name"

// console.log('----------------------------------------');
// // Even make to loop simplier
// profileDataArgs.forEach((profileItem) => {
//    console.log(profileItem)
// });

// -- Given above :
// var profileDataArgs = process.argv.slice(1, process.argv.length);
console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
// Even make to loop simplier
profileDataArgs.forEach((i) => {
   console.log(i) // prints 2 lines
                  // Huong Tran
                  // Developer
});

// // function has only a single statement, the curly braces, {}, are unnecessary and the return statement is implied.
// const generatePage1 = () => 'Name: Jane, Github: janehub';
// console.log(generatePage1());

console.log('``````````````````````````````````````````````````````````');

// // Use backticks to enclose the variable insertion/interpolating
// const generatePage2 = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage2('Jane', 'janehub'));

// // User return and carriage-returns
// const generatePage = (userName, githubName) => {
//    return `
//      Name: ${userName}
//      GitHub: ${githubName}
//    `;
//  };

 const generatePage = require('./src/page_template'); // used in conjunction with generatePage(names, github)
 console.log(generatePage);

// (A)
// const names = profileDataArgs[0];
// const github = profileDataArgs[1];

//  console.log(generatePage('Jane', 'janehub'));
//  console.log(generatePage2('Jane', 'janehub'));

//  console.log(generatePage(names, github));

//  Assignment destructuring : assigns elements of an array to variable names in a single expression
// (A) can be replaced by 

// (B) assignment destructuring
// // const [names, github] = profileDataArgs;
// // 
// // console.log(names, github); // on one line, prints Huong Tran Developer 
// // console.log('*******************************************************');
// // console.log(generatePage(names, github)); //print only the entire html


