const fs = require('fs');

// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another 
// promise, and a reject callback used to reject the promise with a provided reason or error.
const writeFile = fileContent => {
   return new Promise((resolve, reject) => {
      fs.writeFile('dist/index.html', fileContent, err => {
         // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
         if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
         }
         resolve({
            ok: true,
            message: 'File created'
         }); //end of resolve block
      }); // end of writeFile calling block
   }); // end of promise instantiation      
}; // end of funcgion expression

const copyFile = () => {
   return new Promise((resolve, reject) => {
      fs.copyFile('src/style.css', 'dist/style.css', err => {
         // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
         if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
         }
         resolve({
            ok: true,
            message: 'File copied!'
         }); //end of resolve block
      }); // end of writeFile calling block
   }); // end of promise instantiation      
}; // end of funcgion expression

/////////////////////////////////////////////////////////
//
// module.exports = {
//    writeFileMethod: writeFile,
//    copyFileMethod: copyFile
//  };
//
/////////////////////////////////////////////////////////


module.exports = { writeFile, copyFile };
