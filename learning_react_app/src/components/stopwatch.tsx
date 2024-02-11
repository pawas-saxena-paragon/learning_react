import { useState } from "react";

export default function Stopwatch() {
  const [sec, setSec] = useState(0);
  const [intervalId, setIntervalId] = useState<
    number | undefined | NodeJS.Timer
  >(undefined);

  function resetInterval() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }

  return (
    <div className="App">
      <div>Time: {sec}</div>
      <button
        onClick={() => {
          resetInterval();
          const id = setInterval(() => {
            console.log("tick");
            setSec((sec) => sec + 1);
          }, 1000);

          setIntervalId(id);
        }}
      >
        Start
      </button>
      <button onClick={() => resetInterval()}>Stop</button>
      <button
        onClick={() => {
          resetInterval();
          setSec(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
