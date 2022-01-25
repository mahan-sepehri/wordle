import React, { useEffect, useRef } from "react";
import "./Row.css";
import dictionary from "../dictionary/dictionary";

let activeTile = 0;
const randomNum = Math.floor(Math.random() * dictionary.length);
let answer = dictionary[randomNum];
const Row = (props) => {
  const tileRef1 = useRef();
  const tileRef2 = useRef();
  const tileRef3 = useRef();
  const tileRef4 = useRef();
  const tileRef5 = useRef();
  const tiles = [tileRef1, tileRef2, tileRef3, tileRef4, tileRef5];

  const checkGuess = (guess) => {
    if (guess.join("") === answer) {
      tiles.forEach((tile) => tile.current.classList.add("green"));
      return console.log("you win");
    }
    let remainingGuess = [];
    let remainingAnswer = [];
    let guessColor = [null, null, null, null, null];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        tiles[i].current.classList.add("green");
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
        remainingAnswer.splice(remainingAnswer.indexOf(remainingGuess[0]), 1);
        remainingGuess.splice(0, 1);
      } else if (!guessColor[i]) {
        tiles[i].current.classList.add("grey");

        guessColor[i] = "grey";
        remainingGuess.splice(0, 1);
      }
    }
  };

  const handleKeyDown = (key) => {
    // const key = e.key.toLowerCase();
    const isLetter = key >= "ا" && key <= "ی";

    if (key === "Backspace") {
      if (activeTile === 0) {
        return;
      }
      activeTile--;
      tiles[activeTile].current.textContent = "";
      return;
    }
    if (activeTile > 4 && key !== "Enter") {
      return console.log(activeTile, "no more");
    } else if (activeTile > 4 && key === "Enter") {
      const guessed = tiles.map((tile) => tile.current.textContent);
      document.removeEventListener("keydown", handleKeyDown);
      checkGuess(guessed);
      props.setActiveRow((current) => current + 1);
      activeTile = 0;
      props.setLastKeyPress("");
      return;
    }
    if (key.length === 1 && isLetter) {
      tiles[activeTile].current.textContent = key;
      activeTile++;
    }
  };

  useEffect(() => {
    // if (props.active) {
    //   document.addEventListener("keydown", handleKeyDown);
    // }

    if (props.active && props.lastKeyPress) {
      console.log(props.lastKeyPress);
      handleKeyDown(props.lastKeyPress);
    }
  });

  return (
    <div className="row">
      <div className="tile first" ref={props.active ? tileRef1 : null}></div>
      <div className="tile" ref={props.active ? tileRef2 : null}></div>
      <div className="tile" ref={props.active ? tileRef3 : null}></div>
      <div className="tile" ref={props.active ? tileRef4 : null}></div>
      <div className="tile" ref={props.active ? tileRef5 : null}></div>
    </div>
  );
};

export default Row;
