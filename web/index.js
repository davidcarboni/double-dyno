// https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30

var express = require('express');
var request = require('request');

var app = express();
const PORT = process.env.PORT || 3000

// So we can exit the Docker container with Ctrl-C
// https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {
  process.exit();
});

app.get('/', function (req, res) {

  request('http://api:3000/data', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(JSON.parse(body))
    } else {
      res.send("Error")
    }
  })
});

app.listen(3000, function () {
  console.log('Web app listening on port ${PORT}!');
});