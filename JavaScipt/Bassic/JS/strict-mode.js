// if i add line "use strict" at the top of the file, it will enable the strict mode
// So line 5, 9 and 14 will throw an error 
"use strict"; // use all file

// fullName = "Lam Quoc Dai"; 
var fullName = "Lam Quoc Dai"; // Declare a global variable

function showAge(){
    // "use strict"; // use only in this function
    // age = 20;
    var age = 20; // Declare a function scope variable but create variable in global scope
}

showAge();
console.log(fullName);
// console.log(age); 

// Should declare fullName and age with var, let or const keyword but age have scope so it will catch an error


// Object.freeze() method
/*
const student = {
    name: "Nguyen van A",
}

student.name = "Nguyen van B";

console.log(student.name); // Nguyen van B

but if we use Object.freeze() method, it didn't change the value name of student object
and also didn't prevent error if don't use "use strict" mode
*/

const students = Object.freeze({
    name: "Nguyen van A",
});

students.name = "Nguyen van B";

console.log(students.name); // Nguyen van A

/*
Like to Object.freeze() :

const students = {};
Object.defineProperty(students, "name", {
    value: "Nguyen van A",
    writable: false, // writeable: true so we can change the value of name
});

students.name = "Nguyen van B"; // Error with "use strict" mode
*/

/*
in "use strict" mode

const students = {
    name: "Nguyen van A",
};

delete students // It will throw an error

console.log(students); 

function sum(a, a){
    return a + a;
}

console.log(sum(1, 2)); // It will throw an error

// Block scope 
{
    let x = 10;
}

console.log(x); // It will throw an error

// Keywords not allowed 
const private = 10 // It will throw an error
console.log(private); 

*/