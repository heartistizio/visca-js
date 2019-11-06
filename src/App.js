import React from "react";
import "./App.css";
import { Out } from "./components/out";
import { CommandLine } from "./components/command-line";

const App = () => {
  return (
    <div className="App">
      <CommandLine></CommandLine>
      <Out></Out>
    </div>
  );
};

export default App;
