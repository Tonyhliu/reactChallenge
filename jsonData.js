var fs = require('fs');
var path = require('path');
var source = "./node_modules/cldr-misc-full/main/af/delimiters.json";

var result;
fs.readFile(source, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    result = data.toString();
  }
  // console.log(result);
});

var result2 = fs.readFileSync(source);
console.log(result2.toString());
module.exports = result;
