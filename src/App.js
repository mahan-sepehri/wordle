import React, { useState } from "react";

import Row from "./components/Row";
import Keyboard from "./components/Keyboard";

import "./App.css";

const App = () => {
  const [activeRow, setActiveRow] = useState(1);
  const [lastKeyPress, setLastKeyPress] = useState("");
  const [keyPressed, setKeyPressed] = useState(0);
  return (
    <div className="game-screen">
      <div className="row-container">
        <Row
          active={activeRow === 1 ? true : false}
          setActiveRow={setActiveRow}
          lastKeyPress={lastKeyPress}
          setLastKeyPress={setLastKeyPress}
        />
        <Row
          active={activeRow === 2 ? true : false}
          setActiveRow={setActiveRow}
          lastKeyPress={lastKeyPress}
          setLastKeyPress={setLastKeyPress}
        />
        <Row
          active={activeRow === 3 ? true : false}
          setActiveRow={setActiveRow}
          lastKeyPress={lastKeyPress}
          setLastKeyPress={setLastKeyPress}
        />
        <Row
          active={activeRow === 4 ? true : false}
          setActiveRow={setActiveRow}
          lastKeyPress={lastKeyPress}
          setLastKeyPress={setLastKeyPress}
        />
        <Row
          active={activeRow === 5 ? true : false}
          setActiveRow={setActiveRow}
          lastKeyPress={lastKeyPress}
          setLastKeyPress={setLastKeyPress}
        />
        <Row
          active={activeRow === 6 ? true : false}
          setActiveRow={setActiveRow}
          lastKeyPress={lastKeyPress}
          setLastKeyPress={setLastKeyPress}
        />
      </div>
      <div className="keyboard-container">
        <Keyboard
          setLastKeyPress={setLastKeyPress}
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
        />
      </div>
    </div>
  );
};

export default App;
