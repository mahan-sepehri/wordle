import { createContext, useState } from "react";

const initialShowResult = {
  showResult: false,
  setShowResult: () => {},
  hasLost: false,
  setHasLost: () => {},
};

const ShowResultContext = createContext(initialShowResult);

export const ShowResultContextProvider = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  return (
    <ShowResultContext.Provider
      value={{ showResult, setShowResult, hasLost, setHasLost }}
    >
      {props.children}
    </ShowResultContext.Provider>
  );
};

export default ShowResultContext;
