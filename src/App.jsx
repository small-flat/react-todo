// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickTodoAdd = () => {
    // alert(todoText);
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]; //incompleteTodosをcopyし、todoTextを末尾に追加
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    // alert(index);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    // alert(index);
    const newIncomplateTodos = [...incompleteTodos];
    newIncomplateTodos.splice(index, 1);
    setIncompleteTodos(newIncomplateTodos);

    const newComplateTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newComplateTodos);
  };
  const onClickBack = (index) => {
    // alert(index);
    const newComplateTodos = [...completeTodos];
    newComplateTodos.splice(index, 1);
    setCompleteTodos(newComplateTodos);

    const newIncomplateTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncomplateTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickTodoAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "#f00" }}>登録できるtodoは5つまでです。</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
      <script src="src/index.js"></script>
    </>
  );
};
