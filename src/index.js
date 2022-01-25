import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import { ShowResultContextProvider } from "./context/showResult";
import { ScoreContextProvider } from "./context/scoreContext";
ReactDOM.render(
  <ScoreContextProvider>
    <ShowResultContextProvider>
      <App />
    </ShowResultContextProvider>
  </ScoreContextProvider>,
  document.querySelector("#root")
);
