import React from "react";
import "./Key.css";

const Key = (props) => {
  return (
    <div
      className="key"
      data-key={props.letter}
      onClick={() => {
        props.setLastKeyPress(props.letter);
        props.setKeyPressed((current) => current + 1);
      }}
    >
      {props.letter}
    </div>
  );
};

export default Key;
