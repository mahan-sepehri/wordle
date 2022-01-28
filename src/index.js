import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import { ShowResultContextProvider } from "./context/showResult";
import { ScoreContextProvider } from "./context/scoreContext";
import { GameContextProvider } from "./context/gameContext";
ReactDOM.render(
  <ScoreContextProvider>
    <ShowResultContextProvider>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </ShowResultContextProvider>
  </ScoreContextProvider>,
  document.querySelector("#root")
);
