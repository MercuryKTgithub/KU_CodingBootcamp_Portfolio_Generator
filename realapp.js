const profileDataArgs = process.argv.slice(2, process.argv.length); // same as var profileDataArgs = process.argv.slice(1); 
const generatePage = require('./src/page_template.js');
const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

promptUser();

// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     console.log(portfolioData);
//     // will be uncommented in lesson 4
//     // const pageHTML = generatePage(portfolioData);
//     // fs.writeFile('./index.html', pageHTML, err => {
//     //   if (err) throw new Error(err);
//     //   console.log('Page created! Check out index.html in this directory to see it!');
//     // });
//   }
//   );


// // // (1) assignment destructuring
// // const [names, github] = profileDataArgs;
// // const pageHTML = generatePage(names, github); // call function generatePage, passed in 2 paras 
// // console.log(pageHTML);
// // fs.writeFile('index.html', pageHTML, err => {
// //   if (err) throw err;
// //   console.log('Portfolio complete! Check out index.html to see the output!');
// // });

