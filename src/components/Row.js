import React, { useEffect, useRef, useContext } from "react";
import ShowResultContext from "../context/showResult";
import scoreContext from "../context/scoreContext";
import dictionary from "../dictionary/dictionary";
import "./Row.css";

let activeTile = 0;

const Row = (props) => {
  const { setShowResult, setHasLost } = useContext(ShowResultContext);
  const { setStreak, saveScore, highScore, setHighScore } =
    useContext(scoreContext);

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
    }, 1000);
    setTimeout(() => {
      msg.classList.remove("show");
      msg.classList.remove("exit");
    }, 1500);
  };

  const checkGuess = (guess) => {
    if (guess.join("") === props.answer) {
      tiles.forEach((tile) => tile.current.classList.add("green"));

      setStreak((current) => {
        if (current + 1 > highScore) {
          setHighScore(current + 1);
        }
        saveScore(current + 1, current + 1);
        return current++;
      });
      setShowResult(true);
      setHasLost(false);
      return;
    }

    let remainingGuess = [];
    let remainingAnswer = [];
    let guessColor = [null, null, null, null, null];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === props.answer[i]) {
        tiles[i].current.classList.add("green");

        document
          .querySelector(`[data-key='${guess[i]}']`)
          .setAttribute("data-state", "correct");

        guessColor[i] = "green";
      } else {
        remainingGuess.push(guess[i]);
        remainingAnswer.push(props.answer[i]);
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
      setHasLost(true);
      setShowResult(true);
      setStreak(() => {
        saveScore(0, highScore);
        return 0;
      });
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
      checkGuess(guessed);
      props.setActiveRow((current) => current + 1);
      activeTile = 0;
      props.setLastKeyPress("");
      return;
    }
    if (key.length === 1) {
      tiles[activeTile].current.textContent = key;
      activeTile++;
    }
  };

  useEffect(() => {
    // if (props.active) {
    //   document.addEventListener("keydown", handleKeyDown);
    // }

    if (props.active && props.lastKeyPress) {
      handleKeyDown(props.lastKeyPress);
    }
  });

  return (
    <div className="row">
      <div className="error-msg">
        <p>کلمه در مخزن کلمات وجود ندارد.</p>
        {"\n"}
        <p>یک کلمه دیگه امتحان کنید.</p>
      </div>

      <div className="tile first" ref={props.active ? tileRef1 : null}></div>
      <div className="tile" ref={props.active ? tileRef2 : null}></div>
      <div className="tile" ref={props.active ? tileRef3 : null}></div>
      <div className="tile" ref={props.active ? tileRef4 : null}></div>
      <div className="tile" ref={props.active ? tileRef5 : null}></div>
    </div>
  );
};

export default Row;
