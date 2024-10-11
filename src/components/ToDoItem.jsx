import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone(() => {
      return !isDone;
    });
  }

  return (
    <div
      style={{
        textDecoration: isDone ? "line-through" : "none",
        color: "#fd6e6e",
      }}
      onClick={handleClick}
    >
      <li style={{ color: "#fd6e6e" }}>
        {props.text}
        <RemoveIcon
          style={{ color: "#fd6e6e", float: "right" }}
          size="small"
          onClick={() => {
            props.onChecked(props.id);
          }}
        />
      </li>
    </div>
  );
}

export default ToDoItem;
