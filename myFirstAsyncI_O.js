require('fs').readFile(process.argv[2], 'utf8', function (error, contents) {
  console.log(contents.split("\n").length - 1);
});
