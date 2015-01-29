

var browserify = require("browserify"),
transform = require("./transform"),
less = require("less"),
fs = require("fs"),
uglify = require("uglify-js"),



console.log("parsing JavaScript");
var b = browserify(__dirname + "/../app/js/entry.js", { transform: transform, extensions: transform.extensions });


b.transform(transform);

b.bundle({}, function (err, content) {

  if (err) {
    console.error(err);
    process.exit();
  }
  
  var source = uglify.parse(content, {
    strict: false
  });
  source.figure_out_scope();
  source.compute_char_frequency();
  source.mangle_names();

  // TODO - production
  content = source.print_to_string({
    ascii_only: true,
    quote_keys: true
  });

  fs.writeFileSync(__dirname + "/../build/app.min.js", content);
});
