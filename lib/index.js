var cars = require('./cars');
var express = require('express');

var App = function() {};

App.prototype.run = function() {
  var app = express();

  app.get('/', function(req, res) {
    res.send('OK');
  });

  app.post('/:token', function(req, res) {
    var token = req.params.token;
    if (process.env.CARS_TOKEN && token === process.env.CARS_TOKEN) {
      console.log('valid token');
      cars();
      res.send('OK');
    } else {
      console.error('invalid token: ' + token);
      res.send('NG');
    }
  });

  app.listen(process.env.PORT || 3000);
};

module.exports.App = App;
