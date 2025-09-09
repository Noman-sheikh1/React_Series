import React from 'react'

const Card = (props) => {
  return (
    <div className='cardClass'>
        {props.name}
        {props.children}
    </div>
  )
}

export default Card