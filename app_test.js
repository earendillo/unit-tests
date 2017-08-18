let expect  = chai.expect;

describe('Todo', function() {
  describe('constructor', function() {
    it('should have an empty array for storeing tasks', function() {
      let todo = new Todo();
      expect(todo.getTaskList()).to.have.lengthOf(0);
    });
  });

  describe('#addTask', function() {
    it('should throw an error if task is not provided', function() {
      let todo = new Todo();
      expect(function() {
        (new Todo()).addTask();
      }).to.throw(Error);
    })
    it('should add provided task to the list', function() {
      let todo = new Todo();
      todo.addTask('new task');
      expect(todo.getTaskList()).to.have.lengthOf(1);
    });
  });

  describe('#getTaskList', function() {
    it('should have named item after adding task', function() {
      let todo = new Todo();
      let list = todo.getTaskList();
      todo.addTask('new task');
      expect(list[0]).to.be.string('new task');
    });
  });

  describe('#removeTask', function() {
    it('should throw error if task to delete is not provided', function() {
      let todo = new Todo();
      expect(function() {
        (new Todo()).removeTask();
      }).to.throw(Error);
    });

    it('should throw error if provided task does not exist', function() {
      let todo = new Todo();
      todo.addTask('some task');
      expect(function() {
        todo.removeTask('other task');
      }).to.throw(Error);
    });

    it('should remove item by provided name', function() {
      let todo = new Todo();
      todo.addTask('new task');
      expect(todo.getTaskList()).to.have.lengthOf(1);
      todo.removeTask('new task');
      expect(todo.getTaskList()).to.have.lengthOf(0);
    });
  });
});
