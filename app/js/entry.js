var paperclip = require("paperclip"),
BindableObject = require("bindable-object"),
BindableCollection = require("bindable-collection"),
todosTemplate = paperclip.template(require("./todos.pc"));


var Todos = BindableCollection.extend({
  create: function (properties) {
    properties.todos = this;
    this.push(new Todo(properties));
  }
});

var Todo = BindableObject.extend({
  remove: function () {
    this.todos.splice(this.todos.indexOf(this), 1);
  }
});


var Controller = BindableObject.extend({
  addNewTodo: function () {
    if (!this.newTodoText) return;
    this.todos.create({text:this.newTodoText});
    this.set("newTodoText", void 0);
  },
  addTodos: function (count, si) {
    if (!si) si = 0;
    var todos = new Todos();
    for (var i = count||0; i--;) todos.push(new Todo({ text: si+i, todos: todos }));
    var start = Date.now();
    this.set("todos", todos);
    console.log(Date.now() - start);
  },
  toggleCompleted: function () {
    this.set("completed", !this.completed);
    for (var i = this.todos.length; i--;) {
      this.todos.at(i).set("completed", !this.completed);
    }
  }
});

var controller = window.controller = new Controller({todos:new Todos()});


document.body.appendChild(todosTemplate.bind(controller).render());