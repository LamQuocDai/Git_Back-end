"use strict";
function sayHello(name){
    console.log(`Hello ${name}`);
}

class Person {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

module.exports = {sayHello, Person};

