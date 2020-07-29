import React, { useState } from "react";
import Template from "./components/Template";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    background: gray;
  }
`;
const todosinit = [
  {
    id: 1,
    text: "출근하기",
    checked: true,
  },
  {
    id: 2,
    text: "점심먹기",
    checked: true,
  },
  {
    id: 3,
    text: "퇴근하기",
    checked: false,
  },
];
function App() {
  const [todos, setTodos] = useState(todosinit);
  const [nextId, setNextId] = useState(4);
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
  };
  const onRemove = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const onAdd = (text) => {
    let newTodo = {
      id: nextId,
      text: text,
      checked: false,
    };
    setTodos(todos.concat(newTodo));
    setNextId((prev) => prev + 1);
  };
  return (
    <>
      <GlobalStyle />
      <Template
        onAdd={onAdd}
        todos={todos}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </>
  );
}
export default App;