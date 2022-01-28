import React, { useContext, useState } from "react";
import scoreContext from "../context/scoreContext";
import ShowResultContext from "../context/showResult";
import gameContext from "../context/gameContext";

import { share } from "../svg/share";

import "./ResultModal.css";

const ResultModal = (props) => {
  const [copied, setCopied] = useState(false);
  const { setShowResult } = useContext(ShowResultContext);
  const { streak, highScore } = useContext(scoreContext);
  const { answer, getNewAnswer } = useContext(gameContext);
  const handlePlayAgain = () => {
    // window.location.reload(false);
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
      tile.textContent = "";
      tile.classList.remove("green");
      tile.classList.remove("yellow");
      tile.classList.remove("grey");
    });

    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
      key.removeAttribute("data-state");
    });

    getNewAnswer();
    props.setActiveRow(1);
    props.setLastKeyPress("");
    getNewAnswer();
    setShowResult(false);
  };

  const handleShare = () => {
    const text = `https://katoore.ir/ \n my highscore: ${highScore}`;
    if (navigator.share) {
      navigator.share({
        title: "نامزل",
        text: text,
      });
    } else {
      navigator.clipboard
        .writeText(text)
        .then(
          function () {},
          function (err) {
            console.error(err);
          }
        )
        .then(() => {
          setCopied(true);
          const msg = document.querySelector(".pop-msg");
          msg.classList.remove("exit");
          setTimeout(() => {
            if (msg) {
              msg.classList.add("exit");
            }
          }, 1000);
          setTimeout(() => {
            if (msg) {
              msg.classList.remove("exit");
            }
            setCopied(false);
          }, 1500);
        });
    }
  };

  return (
    <div className="overlay">
      <div className="result-modal">
        <h2>{props.msg}</h2>
        <div className="set-data">
          <h3 className="result-title">جواب : {answer}</h3>
          <p className="result-text">برد متوالی: {streak}</p>
          <p className="result-text">بیشترین امتیاز: {highScore}</p>
        </div>
        <button className="play-again-button" onClick={handlePlayAgain}>
          دوباره
        </button>
        <div className="share-container">
          <button className="share-button" onClick={handleShare}>
            {share}
          </button>
          {copied && <p className="pop-msg">کپی شد</p>}
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
