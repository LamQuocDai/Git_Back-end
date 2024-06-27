const EventEmitter = require('events');
const uuid = require(('uuid'));

//console.log(uuid.v4()); // version 4 is random, different every time you run the code
class Logger extends EventEmitter{
    log(msg){
        // Call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;