// https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files/

var express = require('express');
const bodyParser = require('body-parser');

// So we can exit the Docker container with Ctrl-C
// https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {
  process.exit();
});

var app = express();
const PORT = process.env.PORT || 3000

// configure our express instance with some body-parser settings 
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', function (req, res) {
  res.send({"message": "Welcome to the API!"});
});

app.get('/', function (req, res) {

  res.send("Head on over to /data")
});

app.listen(PORT, function () {
  console.log(`API listening on port ${PORT}!`);
});