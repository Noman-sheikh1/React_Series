import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
         <div style={{color:"black"}}>Home</div>
        <div
    
     style={{width:"60vh",height:"60vh",backgroundColor:'yellow'}}>
        
   <button onClick={()=>navigate("/about")}> about</button>
  
    </div>
    </div>
  )
}

export default Home