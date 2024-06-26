const people = {
    firstName : "Lam",
    lastName : "Dai",
    age : 21,
    hobbies : ["Coding", "Playing game", "Reading book"],
    address : {
        number : 249,
        street : "Nguyen Luong Bang",
        city : "Tay Ninh"
    },
    sayHello : function(){
        return "Hello world";
    }
}

console.log(people.firstName);
console.log(people.hobbies[1]);
console.log(people.address.city);
console.log(people.sayHello());

console.log("==============================================");

const { lastName , hobbies, address, sayHello } = people;
console.log(lastName);
console.log(hobbies[2]);
console.log(address.street);
console.log(sayHello());

const { address : {number} } = people;
console.log(number);        

console.log("==============================================");

const todos = [
    {
        id: 1,
        text: "Do exercise",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Do homework",
        isCompleted: false,
    },
    {
        id: 3,
        text: "Do project",
        isCompleted: true,
    }
]

const  todosJSON = JSON.stringify(todos); // consert from Array to JSON

for ( let  value of todos ){
    console.log(value.text);
}

console.log("==============================================");
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

console.log("==============================================");


const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText); //return Array of text


console.log("==============================================");

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted); //return Array of object with isCompleted = true

console.log("==============================================");

const todoCompletedText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompletedText); //return Array of text with isCompleted = true