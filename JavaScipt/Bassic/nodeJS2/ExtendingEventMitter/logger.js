const { EventEmitter } = require("events");

class Logger extends EventEmitter{
    log(msg){
        console.log(msg);
        // Call event
        this.emit('message', {id : 1, url: 'http://'});
    }
}

module.exports = Logger;