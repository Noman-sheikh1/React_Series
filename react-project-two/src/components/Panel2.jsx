import React from 'react'
import "./Panel.css";

const Panel2 = (props) => {
   return (
    <div className="panel2">
      <h3>{props.title}</h3>
      {props.isActive ? (
        <p>{props.children}</p>
      ) : (
        <button onClick={props.onShow}>
          Show
        </button>
      )}
    </div>
  );
}

export default Panel2