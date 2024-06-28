let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);
// Show the content of the map
console.log(map); // num1

// Show the size of the map
console.log(map.size); // 3

// Show the value of the key '1'
console.log(map.get('1')); // str1

// check if the key '1' exists

console.log(map.has('1')); // true

// delete the key '1'
map.delete('1');

// Clear the map
map.clear();

// Set key and value pairs for the map
const Nam = {name : 'Nam'};
map.set(Nam, 123); // key is an object

// Map can chain the set method
map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');

// Show the content of the map
console.log(map.get(Nam));

// Loop of the map, there are 4 ways to loop through the map
// 1. Loop through the keys
for(let key of map.keys()){
    console.log(key);
}
console.log('-------------------');

// 2. Loop through the values
for(let value of map.values()){
    console.log(value);
}
console.log('-------------------');

// 3. Loop through the key-value pairs (entries)
for(let entry of map.entries()){ // for (let entry of map) is the same
    console.log(entry);
}

console.log('-------------------');

// 4. Loop through the key-value pairs (entries) using forEach
map.forEach((value, key) => {
    console.log(key, value);
});

console.log('-------------------');

// Convert map to object
const obj = Object.fromEntries(map.entries()); // const obj = Object.fromEntries(map); is the same
console.log(obj);

// convert object to map
const map2 = new Map(Object.entries(obj));
console.log(map2);

console.log('======================================================');

// Set
const set = new Set(); // Set is a collection of unique values (Initial size is 0)

let john = {name: 'John'}, pete = {name: 'Pete'}, mary = {name: 'Mary'}; // create 3 objects

// add the objects john to the set (can add the same object multiple times)
set.add(john); set.add(pete); set.add(mary); set.add(pete); set.add(john) 

// Show values of the set
console.log(set); 

// delete value of the set
set.delete(john); // return true if the value is in the set, otherwise return false

// check if the value is in the set
console.log(set.has(john)); // return false

// Show the size of the set
console.log(set.size); // 2

// clear the set
set.clear();

// Iterate the set , there are 4 ways to iterate the set
// add values
set.add("oranges").add("bananas").add("strawberries");

// 1. Loop through the values
for (let value of set.values()) {
    console.log(value);
}

console.log('-------------------');

// 2. Loop through the keys
for (let key of set.keys()) {
    console.log(key);
}
console.log('-------------------');

// 3. Loop through the entries ([keys, values])
for(let entry of set.entries()){ // for (let [key,value] of set) is the same
    console.log(entry);
}

// 4. Loop through the values using forEach
set.forEach((value, key) => {
    console.log(key, value);
});