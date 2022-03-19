import React, { useEffect, useState } from "react";
import "./CountDown.scss";

const CountDown = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    let countDownDate = new Date("May 31, 2022 22:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("Finished");
      }
    }, 1000);
  }, []);
  return <div className="countDown">
    <h2>{time}</h2>
  </div>;
};

export default CountDown;
