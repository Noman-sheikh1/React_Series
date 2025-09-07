import React, { useState } from 'react'
import "./CounterButton.css"


const CounterButton = () => {
    const [count,setCount]=useState(0);
  return (
    <div className='counter'>
        <button  onClick={()=>{setCount(count-1)}}>Decrease</button>
        <h3>Count:{count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
    </div>
  )
}

export default CounterButton