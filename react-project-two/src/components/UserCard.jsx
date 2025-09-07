import React from 'react'
import "./UserCard.css"
import nomanPhoto from "../assets/nomanPhoto.jpeg";
const UserCard = () => {
  return (
    <div className='userCard_container'>
        <h3>hello my name is  noman</h3>
        <img className='img_container' src={nomanPhoto} alt='noman_img
        '></img>
        <p>description about me : b.tech 4th year student in cse department </p>
    </div>
  )
}

export default UserCard;