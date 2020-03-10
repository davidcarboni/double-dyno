// https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30

var express = require('express');
var app = express();

// So we can exit the Docker container with Ctrl-C
// https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {
  process.exit();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});