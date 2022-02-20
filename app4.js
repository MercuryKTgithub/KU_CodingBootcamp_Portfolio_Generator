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

const promptProject = (portfolioData) => { 
   console.log(`
   =================
   Add a New Project
   =================
   `);
   if (!portfolioData.projects) {
      portfolioData.projects = [];
   }
   return  inquirer
     .prompt([
         {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
               if(nameInput){
                  return true;
               }else{
                  console.log("Please enter the name of your project:");
                  return false;
               }
            }
         },
         {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
               if(nameInput){
                  return true;
               }else{
                  console.log("Provide a description of the project:");
                  return false;
               }
            }
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
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
               if(nameInput){
                  return true;
               }else{
                  console.log("Please enter GitHub link to your project:");
                  return false;
               }
            }
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
      ])
     .then(projectData => {
         portfolioData.projects.push(projectData);
         if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
         }
         else {
            return portfolioData;
         }
      });
}

// promptProject().then(ansEntity => console.log(ansEntity));

const promptClient = () => {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'name',
         message: 'What is your name? (Required)',
         validate: nameInput => {
            if(nameInput){
               return true;
            }else{
               console.log("Please enter your name: ");
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'github',
         message: 'Enter your GitHub Username (Required)',
         validate: nameGitInput => {
            if(nameGitInput){
               return true;
            }else{
               console.log("Please enter your GitHub Username: ");
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
         message: 'Provide some information about yourself: ',
         when: ({ confirmAbout }) => {
           if (confirmAbout) {
             return true;
           } else {
             return false;
           }
         }
       }
    ]);
};

// promptClient().then(ansEntity => console.log(ansEntity));

// // Using Promises, we can chain the functions together using the then() method
// promptClient().then(clientAns => console.log(clientAns))
//               .then(promptProject)
//               .then(projectAns => console.log(projectAns));

promptClient()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
    // will be uncommented in lesson 4
    // const pageHTML = generatePage(portfolioData);
    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);
    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });
