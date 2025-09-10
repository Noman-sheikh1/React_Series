

// import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ButtonComponent from './components/ButtonComponent';
import TimeInterval from './components/TimeInterval';
import { UserContext } from './UserContext';
import {createBrowserRouter, RouterProvider,Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';

import Root from './components/Root';


function App() {
  // const [count,SetCount]=useState(0);

  // function handleClick(){
  //     setCount(count+1);
    
  // }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Root contains <Outlet />
    children: [
      { path: "/", element: <Home /> },   // Home will render inside <Outlet />
      { path: "about", element: <About /> },
      { path: "help", element: <Help /> },
    ]
  }
]);



  

  return (
   
      <div>
      
        <RouterProvider router={router}/>
          
          
      
        
        
        
        
        
        {/* <UserContext.Provider  >

        
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
          

      
          {/* <h4> hello ji  My name is  noman sheikh</h4>
          
        <Card children=" i m the second card childer">

        </Card> */}
        {/* <TimeInterval/> */}
        {/* </UserContext.Provider> } */}
        
      </div>
     
   
  )
};

export default App


// import './App.css';
// import Card from './components/Card';
// import ButtonComponent from './components/ButtonComponent';
// import TimeInterval from './components/TimeInterval';
// import { UserContext } from './UserContext';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Home from './components/Home';
// import About from './components/About';
// import Help from './components/Help';
// import Root from './components/Root';

// function App() {
//   // const [count, SetCount] = useState(0);

//   // function handleClick() {
//   //   setCount(count + 1);
//   // }

//   return (
//     <BrowserRouter>
//       {/* Layout + Navigation */}
//       <Root /> 

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/help" element={<Help />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

