const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

console.log(names.indexOf('Alice'));
console.log(names.indexOf('Alice', 1)); // indexOf(key, fromIndex)
console.log(names.indexOf('Dai')); // -1 if not found

console.log(names.lastIndexOf('Alice')); // Find the last index of the key

console.log(names.findIndex((name) => name === 'Alice'));