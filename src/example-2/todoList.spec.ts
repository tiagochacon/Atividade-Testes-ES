import { TodoList } from "./todoList";

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it('should add a new todo', () => {
    todoList.addTodo('Learn Jest');
    expect(todoList.getTodos()).toEqual([{ task: 'Learn Jest', completed: false }]);
  });

  it('should not add an invalid todo', () => {
    expect(() => todoList.addTodo('')).toThrow('Invalid task');
  });

  it('should remove a todo', () => {
    todoList.addTodo('Learn Jest');
    todoList.removeTodo('Learn Jest');
    expect(todoList.getTodos()).toEqual([]);
  });

  it('should mark a todo as completed', () => {
    todoList.addTodo('Learn Jest');
    todoList.markCompleted('Learn Jest');
    expect(todoList.getTodos()).toEqual([{ task: 'Learn Jest', completed: true }]);
  });

  it('should not mark a non-existing todo as completed', () => {
    todoList.markCompleted('Non-existing task');
    expect(todoList.getTodos()).toEqual([]);
  });

  it('should get all todos', () => {
    todoList.addTodo('Learn Jest');
    todoList.addTodo('Write Tests');
    expect(todoList.getTodos()).toEqual([
      { task: 'Learn Jest', completed: false },
      { task: 'Write Tests', completed: false },
    ]);
  });
});
