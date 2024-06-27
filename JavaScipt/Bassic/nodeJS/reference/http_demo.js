const http = require('http');

//Creat server object
http.createServer((req, res) => {
    // write response
    res.write("Hello World");
    res.end();
}).listen(5000, () => console.log('Server running ...') ); // Server running ...