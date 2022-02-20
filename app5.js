const generatePage = require('./src/page_template');
// const fs = require('fs'); // no longer need, delegate to util
const inquirer = require('inquirer');

// const generateSite = require('utils/generate-site.js'); //  This will allow us to use generateSite.writeFile() generateSite.copyFile()
// const { writeFileMethod, copyFileMethod } = require('./utils/generate-site.js');
const { writeFile, copyFile  } = require('./utils/generate-site.js');

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

// // promptClient()
// //   .then(promptProject)
// //   .then(portfolioData => {
// //    //  console.log(portfolioData);
// //     const pageHTML = generatePage(portfolioData); // see const generatePage line 1
// //     fs.writeFile('dist/index.html', pageHTML, err => {
// //       if (err) throw new Error(err);
// //       console.log('Page created! Check out index.html in this directory to see it!');
// //       fs.copyFile('src/style.css', 'dist/style.css', err => {
// //          if (err) {
// //             console.log(err);
// //             return;
// //          }
// //          console.log('Style sheet copied successfully!');
// //       });
// //     });
// //   });

promptClient()
   .then(promptProject)
   .then(portfolioData => {
      return generatePage(portfolioData);
   })
   .then(pageHTML => {
      // return writeFileMethod(pageHTML); // returns a Promise
      return writeFile(pageHTML); // returns a Promise
   })
   .then(writeFileResponse => {
      console.log(writeFileResponse); //writeFileResponse is the object provided by the writeFile() function's resolve() execution
      // return copyFileMethod(); // returns a Promise
      return copyFile(); // returns a Promise
   })
   .then(copyFileResponse => {
      console.log(copyFileResponse); //copyFileResponse is the object provided by the copyFile() function's resolve() execution
   })
   .catch(err => {
      console.log(err);
   });

