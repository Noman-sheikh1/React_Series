import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const TimeInterval = () => {
const [seconds,setSeconds]=useState(0);
useEffect(()=>{
    const intervalId=setInterval(()=>{
        setSeconds(prevSeconds=>prevSeconds+1);
    },1000);
     return () => clearInterval(intervalId);
},[]);
  return (
    <div>
        <h2>second:{seconds}</h2>
    </div>
  )
}

export default TimeInterval