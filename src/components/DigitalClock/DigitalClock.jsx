import React, { useState } from "react";
import "./DigitalClock.scss";

const DigitalClock = () => {
  const time = null;
  const [clockTime, setDate] = useState(time);
  const setTime = () => {
    setInterval(() => {
      let time = new Date();
      setDate(time.toLocaleTimeString());
    }, 1000);
  };
  return (
    <div className="digitalClock">
      <h3>Local Time:</h3>
      <h2>{clockTime}</h2>
      <button onClick={setTime}>Click me</button>
    </div>
  );
};

export default DigitalClock;
