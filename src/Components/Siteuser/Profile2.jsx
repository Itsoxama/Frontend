import React, { useEffect, useState } from 'react'
import prof from '../../images/prof.png'

import { tz } from '../apis'

import app from '../../firebase.config'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios'
const Profile2 = ({props}) => {
const [adduser, setadduser] = useState('adduser2')
const [skildata, setskildata] = useState()

const [name, setname] = useState(props.user.name)
const [skill, setskill] = useState(props.user.skill)
const [phone, setphone] = useState(props.user.phone)
const [status, setstatus] = useState(props.user.status)
useEffect(() => {
    axios.get(`${tz}/skills/getall`).then(res=>{
        console.log(res)
        setskildata(res.data.Skillsdata)
      })
      axios.post(`${tz}/siteuser/find`,{
         
         
        Siteuserd_id:props.user._id
    }).then((resa2)=>{
        setname(resa2.data.Siteuserd[0].name)
        setphone(resa2.data.Siteuserd[0].phone)
        setskill(resa2.data.Siteuserd[0].skill)
        setstatus(resa2.data.Siteuserd[0].status)

        
       

    })
  return () => {
    
  }
}, [])
const [changep, setchangep] = useState('Change profile photo')
function fileupload(filex){
    setchangep('Uploading...')
    var d= new Date()
    console.log(d.getTime())
    
const storage = getStorage();
const storageRef = ref(storage, `images/${d.getTime().toString()}`);

const uploadTask = uploadBytesResumable(storageRef, filex);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);

      axios.post(`${tz}/siteuser/profilechange`,{
         
         
     _id:props.user._id,
     imgurl:downloadURL
    }).then((resa2)=>{
        alert('Profile picture changed successfully')
        window.location.reload()

        
       

    })


    });
  }
);
}
function submit(){
    axios.post(`${tz}/siteuser/updatefromuser`,{
        skill:skill,
        _id:props.user._id,
        name:name,
        phone:phone,
        status:status

    }).then((resa)=>{

        axios.post(`${tz}/siteuser/find`,{
         
         
            Siteuserd_id:props.user._id
        }).then((resa2)=>{
            setname(resa2.data.Siteuserd[0].name)
            setphone(resa2.data.Siteuserd[0].phone)
            setskill(resa2.data.Siteuserd[0].skill)
            setstatus(resa2.data.Siteuserd[0].status)
    alert('Profile updated')
            setadduser('adduser2')
           
    
        })

    })
}
  return (
    <>
       <div className={adduser}>
            <div className="subadduser fsubadd">
         
              <>
             
                
                <div className="inputname">
                    <h1>Skill</h1>
                    <select name="cars" id="cars" value={skill} onChange={e=>setskill(e.target.value)}>
{skildata&&skildata.map(val=>(
      <option value={val.name}>{val.name}</option>
))

}
</select>
                </div>
                <div className="inputname">
                    <h1>Phone</h1>
                    <input onChange={e=>setphone(e.target.value)} type="text" value={phone} />

                </div>
              
                <div className="inputname"></div>
                <button className='btn1' onClick={e=>submit()}>Submit</button>
                <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>
<div className="inputname"></div>
              </>

              


            </div>

        </div>
    <div className="profilepage">
        {!props.user.imgurl?
        
        <img src={prof} alt="" />:
        
        <img className='resizeimg' src={props.user.imgurl} alt="" />

        }
      <h1>  <button className='updatep rtp'>{changep}

<input type='file' onChange={e=>fileupload(e.target.files[0])} />

</button></h1>
        <h1>Name:</h1>
        <h6>{name}</h6> 
         <h1>Skill:</h1>
        <h6>{skill}</h6>
        
     
        <h1>Phone :</h1>
        <h6>{phone}</h6>
        <h1>Status:</h1>
        <h6>{status}</h6>

      {/*
        <h1>Pay rate:</h1>
        <h6>{props.user.payrate} $</h6>
        <h1>Overtime rate:</h1>
        <h6>{props.user.otpayrate} $</h6>
  */}  
        <button onClick={e=>setadduser('adduser')} className='updatep'>Update Profile</button>
        
        
    </div>
    </>
  )
}

export default Profile2