var BindableCollection = require("bindable-collection"),
Todo                   = require("./todo");

// todos model
module.exports = BindableCollection.extend({
  create: function (properties) {
    properties.todos = this;
    this.push(new Todo(properties));
  }
});
