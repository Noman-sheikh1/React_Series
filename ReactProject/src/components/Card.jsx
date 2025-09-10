import React from 'react'
import Card2 from './Card2'

const Card = (props) => {
  return (
    <div className='cardClass'>
        {props.name}
        {props.children}
        <Card2/>
    </div>
  )
}

export default Card