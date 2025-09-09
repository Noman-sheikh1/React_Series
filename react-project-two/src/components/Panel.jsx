import React, { useState } from 'react'
import "./Panel.css";

const Panel = ({title,children}) => {
    const [isActive,setIsActive]=useState(false);
  return (
    <div className='panel'>
        <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}

    </div>
  )
}

export default Panel;