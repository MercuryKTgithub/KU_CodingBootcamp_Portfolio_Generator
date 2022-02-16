const generatePage = require('./src/page_template.js');
const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length); // same as var profileDataArgs = process.argv.slice(1); 


// (1) assignment destructuring
const [names, github] = profileDataArgs;

console.log('START-START-START-START-START-START-START-START-START-START-');
console.log(names, github); // on one line, prints Huong Tran Developer 
// console.log(generatePage(names, github)); // print whe whole html page 

const pageHTML = generatePage(names, github); // call function generatePage, passed in 2 paras

 // built-in function that's globally available in Node.js
fs.writeFile('index.html',pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
