var express = require('express');
var app = express();

app.use(express.static(__dirname))
  .get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html');
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:8080');
  });
