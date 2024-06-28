const numbers = [1, 2, 3, 4, 5];

const copyOfNumbers = [...numbers];

console.log(copyOfNumbers); // [1, 2, 3, 4, 5]
copyOfNumbers.push(6);
console.log(copyOfNumbers); // [1, 2, 3, 4, 5, 6]
console.log(numbers); // [1, 2, 3, 4, 5]

console.log('---'); 

const people = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

const copyOfPeople = [...people];
console.log(copyOfPeople); // [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]
copyOfPeople[0].name = 'Jack';
console.log(copyOfPeople); // [{ name: 'Jack', age: 30 }, { name: 'Jane', age: 25 }]
console.log(people); // [{ name: 'Jack', age: 30 }, { name: 'Jane', age: 25 }]
