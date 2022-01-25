import React from "react";
// import ShowResultContext from "../context/showResult";

import "./ResultModal.css";

const ResultModal = (props) => {
  // const { setShowResult, setHasLost } = useContext(ShowResultContext);
  const handlePlayAgain = () => {
    // setHasLost(false);
    // props.setActiveRow(1);
    // setShowResult(false);
    window.location.reload(false);
  };
  return (
    <div className="overlay">
      <div className="result-modal">
        <h1>{props.msg}</h1>
        <h2>پاسخ : {props.answer}</h2>
        <button className="play-again-button" onClick={handlePlayAgain}>
          دوباره
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
