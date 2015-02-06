var expect         = require("expect.js"),
sinon              = require("sinon"),
TodosView          = require("./todos"),
TodosModel         = require("../models/todos"),
BindableCollection = require("bindable-collection"),
BindableObject     = require("bindable-object");

describe(__filename + "#", function () {

  describe("view", function () {

    it("does not should #clear-completed button if there are no todos", function () {
      var c = new TodosView();
      expect($(c.render()).find("#clear-completed").length).to.be(0);
    });

    it("shows #clear-completed button if there are todos", function () {
      var c = new TodosView({
        todos: [
          { text: "something" }
        ]
      });

      expect($(c.render()).find("#clear-completed").length).to.be(1);
    });

    it("can add a new todo item", function () {
      var c = new TodosView({

      });

      var clickStub = sinon.stub(c, "addNewTodo");

      var todoEl = $(c.render()).find("#new-todo")[0];
      todoEl.value = "hello";

      var e = document.createEvent("Event");
      e.initEvent("input", true, true);

      // first trigger data change in the input
      todoEl.dispatchEvent(e);

      expect(c.newTodoText).to.be("hello");

      // simulate enter key being pressed
      e = document.createEvent("Event");
      e.initEvent("keydown", true, true);
      e.keyCode = 13;

      todoEl.dispatchEvent(e);

      expect(clickStub.callCount).to.be(1);
    });
  });

  describe("controller", function () {

    it("can create a new todos view", function () {
      var c = new TodosView();
    });

    it("cannot create a new todo if the newTodoText property is undefined", function () {

      var c = new TodosView({
        todos: new TodosModel()
      });

      c.newTodoText = void 0;
      c.addNewTodo();
      expect(c.todos.length).to.be(0);
    });

    it("can create a new todo if the newTodoText property is defined", function () {
      var c = new TodosView({
        todos: new TodosModel()
      });

      c.newTodoText = "hello";
      c.addNewTodo();
      expect(c.todos.length).to.be(1);
      expect(c.todos.at(0).text).to.be("hello");
    });

    
  });
});