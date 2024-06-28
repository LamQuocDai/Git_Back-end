const http = require('http');

const server = http.createServer((req, res) => {
    // req is a readable stream
    // res is a writable stream
    if(req.url === '/'){// current url is localhost:5000
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([
            {id: 1, name: 'course1'},
            {id: 2, name: 'course2'},
            {id: 3, name: 'course3'}
        ]));
        res.end();
    }
});

/*
server.on('connection', (socket) => {
    console.log('New connection ...');
});
*/

server.listen(5000);