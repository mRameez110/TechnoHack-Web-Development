import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState("");
  const [timeFormat, setTimeFormat] = useState("seconds");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    const userTime = parseInt(inputTime, 10);
    if (!isNaN(userTime) && userTime > 0) {
      let convertedTime = userTime;
      if (timeFormat === "minutes") {
        convertedTime *= 60;
      } else if (timeFormat === "hours") {
        convertedTime *= 3600;
      } else if (timeFormat === "days") {
        convertedTime *= 86400;
      }
      setTime(convertedTime);
      setIsActive(true);
    } else {
      alert("Please enter a valid countdown time.");
    }
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(0);
    setInputTime("");
    setIsActive(false);
  };

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  const handleTimeFormatChange = (e) => {
    setTimeFormat(e.target.value);
  };

  return (
    <div className="countdown-timer">
      <h1 className="timer-heading">Countdown Timer</h1>
      <div className="timer">
        <div className="timer-item">
          <span className="timer-value">
            {Math.floor(time / (60 * 60 * 24))}
          </span>
          <span className="timer-label">Days</span>
        </div>
        <div className="timer-item">
          <span className="timer-value">
            {Math.floor((time % (60 * 60 * 24)) / (60 * 60))}
          </span>
          <span className="timer-label">Hours</span>
        </div>
        <div className="timer-item">
          <span className="timer-value">
            {Math.floor((time % (60 * 60)) / 60)}
          </span>
          <span className="timer-label">Minutes</span>
        </div>
        <div className="timer-item">
          <span className="timer-value">{time % 60}</span>
          <span className="timer-label">Seconds</span>
        </div>
      </div>
      <div className="controls">
        {!isActive ? (
          <>
            <div className="format-selection">
              <select value={timeFormat} onChange={handleTimeFormatChange}>
                <option value="seconds">Seconds</option>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
                <option value="days">Days</option>
              </select>
            </div>
            <input
              type="number"
              value={inputTime}
              onChange={handleInputChange}
              placeholder={`Enter countdown time (${timeFormat})`}
              min="1"
              step="1"
            />
            <button className="start" onClick={startTimer}>
              Start
            </button>
          </>
        ) : (
          <button className="stop" onClick={stopTimer}>
            Stop
          </button>
        )}
        <button className="reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
