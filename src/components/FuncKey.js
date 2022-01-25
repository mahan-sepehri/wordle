import React from "react";
import "./Key.css";

const FuncKey = (props) => {
  return (
    <div
      className="func-key"
      onClick={() => props.setLastKeyPress(props.letter)}
    >
      {props.letter}
    </div>
  );
};

export default FuncKey;
