//Module Wrapper Function
/*
(function (exports, require, module, __filename, __dirname) {
    //Code in here
})

console.log(__dirname, __filename);
*/

class Person{
     constructor(id, name, dob, email){
        this.id = id;
        this.name = name;
        this.dob = new Date(dob);
        this.email = email;
     }

     greeting(){
        return `My name is ${this.name}`;
     }

     getBirthYear(){
         return this.dob.getFullYear();
     }
}

module.exports = Person;