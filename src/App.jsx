import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import InputWrite from "./components/InpuWrite";
import { Div } from "./app.js";

function App() {
  return (
    <Div className="app">
      <GlobalStyle />
      <InputWrite />
    </Div>
  );
}

export default App;
