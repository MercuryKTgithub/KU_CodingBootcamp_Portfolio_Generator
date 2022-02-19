// Warm up II
const inquirer = require('inquirer');
// console.log(inquirer)

// inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])
//   .then(ansEntity => console.log(ansEntity));

const promptProject = () => { 
   console.log(`
   =================
   Add a New Project
   =================
   `);
  return  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
         type: 'confirm',
         name: 'confirmAddProject', // How can we use this info to control the flow of the application
         message: 'Would you like to enter another project?',
         default: false
      }
  ]);
  
}

// promptProject().then(ansEntity => console.log(ansEntity));

const promptClient = () => {
   return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
         type: 'input',
         name: 'github',
         message: 'Enter your GitHub Username'
       },
       {
         type: 'input',
         name: 'about',
         message: 'Provide some information about yourself:'
       }
    ]);
};

// promptClient().then(ansEntity => console.log(ansEntity));

// Using Promises, we can chain the functions together using the then() method
promptClient().then(clientAns => console.log(clientAns))
              .then(promptProject)
              .then(projectAns => console.log(projectAns));

