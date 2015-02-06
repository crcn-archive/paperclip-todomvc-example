BindableObject = require("bindable-object"),
pc             = require("paperclip"),
nofactor       = require("nofactor");


function Controller (properties) {
  BindableObject.call(this, properties);

  this._view = pc.template(require("./todos.pc"), {
    components: pc.components,
    attributes: pc.attributes,
    nodeFactory: nofactor.dom
  }).view(this);
}

// view controller
module.exports = BindableObject.extend(Controller, {
  render: function () {
    return this._view.render();
  },
  addNewTodo: function () {
    if (!this.newTodoText) return;
    this.todos.create({text:this.newTodoText});
    this.set("newTodoText", void 0);
  },
  toggleCompleted: function () {
    this.set("completed", !this.completed);
    for (var i = this.todos.length; i--;) {
      this.todos.at(i).set("completed", !this.completed);
    }
  },
  clearCompleted: function () {
    for (var i = this.todos.length; i--;) {
      if (this.todos.at(i).completed) this.todos.splice(i, 1)
    }
  }
});