const http = require('http');

const createServer = http.createServer((req, res) =>{
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let ext = path.extname(filePath);
    res.writeHead(200, {'Content-Type': 'text/html'});
});

createServer.listen(5000, () => console.log('Server is running...'));