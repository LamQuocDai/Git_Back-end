const fruits = ['apple', 'banana', 'cherry'];

fruits['3'] = "mango"; // add mango to the index 3 of the array or change the value of the index 3  

fruits.push("grapes"); // add grapes to the end of the array

fruits.forEach(fruit => {
  console.log(fruit);
});

console.log();
fruits.pop(); // remove the last element of the array

fruits.forEach(fruit => {
  console.log(fruit);
});

console.log();

fruits.shift(); // remove the first element of the array

fruits.forEach(fruit => {
    console.log(fruit);
    });

console.log();

fruits.unshift("strawbarry"); // add strawbarry to the beginning of the array

fruits.forEach(fruit => {
    console.log(fruit);
});

console.log();
console.log(fruits.length); // 4
console.log(Array.isArray(fruits));