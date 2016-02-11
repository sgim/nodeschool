var url = require('url');
var apis = {
  "/api/parsetime": function (t) {
     return {
       hour: t.getHours(),
       minute: t.getMinutes(),
       second: t.getSeconds()
     }
   },
   "/api/unixtime": function (t) {
     return {unixtime: t.getTime()};
   }
};
require("http").createServer(function (request, response) {

  var test = url.parse(request.url, true);
  var date = new Date(test.query.iso);
  var json = apis[test.pathname];
  if(json) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(json(date)));
  } else {
    response.writeHead(404);
    response.end();
  }

}).listen(process.argv[2]);
