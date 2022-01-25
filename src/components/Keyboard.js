import React from "react";
import Key from "./Key";
import FuncKey from "./FuncKey";

import "./Keyboard.css";

const Keyboard = (props) => {
  return (
    <div className="keyboard">
      <div className="key-row">
        <Key letter="ج" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ح" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="خ" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ه" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ع" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="غ" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ف" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ق" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ث" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ص" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ض" setLastKeyPress={props.setLastKeyPress} />
      </div>
      <div className="key-row">
        <Key letter="گ" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ک" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="م" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ن" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ت" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ا" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ل" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ب" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ی" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="س" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ش" setLastKeyPress={props.setLastKeyPress} />
      </div>
      <div className="key-row">
        <Key letter="چ" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="و" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="پ" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="د" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ذ" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ر" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ز" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ژ" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ط" setLastKeyPress={props.setLastKeyPress} />
        <Key letter="ظ" setLastKeyPress={props.setLastKeyPress} />
      </div>
      <div className="key-row">
        <FuncKey letter="Enter" setLastKeyPress={props.setLastKeyPress} />
        <FuncKey letter="Backspace" setLastKeyPress={props.setLastKeyPress} />
      </div>
    </div>
  );
};

export default Keyboard;
