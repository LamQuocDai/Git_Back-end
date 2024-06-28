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

const emitter = new EventEmitter();

// Listen for an event
emitter.on('message', (arg) => {
    console.log('Listener called', arg);
});

// Raise an event
emitter.emit('message', {id: 1 , url : 'http://'});