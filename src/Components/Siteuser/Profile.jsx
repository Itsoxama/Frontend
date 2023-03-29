import React from 'react'
import prof from '../../images/prof.png'
const Profile = ({props}) => {

  return (
    <div className="profilepage">
        <img src={prof} alt="" />
        <h1>Name:</h1>
        <h6>{props.user.name}</h6> 
         <h1>Skill:</h1>
        <h6>{props.user.skill}</h6>
        
     
        <h1>Phone :</h1>
        <h6>{props.user.phone}</h6>
        <h1>Status:</h1>
        <h6>{props.user.status}</h6>

        <h1>Pay rate:</h1>
        <h6>{props.user.payrate} $</h6>
        <h1>Overtime rate:</h1>
        <h6>{props.user.otpayrate} $</h6>
        
    </div>
  )
}

export default Profile