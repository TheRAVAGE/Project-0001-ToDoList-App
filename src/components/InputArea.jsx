import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.changeInput} type="text" value={props.inputText} />
      <button onClick={props.addNewItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
