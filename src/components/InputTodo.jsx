import React from "react";

//cssファイルからstyleをJSの方へ移動するパターン
//cssファイルをそのまま使う方が良い場合もある。チーム内の選択次第。
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "1rem",
  margin: "1rem",
  borderRadius: "0.5rem"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input
        id="add-text"
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
