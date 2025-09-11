import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount,reset } from "./features/counter/counterSlice";
import "./App.css";
 

export  default function App() {
  const count = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();
  const [amount,setAmount]=useState(0);

  function handleClickDecrement(){
  dispatch(decrement());
  }
function handleClickIncrement(){
  dispatch(increment());
  }
  function handleReset(){
  dispatch(reset());
  }
  function handleIncrementByAmount(){
  dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <div>
        <button style={{margin:"20px"}}
          aria-label="Increment value"
          onClick={handleClickIncrement}
        >
          Increment
        </button>
        <span> count :{count}</span>
        <button style={{margin:"20px"}}
          aria-label="Decrement value"
          onClick={handleClickDecrement}
        >
          Decrement
        </button>
        <br/>
        <br/>
        <button style={{margin:"20px"}}
          onClick={handleReset}
        >
         Reset
        </button>
        <br/>
        <br/>

        <input type="number " value={amount}
         placeholder="enter Amount" 
         onChange={(e)=>setAmount(e.target.value)}></input>
        <br/>
          <button style={{margin:"20px"}}
          onClick={handleIncrementByAmount}
        >
         IncrementByAmount
        </button>
      </div>
    </div>
  );
}
