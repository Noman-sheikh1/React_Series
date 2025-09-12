
import './App.css'

import { useRef } from 'react';
import Stopwatch from './StopWatch';

export default function App() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <div>


    <button onClick={handleClick}>
      Click me!
    </button>
    <div>
      <Stopwatch/>
         </div>
        </div>
  );
}

