

import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ButtonComponent from './components/ButtonComponent';
import TimeInterval from './components/TimeInterval';
import { UserContext } from './UserContext';

function App() {
  const [count,SetCount]=useState(0);

  // function handleClick(){
  //     setCount(count+1);
    
  // }
  

  return (
    <>
      <div>
        <UserContext.Provider  value={{count ,SetCount}}>

        
        {/* <Card name="Noman">
          <h3> web developer</h3>
          <p>will finidh development  soon </p>
          <p>b.tech 4th year student at gehu</p>
          <p>here i am passing the content as  a childern props</p>
        </Card> */}
        {/* <ButtonComponent increment={handleClick} text ="click me">
              <h2>count:{ count}</h2>
              <h3>this the countr which is pass as a functional props </h3>
        </ButtonComponent> */}
          

      
          <h4> hello ji  My name is  noman sheikh</h4>
          
        <Card children=" i m the second card childer">

        </Card>
        {/* <TimeInterval/> */}
        </UserContext.Provider>
        
      </div>
     
    </>
  )
}

export default App
