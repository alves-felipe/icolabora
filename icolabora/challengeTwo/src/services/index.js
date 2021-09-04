const todo = require('./todo/todo.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(todo);
};
