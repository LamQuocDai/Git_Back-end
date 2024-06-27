const fs = require('fs');
const path = require('path');

// Create a folder
/*
fs.mkdir(path.join(__dirname, '/test'), {} , err =>{
    if(err) throw err;
    console.log('Folder created...');
});
*/

// Delete a folder  
/*
fs.rm(path.join(__dirname, '/test'), {recursive: true}, err => {
    if(err) throw err;
    console.log('Folder deleted...');
});
*/

// Create and write to file
/*
fs.writeFile(path.join(__dirname, 'hello.txt'), 'Hello wolrd', err => {
    if(err) throw err;
    console.log('File written to...');
});
*/
/*
fs.writeFile(path.join(__dirname, 'hello.txt'), 'I love Node JS', err => {
    if(err) throw err;
    console.log('File written to...');
});
*/

// Append to file
/*
fs.writeFile(path.join(__dirname, 'hello.txt'), 'Hello wolrd', err => {
    if(err) throw err;
    console.log('File written to...');
    fs.appendFile(path.join(__dirname, 'hello.txt'), '\nI love Node JS', err => {
        if(err) throw err;
        console.log('File written to...');
    });
});
*/

// Read file
/*
fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});
*/

// Rename file
/*
fs.rename(path.join(__dirname, 'hello.txt'), path.join(__dirname, 'world.txt'), err => {
    if(err) throw err;
    console.log('File renamed ...');
});
*/