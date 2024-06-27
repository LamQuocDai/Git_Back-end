const Person = require('./person');
const Logger = require('./logger');
//import Person from './person';  // SyntaxError: Cannot use import statement outside a module

//const Dai = new Person(1, "Dai", "07-07-2003", "lamdai210@gmail.com");

//console.log(Dai.greeting()); // My name is Dai and I am 17 years old        
//console.log(Dai.getBirthYear()); // ReferenceError: Person is not defined

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World'); // Called Listener: { id: 'f4b3b3b7-1b3d-4f0d-8e4f-2d3f4e7b4b3d', msg: 'Hello World' }
logger.log('Good morning');
logger.log('Hi Peter, how are you?');