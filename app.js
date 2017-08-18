(function(exports) {
  'use strict';

  function Todo() {
    let list = [];

    const addTask = function(task) {
      if(!task) throw Error('define task');
      list.push(task);
    };

    return {
      list: list,
      addTask: addTask
    };
  };

  exports.Todo = Todo;
})(this);
