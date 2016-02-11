var fs = require('fs');
module.exports = function (dir, ext, func) {
  var arr = [];
  fs.readdir(dir, function (err, files) {
    if (err) return func(err);
    ext = new RegExp("." + ext + "$");
    files.forEach(function (f) {
      f.match(ext) && arr.push(f);
    });
    func(err, arr);
  });
};
