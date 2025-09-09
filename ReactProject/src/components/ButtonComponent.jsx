import React from 'react'

const ButtonComponent = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props. increment}>
             { props.text}
        </button>
    </div>
  )
}

export default ButtonComponent