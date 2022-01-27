import { createContext, useState } from "react";

const initalScore = {
  streak: 0,
  setStreak: () => {},
};

const scoreContext = createContext(initalScore);

export const ScoreContextProvider = (props) => {
  const [streak, setStreak] = useState(+localStorage.getItem("streak") || 0);
  const [highScore, setHighScore] = useState(
    +localStorage.getItem("highscore") || 0
  );
  const saveScore = (streak, highScore) => {
    localStorage.setItem("streak", JSON.stringify(streak));
    localStorage.setItem("highscore", JSON.stringify(highScore));
  };

  return (
    <scoreContext.Provider
      value={{ streak, setStreak, saveScore, highScore, setHighScore }}
    >
      {props.children}
    </scoreContext.Provider>
  );
};

export default scoreContext;
