import React, { useContext, useState } from "react";
import scoreContext from "../context/scoreContext";
import { share } from "../svg/share";

import "./ResultModal.css";

const ResultModal = (props) => {
  const [copied, setCopied] = useState(false);
  const { highScore } = useContext(scoreContext);
  const handlePlayAgain = () => {
    window.location.reload(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "نامزل",
        url: `${window.document.url}`,
        text: "بیا نامزل بازی کن",
      });
    } else {
      const text = `https://quizzical-carson-c0f478.netlify.app/ \n my highscore: ${highScore}`;
      navigator.clipboard
        .writeText(text)
        .then(
          function () {
            console.log("Async: Copying to clipboard was successful!");
          },
          function (err) {
            console.error("Async: Could not copy text: ", err);
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
        <h1>{props.msg}</h1>
        <div className="set-data">
          <h2>جواب : {props.answer}</h2>
          <p>برد متوالی: {localStorage.getItem("streak")}</p>
          <p>بیشترین امتیاز: {highScore}</p>
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
