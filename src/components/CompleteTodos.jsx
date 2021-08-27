import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              {todo}
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
