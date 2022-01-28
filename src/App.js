import React, { useState, useContext } from "react";

import Row from "./components/Row";
import Keyboard from "./components/Keyboard";

import StartModal from "./components/StartModal";
import ResultModal from "./components/ResultModal";
import ShowResultContext from "./context/showResult";
import scoreContext from "./context/scoreContext";
import nameDictionary from "./dictionary/nameDictionary";

import "./App.css";

const randomNum = Math.floor(Math.random() * nameDictionary.length);
let answer = nameDictionary[randomNum];

const App = () => {
  const [activeRow, setActiveRow] = useState(1);
  const [lastKeyPress, setLastKeyPress] = useState("");
  const [keyPressed, setKeyPressed] = useState(0);

  const { showResult, hasLost } = useContext(ShowResultContext);
  const { played, setPlayed } = useContext(scoreContext);
  return (
    <>
      {!played && <StartModal setPlayed={setPlayed} />}
      {showResult && (
        <ResultModal
          msg={hasLost ? "باختی" : "برنده شدی!"}
          setActiveRow={setActiveRow}
          answer={answer}
        />
      )}

      <div className="game-screen">
        <div className="game-header">
          <button className="how-to" onClick={() => setPlayed(false)}>
            ؟
          </button>
        </div>
        <div className="row-container">
          <Row
            active={activeRow === 1 ? true : false}
            setActiveRow={setActiveRow}
            activeRow={activeRow}
            lastKeyPress={lastKeyPress}
            setLastKeyPress={setLastKeyPress}
            answer={answer}
          />
          <Row
            active={activeRow === 2 ? true : false}
            setActiveRow={setActiveRow}
            activeRow={activeRow}
            lastKeyPress={lastKeyPress}
            setLastKeyPress={setLastKeyPress}
            answer={answer}
          />
          <Row
            active={activeRow === 3 ? true : false}
            setActiveRow={setActiveRow}
            activeRow={activeRow}
            lastKeyPress={lastKeyPress}
            setLastKeyPress={setLastKeyPress}
            answer={answer}
          />
          <Row
            active={activeRow === 4 ? true : false}
            setActiveRow={setActiveRow}
            lastKeyPress={lastKeyPress}
            activeRow={activeRow}
            setLastKeyPress={setLastKeyPress}
            answer={answer}
          />
          <Row
            active={activeRow === 5 ? true : false}
            setActiveRow={setActiveRow}
            lastKeyPress={lastKeyPress}
            activeRow={activeRow}
            setLastKeyPress={setLastKeyPress}
            answer={answer}
          />
          <Row
            active={activeRow === 6 ? true : false}
            setActiveRow={setActiveRow}
            lastKeyPress={lastKeyPress}
            activeRow={activeRow}
            setLastKeyPress={setLastKeyPress}
            answer={answer}
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
