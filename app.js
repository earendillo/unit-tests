(function(exports) {
  'use strict';

  function Todo() {
    let list = [];

    const addTask = function(task) {
      if(!task) throw Error('define task');
      list.push(task);
    };

    const getTaskList = function() {
      return list;
    }

    return {
      getTaskList: getTaskList,
      addTask: addTask
    };
  };

  exports.Todo = Todo;
})(this);
