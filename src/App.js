import React, { useState, useContext } from "react";

import Row from "./components/Row";
import Keyboard from "./components/Keyboard";

import StartModal from "./components/StartModal";
import ResultModal from "./components/ResultModal";
import ShowResultContext from "./context/showResult";

import "./App.css";

const App = () => {
  const [activeRow, setActiveRow] = useState(1);
  const [lastKeyPress, setLastKeyPress] = useState("");
  const [keyPressed, setKeyPressed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // const resetGame = () => {};

  const { showResult, hasLost } = useContext(ShowResultContext);
  return (
    <>
      {!gameStarted && <StartModal setGameStarted={setGameStarted} />}
      {showResult && (
        <ResultModal
          msg={hasLost ? "باختی" : "برنده‌شدی!"}
          setActiveRow={setActiveRow}
          setGameStarted={setGameStarted}
        />
      )}

      <div className="game-screen">
        <div className="row-container">
          <Row
            active={activeRow === 1 ? true : false}
            setActiveRow={setActiveRow}
            activeRow={activeRow}
            lastKeyPress={lastKeyPress}
            setLastKeyPress={setLastKeyPress}
          />
          <Row
            active={activeRow === 2 ? true : false}
            setActiveRow={setActiveRow}
            activeRow={activeRow}
            lastKeyPress={lastKeyPress}
            setLastKeyPress={setLastKeyPress}
          />
          <Row
            active={activeRow === 3 ? true : false}
            setActiveRow={setActiveRow}
            activeRow={activeRow}
            lastKeyPress={lastKeyPress}
            setLastKeyPress={setLastKeyPress}
          />
          <Row
            active={activeRow === 4 ? true : false}
            setActiveRow={setActiveRow}
            lastKeyPress={lastKeyPress}
            activeRow={activeRow}
            setLastKeyPress={setLastKeyPress}
          />
          <Row
            active={activeRow === 5 ? true : false}
            setActiveRow={setActiveRow}
            lastKeyPress={lastKeyPress}
            activeRow={activeRow}
            setLastKeyPress={setLastKeyPress}
          />
          <Row
            active={activeRow === 6 ? true : false}
            setActiveRow={setActiveRow}
            lastKeyPress={lastKeyPress}
            activeRow={activeRow}
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
    </>
  );
};

export default App;
