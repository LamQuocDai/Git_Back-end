// Constructor function
function address(number, street, city) {
    this.number = number;    
    this.street = street;
    this.city = city;
}

function people(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

function Person(firstName , lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // date of birth

    this.getYearsOfBirth = function(){
        return this.dob.getFullYear();
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }

}

people.prototype.getName = function() { // add method to prototype object
    return this.name;

}

// Instantiate object
const address1 = new address(23, "Nguyen Hue", "HCM");
const people1 = new people("John", 20, address1);
const person1 = new Person("Lam", "Dai", "07-07-2003");
console.log(people1.getName());

str = "myString";
let myObject = {};
myObject[str] = "this key is in variable str";

console.log(myObject.str); // undefined
console.log(myObject[str]); // this key is in variable str
console.log(myObject.myString); // this key is in variable str

const fruit = {name : "apple"};
const fruitbear = {name : "apple"};
console.log(fruit === fruitbear); // false

const fruit2 = {name : "apple"};
const fruitbear2 = fruit2;  
console.log(fruit2 === fruitbear2); // true