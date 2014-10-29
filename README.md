### Mojo TodoMVC [![Build Status](https://travis-ci.org/classdojo/mojo-todomvc-example.svg)](https://travis-ci.org/classdojo/mojo-todomvc-example)

http://mojo-todomvc-example.herokuapp.com/

### Mojo.js Resources

- [documentation](http://mojo-docs.herokuapp.com/)
- [starter kit](https://github.com/mojo-js/mojo-starter)

### Requirements

- [Node.js](http://nodejs.org/) - needed for unit testing and [browserify](http://browserify.org/)


### Highlights

- Unit tests run entirely in node.js
- Coverage tool covers everything, including templates

### Mojo Modules Used

- [mojo-application](https://github.com/mojo-js/mojo-router) - Main entry point to application
- [mojo-models](https://github.com/mojo-js/mojo-models) - Models
- [mojo-views](https://github.com/mojo-js/mojo-views) - View Controller
- [mojo-paperclip](https://github.com/mojo-js/mojo-views) - Template engine
- [mojo-router](https://github.com/mojo-js/mojo-router) - http router
- [mojo-mediator](https://github.com/mojo-js/mojo-mediator) - commands / mediator


### Project Structure

```
app/
  js/
    entry.js - initializes the application and adds to the body of the DOM
    index.js - main application class
    views/ - all view controllers & templates displayed to the user
    routes/ - all HTTP routes. controls the view state of the application
    models/ - all data models for the application. Controls all information.
    commands/ - global commands for the application.
build/ - output folder where app is built to
test/
  unit/ - unit test files. These run in node.
```


### Installation

```
git clone git@github.com:mojo-js/mojo-todomvc-example.git && cd mojo-todomvc-example && npm install;
```

### Commands

```
npm start - starts the todoMVC http server on port 8085
npm test  - runs all the todoMVC tests
npm run hotswap - runs the hotswap script for debugging
npm run build - builds the application as one js file
make test-cov - build coverage report
make test-watch - run the tests & re-run whenever a file changes
```
