
export class TodoList {
    private todos: { task: string; completed: boolean }[];

    constructor() {
      this.todos = [];
    }
  
    addTodo(task: string) {
      if (task.trim() === '') {
        throw new Error('Invalid task');
      }
      this.todos.push({ task, completed: false });
    }
  
    removeTodo(task: string) {
      const index = this.todos.findIndex(todo => todo.task === task);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  
    markCompleted(task: string) {
      const todo = this.todos.find(todo => todo.task === task);
      if (todo) {
        todo.completed = true;
      }
    }
  
    getTodos() {
      return this.todos;
    }
  }
  
  