import { useEffect, useState } from "react";
import WebStorage, { todotype } from "../utils/WebStorage";

const useTodos = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const webStorage = new WebStorage();
  const [todos, setTodos] = useState<todotype[]>([]);

  const AddTodo = (inputValue: string) => {
    if (inputValue.trim() == "") {
      alert("입력해야만 등록이 됩니다");
      return;
    }
    const todo = {
      id: webStorage.getTodo().length + 1,
      content: inputValue,
      isComplete: false,
    };
    webStorage.addTodo(todo);
    setTodos((prev) => [...prev, todo]);
    setInputValue("");
  };

  const toggleTodo = (index: number) => {
    const toggleTodos = [...todos];
    toggleTodos[index].isComplete = !toggleTodos[index].isComplete;
    webStorage.updateTodo(index, toggleTodos[index]);
    setTodos(toggleTodos);
  };

  const updateTodo = (index: number, updateContent: string) => {
    if (inputValue.trim() == "") {
      alert("입력해야만 수정이 됩니다");
      return;
    }
    const updateTodos = [...todos];
    updateTodos[index].content = updateContent;
    webStorage.updateTodo(index, updateTodos[index]);
    setInputValue("");
    setSelectedId(null);
    setTodos(updateTodos);
  };

  const removeTodo = (id: number) => {
    const removeTodos = todos.filter((todo) => todo.id !== id);
    webStorage.removeTodo(id);
    setTodos(removeTodos);
  };

  useEffect(() => {
    const initialTodos = webStorage.getTodo();
    setTodos(initialTodos);
  }, [setTodos]);

  return {
    selectedId,
    setSelectedId,
    inputValue,
    setInputValue,
    webStorage,
    todos,
    setTodos,
    AddTodo,
    toggleTodo,
    updateTodo,
    removeTodo,
  };
};

export default useTodos;
