import React, { useEffect, useState } from "react";

export default function TimerApp() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleRestart = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
      <h1>Time: {time}</h1>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handlePause} disabled={!isRunning}>Pause</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
