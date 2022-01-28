import { createContext, useState } from "react";
import dictionary from "../dictionary/dictionary";

const initialGameState = {
  answer: "",
  getNewAnswer: () => {},
};

const gameContext = createContext(initialGameState);

export const GameContextProvider = (props) => {
  const randomNum = Math.floor(Math.random() * dictionary.indexOf("زوبین"));
  const [answer, setAnswer] = useState(dictionary[randomNum]);
  const getNewAnswer = () => {
    const rando = Math.floor(Math.random() * dictionary.indexOf("زوبین"));
    setAnswer(dictionary[rando]);
  };
  // let answer = dictionary[randomNum];
  return (
    <gameContext.Provider value={{ answer, getNewAnswer }}>
      {props.children}
    </gameContext.Provider>
  );
};

export default gameContext;
