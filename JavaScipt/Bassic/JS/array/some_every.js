const numbers = [1, -2, 3, -4, 5];

console.log(numbers.includes(-2)); // true  

console.log(numbers.some((num) => num < 0)); // true
console.log(numbers.every((num) => num < 0)); // false