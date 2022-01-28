import { createContext, useState } from "react";

const initalScore = {
  streak: 0,
  setStreak: () => {},
};

const scoreContext = createContext(initalScore);

export const ScoreContextProvider = (props) => {
  const [played, setPlayed] = useState(localStorage.getItem("played") || false);
  const [streak, setStreak] = useState(+localStorage.getItem("streak") || 0);
  const [highScore, setHighScore] = useState(
    +localStorage.getItem("highscore") || 0
  );

  return (
    <scoreContext.Provider
      value={{
        streak,
        setStreak,
        highScore,
        setHighScore,
        played,
        setPlayed,
      }}
    >
      {props.children}
    </scoreContext.Provider>
  );
};

export default scoreContext;
