var http = require('http');
var fs = require('fs');
var file = fs.createReadStream(process.argv[3]);
http.createServer(function (request, response) {
  file.pipe(response);
}).listen(process.argv[2]);
