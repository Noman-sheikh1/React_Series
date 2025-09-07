import React from 'react'
import "./UserCard.css"
import nomanPhoto from "../assets/nomanPhoto.jpeg";
const UserCard = (props) => {
  return (
    <div className='userCard_container' >
        <h3>{props.name}-{props.age}</h3>
        <img className='img_container' src={nomanPhoto} alt='noman_img
        '></img>
        <p>description about me : b.tech 4th year student in cse department </p>
    </div>
  )
}

export default UserCard;