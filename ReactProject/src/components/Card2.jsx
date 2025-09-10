import React from 'react'
import { UserContext } from '../UserContext'
import { useContext } from 'react'

const Card2 = () => {
    const {count,SetCount}=useContext(UserContext);

  return (
    <div>
        <button onClick={()=>SetCount(count+1)}>
            click me 
        </button>
        count is after using useContext functionality :{count}


    </div>
  )
}

export default Card2