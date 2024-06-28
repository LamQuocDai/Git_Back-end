const Logger = require('./logger');
const logger = new Logger();


logger.on('message' , (agr) => {
    console.log('Listener called', agr);
});

logger.log('Hello World'); // Hello World  