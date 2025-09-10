
import { useState } from 'react'
import './App.css'
import Accodion2 from './components/Accodion2'
import Accordion from './components/Accordion'
import CounterButton from './components/CounterButton'
import UserCard from './components/userCard'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLogin] = useState(false);

  let button;
  if (isLogin) {
    button = <LogoutBtn />;
  } else {
    button = <LoginBtn />;
  }

  function  handleClick(){
    alert("button clicked");
  }

  return (
    <div className='app_Container'>
      <UserCard name="Noman" age="21" />
      <UserCard name="Noman Sheikh" age="23" />
      <CounterButton />
      <div className='acordion_container'>
        <Accordion />
        <Accodion2 />
      </div>
      {button} 
     <button style={{ margin: "20px", padding: "20px", backgroundColor:"white",color:"black" }} onClick={handleClick}>
  Click Me
</button>

    </div>
  );
}
export default App;
