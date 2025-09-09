
import './App.css'
import Accordion from './components/Accordion'
import CounterButton from './components/CounterButton'
import UserCard from './components/userCard'


function App() {
  
  return (
    <div className='app_Container'>
      
      <UserCard name="Noman"  age="21" />
      <UserCard name="noman Sheikh" age="23"/>
      <CounterButton/>
     <div className='acordion_container'>

       <Accordion/>
     </div>
    </div>
  )
};

export default App
