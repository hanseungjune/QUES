import { useEffect, useState } from "react";
import WebStorage, { todotype } from "../utils/WebStorage";
import {
  Column2,
  TodoCommandSection,
  TodoCommandStatusDiv,
  TodoCompleteDiv,
  TodoContentDiv,
  TodoSection,
  TodoTitle,
} from "../App.style";
import logo from "../images/logo_ques.png";

const TodosCompo = () => {
  const webStorage = new WebStorage();
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<todotype[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

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
    console.log(id);
    const removeTodos = todos.filter((todo) => todo.id !== id);
    webStorage.removeTodo(id);
    setTodos(removeTodos);
  };

  useEffect(() => {
    const initialTodos = webStorage.getTodo();
    setTodos(initialTodos);
  }, [setTodos]);

  useEffect(() => {
    let cnt = 0;
    todos.forEach((todo) => {
      if (todo.isComplete == true) {
        cnt++;
      }
    });

    if (cnt == todos.length && todos.length > 0) {
      alert("와우 오늘 해야할 일을 모두 해냈어요! 축하해요!");
      setTodos([]);
      todos.forEach((todo) => {
        webStorage.removeTodo(todo.id);
      });
    }
  }, [todos]);

  return (
    <Column2>
      <TodoTitle>
        <span>QuesDiary</span>
        <img src={logo} alt="logo" />
      </TodoTitle>
      {todos.map((todo, index) => (
        <TodoSection key={todo.id}>
          <TodoContentDiv
            style={
              selectedId === todo.id
                ? {
                    border: "3px solid green",
                    color: "darkgreen",
                    fontWeight: 900,
                    width: "226px",
                    height: "36px",
                  }
                : {}
            }
            onClick={() =>
              selectedId === null ? setSelectedId(todo.id) : setSelectedId(null)
            }
          >
            <span>{todo.content}</span>
          </TodoContentDiv>
          <TodoCompleteDiv
            onClick={() => toggleTodo(index)}
            style={
              todo.isComplete
                ? {
                    border: "3px solid green",
                    color: "darkgreen",
                    width: "36px",
                    height: "36px",
                    lineHeight: "36px",
                  }
                : { color: "gray" }
            }
          >
            <span>✓</span>
          </TodoCompleteDiv>
        </TodoSection>
      ))}
      <TodoCommandSection>
        <TodoCommandStatusDiv>
          {selectedId ? (
            <>
              <span onClick={() => updateTodo(selectedId - 1, inputValue)}>
                수정
              </span>
              <span onClick={() => removeTodo(selectedId)}>삭제</span>
            </>
          ) : (
            <span onClick={() => AddTodo(inputValue)}>추가</span>
          )}
        </TodoCommandStatusDiv>
        <input
          type="text"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
      </TodoCommandSection>
    </Column2>
  );
};

export default TodosCompo;
