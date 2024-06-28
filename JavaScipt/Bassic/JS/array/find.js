const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

console.log(names.find((name)=> name === 'Alice'));

const people = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

const person = people.find((person) => person.name === 'John');

console.log(person); // { name: 'John', age: 30 }
person.name = ' Doe';
console.log(person); // { name: ' Doe', age: 30 }
console.log(people); // [{ name: ' Doe', age: 30 }, { name: 'Jane', age: 25 }]