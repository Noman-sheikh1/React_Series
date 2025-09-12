import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
   const intervalRef = useRef(null);



  function handleStart() {
     if (intervalRef.current !== null) return; // already running
     setTime(time => time + 1); // increment immediately
    intervalRef.current =setInterval(()=>{
        setTime(time=>time+1);
     },1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }
function resetTimer(){
    handleStop();
    setTime(0);
}

  return (
    <>
      <h1>Time passed: {time} seconds</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <br/>
      <br/>
        <button onClick={resetTimer}>
       Reset
      </button>
    </>
  );
}