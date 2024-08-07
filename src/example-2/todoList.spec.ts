import { TodoList } from "./todoList";

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('should add a new todo', () => {
    todoList.addTodo('Learn Jest');
    expect(todoList.getTodos()).toEqual([{ task: 'Learn Jest', completed: false }]);
  });

  test('should not add an invalid todo', () => {
    expect(() => todoList.addTodo('')).toThrow('Invalid task');
  });

  test('should remove a todo', () => {
    todoList.addTodo('Learn Jest');
    todoList.removeTodo('Learn Jest');
    expect(todoList.getTodos()).toEqual([]);
  });

  test('should mark a todo as completed', () => {
    todoList.addTodo('Learn Jest');
    todoList.markCompleted('Learn Jest');
    expect(todoList.getTodos()).toEqual([{ task: 'Learn Jest', completed: true }]);
  });

  test('should not mark a non-existing todo as completed', () => {
    todoList.markCompleted('Non-existing task');
    expect(todoList.getTodos()).toEqual([]);
  });

  test('should get all todos', () => {
    todoList.addTodo('Learn Jest');
    todoList.addTodo('Write Tests');
    expect(todoList.getTodos()).toEqual([
      { task: 'Learn Jest', completed: false },
      { task: 'Write Tests', completed: false },
    ]);
  });
});
