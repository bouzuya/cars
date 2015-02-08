var cars = require('./cars');
var CLI = function() {};

CLI.prototype.run = function() {
  cars();
};

module.exports.CLI = CLI;
