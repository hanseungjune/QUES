const STORAGE_KEY = "todos";

export type todotype = {
  id: number;
  content: string;
  isComplete: boolean;
};

class WebStorage {
  #secretTodos: todotype[] = [];

  constructor() {
    this.getTodo();
  }

  getTodo() {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      this.#secretTodos = JSON.parse(storedTodos);
    }
    return this.#secretTodos;
  }

  addTodo(todo: todotype) {
    this.#secretTodos.push(todo);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#secretTodos));
  }

  removeTodo(id: number) {
    const index = this.#secretTodos.findIndex(todo => todo.id === id);
    if (0 <= index && index < this.#secretTodos.length) {
      this.#secretTodos.splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#secretTodos));
    }
  }

  updateTodo(index: number, updateTodo: todotype) {
    if (0 <= index && index < this.#secretTodos.length) {
      this.#secretTodos[index] = updateTodo;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#secretTodos));
    }
  }

  toggleTodo(index: number) {
    if (0 <= index && index < this.#secretTodos.length) {
      this.#secretTodos[index].isComplete =
        !this.#secretTodos[index].isComplete;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.#secretTodos));
    }
  }
}

export default WebStorage;
