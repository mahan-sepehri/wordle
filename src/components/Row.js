import React, { useEffect, useRef, useContext } from "react";
import ShowResultContext from "../context/showResult";
import scoreContext from "../context/scoreContext";
import gameContext from "../context/gameContext";

import dictionary from "../dictionary/dictionary";

import "./Row.css";

let activeTile = 0;

const Row = (props) => {
  const { answer } = useContext(gameContext);
  const { setShowResult, setHasLost } = useContext(ShowResultContext);
  const { streak, setStreak, highScore, setHighScore } =
    useContext(scoreContext);

  const rowRef = useRef();

  const tileRef1 = useRef();
  const tileRef2 = useRef();
  const tileRef3 = useRef();
  const tileRef4 = useRef();
  const tileRef5 = useRef();
  const tiles = [tileRef1, tileRef2, tileRef3, tileRef4, tileRef5];

  const showError = () => {
    const msg = document.querySelector(".error-msg");
    msg.classList.add("show");

    setTimeout(() => {
      if (msg) {
        msg.classList.add("exit");
      }
    }, 1500);
    setTimeout(() => {
      msg.classList.remove("show");
      msg.classList.remove("exit");
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem("streak", JSON.stringify(streak));
    if (streak > highScore) {
      setHighScore(streak);
    }
    localStorage.setItem("highscore", JSON.stringify(highScore));
  }, [streak, highScore, setHighScore]);

  const checkGuess = (guess) => {
    rowRef.current.classList.add("active-row");

    if (guess.join("") === answer) {
      tiles.forEach((tile) => tile.current.classList.add("green"));
      setStreak((current) => current + 1);
      setShowResult(true);
      setHasLost(false);
      return;
    }

    let remainingGuess = [];
    let remainingAnswer = [];
    let guessColor = [null, null, null, null, null];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        tiles[i].current.classList.add("green");

        document
          .querySelector(`[data-key='${guess[i]}']`)
          .setAttribute("data-state", "correct");

        guessColor[i] = "green";
      } else {
        remainingGuess.push(guess[i]);
        remainingAnswer.push(answer[i]);
      }
    }

    for (let i = 0; i < guessColor.length; i++) {
      if (
        !guessColor[i] &&
        remainingGuess.length > 0 &&
        remainingAnswer.includes(remainingGuess[0])
      ) {
        tiles[i].current.classList.add("yellow");
        guessColor[i] = "yellow";
        if (
          document
            .querySelector(`[data-key='${remainingGuess[0]}']`)
            .getAttribute("data-state") !== "correct"
        ) {
          document
            .querySelector(`[data-key='${remainingGuess[0]}']`)
            .setAttribute("data-state", "present");
        }
        remainingAnswer.splice(remainingAnswer.indexOf(remainingGuess[0]), 1);
        remainingGuess.splice(0, 1);
      } else if (!guessColor[i]) {
        tiles[i].current.classList.add("grey");

        if (
          document
            .querySelector(`[data-key='${tiles[i].current.textContent}']`)
            .getAttribute("data-state") !== "correct" &&
          document
            .querySelector(`[data-key='${tiles[i].current.textContent}']`)
            .getAttribute("data-state") !== "present"
        ) {
          document
            .querySelector(`[data-key='${remainingGuess[0]}']`)
            .setAttribute("data-state", "absent");
        }

        guessColor[i] = "grey";
        remainingGuess.splice(0, 1);
      }
    }
    if (props.activeRow === 6) {
      setStreak(0);
      setHasLost(true);
      setShowResult(true);
      return;
    }
  };

  const handleKeyDown = (key) => {
    // const key = e.key.toLowerCase();
    // const isLetter = key >= "ا" && key <= "ی";

    if (key === "Backspace") {
      if (activeTile === 0) {
        return;
      }
      activeTile--;
      tiles[activeTile].current.textContent = "";
      tiles[activeTile].current.classList.remove("active-tile");

      return;
    }
    if (activeTile > 4 && key !== "Enter") {
      return;
    } else if (activeTile > 4 && key === "Enter") {
      const guessed = tiles.map((tile) => tile.current.textContent);
      if (!dictionary.includes(guessed.join(""))) {
        showError();
        return;
      }
      tiles.forEach((tile) => tile.current.classList.remove("active-tile"));
      checkGuess(guessed);
      props.setActiveRow((current) => current + 1);
      activeTile = 0;
      props.setLastKeyPress("");
      return;
    }
    if (key.length === 1) {
      tiles[activeTile].current.textContent = key;
      tiles[activeTile].current.classList.add("active-tile");
      activeTile++;
    }
  };

  useEffect(() => {
    if (props.active && props.lastKeyPress) {
      handleKeyDown(props.lastKeyPress);
    }
  });

  return (
    <div className="row" ref={props.active ? rowRef : null}>
      <div className="error-msg">
        <p>کلمه در مخزن کلمات وجود ندارد.</p>
        {"\n"}
        <p>یک کلمه دیگر امتحان کنید.</p>
      </div>

      <div className="tile" ref={props.active ? tileRef1 : null}></div>
      <div className="tile" ref={props.active ? tileRef2 : null}></div>
      <div className="tile" ref={props.active ? tileRef3 : null}></div>
      <div className="tile" ref={props.active ? tileRef4 : null}></div>
      <div className="tile" ref={props.active ? tileRef5 : null}></div>
    </div>
  );
};

export default Row;
