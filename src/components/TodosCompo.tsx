import { useEffect } from "react";
import {
  Column2,
  TodoCommandSection,
  TodoCommandStatusDiv,
  TodoCompleteDiv,
  TodoContentDiv,
  TodoSection,
  TodoTitle,
} from "../styles/TodosStyle";
import logo from "../images/logo_ques.png";
import useTodos from "../hooks/useTodo";

const TodosCompo = () => {
  const {
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
  } = useTodos();

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
      {selectedId ? (
        <TodoCommandSection
          onSubmit={() => updateTodo(selectedId - 1, inputValue)}
        >
          <TodoCommandStatusDiv>
            <button type="submit">수정</button>
            <span onClick={() => removeTodo(selectedId)}>삭제</span>
          </TodoCommandStatusDiv>
          <input
            type="text"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </TodoCommandSection>
      ) : (
        <TodoCommandSection onSubmit={() => AddTodo(inputValue)}>
          <TodoCommandStatusDiv>
            <button type="submit">추가</button>
          </TodoCommandStatusDiv>
          <input
            type="text"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </TodoCommandSection>
      )}
    </Column2>
  );
};

export default TodosCompo;
