import React from "react";
import "./Key.css";

const Key = (props) => {
  return (
    <div className="key" onClick={() => props.setLastKeyPress(props.letter)}>
      {props.letter}
    </div>
  );
};

export default Key;
