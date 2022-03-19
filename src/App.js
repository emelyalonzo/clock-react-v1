import React from "react";
import { DigitalClock } from "./components/index";
import "./App.css";
import CountDown from "./components/CountDown/CountDown";
import StopWatch from "./components/StopWatch/StopWatch";

function App() {
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <DigitalClock />
      <CountDown />
      <StopWatch />
    </div>
  );
}

export default App;
