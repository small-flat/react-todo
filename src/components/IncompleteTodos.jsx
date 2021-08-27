import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => {
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
  );
};
