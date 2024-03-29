import React from "react";
import Key from "./Key";
import FuncKey from "./FuncKey";
import { Backspace } from "../svg/backspace";
import { Enter } from "../svg/Enter";

import "./Keyboard.css";

const Keyboard = (props) => {
  return (
    <div className="keyboard">
      <div className="key-row">
        <Key
          letter="ج"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ح"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="خ"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ه"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ع"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="غ"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ف"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ق"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ث"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ص"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ض"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
      </div>
      <div className="key-row">
        <Key
          letter="گ"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ک"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="م"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ن"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ت"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ا"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ل"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ب"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ی"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="س"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ش"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
      </div>
      <div className="key-row">
        <FuncKey
          letter="Backspace"
          icon={Backspace}
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="چ"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="و"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="پ"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="د"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ذ"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ر"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ز"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ژ"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ط"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
        <Key
          letter="ظ"
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
      </div>
      <div className="key-row">
        <FuncKey
          letter="Enter"
          icon={Enter}
          setLastKeyPress={props.setLastKeyPress}
          setKeyPressed={props.setKeyPressed}
        />
      </div>
    </div>
  );
};

export default Keyboard;
