const EventEmitter = require('events');

//Create class
class MyEmiiter extends EventEmitter{};

// Init object
const myEmitter = new MyEmiiter();

// Event listener
myEmitter.on('event', () => console.log('Event fired!'));

// Init event
myEmitter.emit(('event')); // Event fired!  
myEmitter.emit(('event'))
myEmitter.emit(('event'))
myEmitter.emit(('event'))