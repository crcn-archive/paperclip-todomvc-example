var BindableObject = require("bindable-object");

// todo model
module.exports = BindableObject.extend({
  remove: function () {
    this.todos.splice(this.todos.indexOf(this), 1);
  }
});
