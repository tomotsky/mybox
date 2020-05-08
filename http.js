'use strict';

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('hi');
});

const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});

