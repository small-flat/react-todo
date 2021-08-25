import React, { useEffect, useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          id="add-text"
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button id="add-button" onClick={onClickTodoAdd}>
          追加
        </button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
                {/* <button onClick={onClickDelete(index)}>削除</button>
              上記の書き方だと、click時以外にもコールされてしまうので、アロー関数化しておく必要がある */}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
      <script src="src/index.js"></script>
    </>
  );
};
