var express = require("express"),
browserify  = require("browserify-middleware"),
transform   = require("./transform"),
fs          = require("fs"),
uglify = require("uglify-js");

var server = express(), port = process.env.PORT || 8088,
debug = port == 8088;

var oneDay = 86400000;
server.use(require("compression")());
server.use(express.static(__dirname + "/../build", { maxAge: oneDay }));


server.get("/app.min.js", browserify(__dirname + "/../app/js/entry.js", { 
  transform: [transform], 
  extensions: transform.extensions,
  cache: 'dynamic',
  debug: debug,
  minify: !debug,
  gzip: true
}));


server.listen(port);