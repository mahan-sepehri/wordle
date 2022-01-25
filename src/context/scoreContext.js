import { createContext, useState } from "react";

const initalScore = {
  streak: 0,
  setStreak: () => {},
};

const scoreContext = createContext(initalScore);

export const ScoreContextProvider = (props) => {
  const [streak, setStreak] = useState(+localStorage.getItem("streak") || 0);
  const saveScore = (streak) => {
    localStorage.setItem("streak", JSON.stringify(streak));
  };
  return (
    <scoreContext.Provider value={{ streak, setStreak, saveScore }}>
      {props.children}
    </scoreContext.Provider>
  );
};

export default scoreContext;
