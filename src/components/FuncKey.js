import React from "react";
import "./Key.css";

const FuncKey = (props) => {
  return (
    <div
      className="key func-key"
      onClick={() => {
        props.setLastKeyPress(props.letter);
        props.setKeyPressed((current) => current + 1);
      }}
    >
      {props.icon}
    </div>
  );
};

export default FuncKey;
