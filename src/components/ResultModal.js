import React, { useContext } from "react";
import scoreContext from "../context/scoreContext";

import "./ResultModal.css";

const ResultModal = (props) => {
  const { highScore } = useContext(scoreContext);
  const handlePlayAgain = () => {
    window.location.reload(false);
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
      </div>
    </div>
  );
};

export default ResultModal;
