var total = 0;
process.argv.slice(2).forEach(function (n) {
  total += n * 1;
});
console.log(total);
