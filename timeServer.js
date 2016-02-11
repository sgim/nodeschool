var net = require('net');
var mod = function (str) {
  return str.length < 2 ? "0" + str: str;
};
net.createServer(function (socket) {
  var time = new Date();
  socket.end(time.getFullYear() + "-" +
          mod((1 + time.getMonth()) +"") +
	  "-" + mod(time.getDate()+ "") +
          " " + mod(time.getHours() + "") +
	  ":" + mod(time.getMinutes() + "") + "\n");
}).listen(process.argv[2]);
