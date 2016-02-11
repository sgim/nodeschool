var filter = require("./mymodule.js");

filter(process.argv[2], process.argv[3], function (err, arr) {
  if (err) throw err;
  arr.forEach(function (a) {
    console.log(a);
  });
});

