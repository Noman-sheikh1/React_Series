import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [input, setInput] = useState(""); // keep as string

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // pretend heavy work
    return num * 2;
  };

  const double = useMemo(() => {
    if (input === "") return 0; // safe check
    return expensiveCalculation(Number(input));
  }, [input]);

  return (
    <div  style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h1>Count: {count}</h1>
      <button style={{margin:'10px',padding:'10px'}} onClick={() => setCount(c => c + 1)}>Increment</button>
      <br /><br />
      <button style={{margin:'10px',padding:'10px'}} onClick={() => setDark(d => !d)}>Toggle Theme</button>
      <br />
      <input style={{margin:'10px',padding:'10px'}}
        type="number"
        value={input}
        placeholder="Enter value"
        onChange={(e) => setInput(e.target.value)} // keep as string
      />
      <div style={{margin:'10px',padding:'10px'}}><h2>Double: {double}</h2></div>
    </div>
  );
}
