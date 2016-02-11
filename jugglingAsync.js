var http = require('http');
var count = 3;
var datas = [];
var complete = function (arr) {
  arr.forEach(function (a) {
    console.log(a);
  });
};

process.argv.slice(2).forEach(function (url, i) {
  var data = "";
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (d) {
      data += d;
    });
    response.on('end', function () {
      count -= 1;
      datas[i] = data;
      !count && complete(datas);
    });
  });

});
