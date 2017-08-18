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

    const removeTask = function(task) {

      const doesExist = function(task) {
        return list.some(function(item) {
          return item === task;
        });
      };

      if (!task) throw Error('no task is provided');
      if (!doesExist(task)) throw Error('there is no such task');

      list = list.filter(function(item) {
        return item !== task;
      });
    };

    return {
      getTaskList: getTaskList,
      addTask: addTask,
      removeTask: removeTask
    };
  };

  exports.Todo = Todo;
})(this);
