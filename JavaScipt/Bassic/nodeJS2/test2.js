const http = require('http');
const {sayGoodbye} = require('./test.js');
const {getDate} = require('./test3.js');
const url = require('url');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

http.createServer((req, res) => {
    if (req.url == './test.html') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          res.write('File uploaded');
          res.end();
        });
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="./test.html" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
      }
}).listen(8000);
console.log('Server is running with port 8000')
console.log(sayGoodbye());