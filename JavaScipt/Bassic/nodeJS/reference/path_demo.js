const path = require('path');

// Base file name
const pathObj = path.parse(__filename);
console.log(pathObj);

//Base file name
console.log(__filename);
console.log(path.basename(__filename)); 

//Directory name
console.log(__dirname);
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths 
console.log(path.join(__dirname, 'hello.html')); // C:\Users\lamda\Documents\GitHub\NodeJS\reference\path_demo.js\hello.html
console.log(path.join(__dirname, 'hello', 'world.html')); // C:\Users\lamda\Documents\GitHub\NodeJS\reference\path_demo.js\hello\world.html