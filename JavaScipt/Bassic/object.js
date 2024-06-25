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

people.prototype.getName = function() { // add method to prototype object
    return this.name;

}

const address1 = new address(23, "Nguyen Hue", "HCM");
const people1 = new people("John", 20, address1);
console.log(people1.getName());

str = "myString";
let myObject = {};
myObject[str] = "this key is in variable str";

console.log(myObject.str);
console.log(myObject[str]);
console.log(myObject.myString);

const fruit = {name : "apple"};
const fruitbear = {name : "apple"};
console.log(fruit === fruitbear); // false

const fruit2 = {name : "apple"};
const fruitbear2 = fruit2;  
console.log(fruit2 === fruitbear2); // true