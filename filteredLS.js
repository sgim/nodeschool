require('fs').readdir(process.argv[2], function (err, files) {
  var ext = new RegExp("." + process.argv[3] + "$");
  files.forEach(function (f) {
    f.match(ext) && console.log(f);
  });

});
