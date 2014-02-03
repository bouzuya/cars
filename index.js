var path = require('path');
var fs = require('fs');
var util = require('util');
var async = require('async');

var packageJsonPath = path.join(__dirname, 'package.json');
var package = JSON.parse(fs.readFileSync(packageJsonPath));
var dependencies = Object.keys(package.dependencies || {});

var counters = dependencies.filter(function(i) {
  return i.indexOf('cars-counter-') === 0;
});

var reporters = dependencies.filter(function(i) {
  return i.indexOf('cars-reporter-') === 0;
});

if (counters.length === 0 || reporters.length === 0) {
  console.log('npm install --save <counters and reporters>');
  process.exit(1);
  return;
}

console.log('counters:  ' + util.inspect(counters));
console.log('reporters: ' + util.inspect(reporters));

async.reduce(counters, {}, function(counts, counter, next) {
  console.log('counter: ' + counter);
  require(counter)(next);
}, function(err, counts) {
  if (err) throw err;

  async.eachSeries(reporters, function(reporter, next) {
    console.log('reporter: ' + reporter);
    require(reporter)(counts, next);
  }, function(err) {
    if (err) throw err;
  });
});

