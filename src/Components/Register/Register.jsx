import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'

import {BsCreditCard2FrontFill} from 'react-icons/bs'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { AiOutlineReload } from 'react-icons/ai'
import {RiCloseFill} from 'react-icons/ri'
import prof from '../../images/prof.png'
import ReactToPrint from 'react-to-print';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {FaUserCheck,FaUserTimes,FaUserEdit} from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr'
import {ImCheckmark} from 'react-icons/im'
import XLSX from 'sheetjs-style'
import {FiLogOut} from 'react-icons/fi'
import jsPDF from 'jspdf';

import * as file from 'file-saver'
import axios from 'axios'
import { useEffect } from 'react';
import { tz } from '../apis';
import {TbFileInvoice} from  'react-icons/tb'
import { useRef } from 'react'
import './Register.css'
const Register = () => {
    const [gender, setgender] = useState('Male')
const [dob, setdob] = useState('')

    const [current, setcurrent] = useState('user')
    function regi(){
        axios.post(`${tz}/client/add`,{
      
            username:companyname,
            address:address+" "+city+" "+state+" "+zip,
            number:phone,
            terms:'NET 10',
            markup:'0',       
        }).then( res=>{
            setcreated(true)
            console.log(res)
            
        })
    }
        function regi2(){
       
            axios.post(`${tz}/siteuser/add`,{
                name:name,
                nc:'no',
                taxes:0,
                skill:skill,
                payrate:'-',
                otpayrate:'-',
                phone:phone2,
                address:add2,
                itin:ITIN,
                status:'Inactive',
                client:'-',
                email:email,
                gender:gender,
                dob:dob
             
        
        
        
            }).then(res=>{  
             
            setcreated(true)
            })
    }


const [companyname, setcompanyname] = useState('')
const [address, setaddress] = useState('')
const [zip, setzip] = useState('')

const [city, setcity] = useState('')
const [state, setstate] = useState('')
const [phone, setphone] = useState('')

const [phone2, setphone2] = useState('')
const [skill, setskill] = useState('')
const [ITIN, setITIN] = useState('')
const [add2, setadd2] = useState('')
const [name, setname] = useState('')
function pathn(){
    if(current==='user'){
        window.location.pathname='siteuser'
    }
    else{
        window.location.pathname='client'
    }
}
const [skildata, setskildata] = useState('')
useEffect(() => {
  
    axios
    .get(`${tz}/skills/getall`).then(res=>{
        console.log(res)
        setskildata(res.data.Skillsdata)
      })
    

  return () => {
    
  }
}, [])

const [created, setcreated] = useState(false)
const [email, setemail] = useState('')
const [Electrical, setElectrical] = useState(false)
const [sheet, setsheet] = useState(false)
const [other, setother] = useState(false)
const [othertrade, setothertrade] = useState('')
  return (
    <div className="register">
        <div className="register2">

        </div>
       {!created?
      current==='company'?
      <div className="subregister">
      <div className="sele">
      <h1>Create Account</h1>
       <div className="selecttype">
           {current==='user'?
   <>
   <button  onClick={e=>setcurrent('user')} className='purp rad'>User</button>
   <button className='groo rad2' onClick={e=>setcurrent('company')}>Company</button></>:
   <>
   
   <button className='groo rad'  onClick={e=>setcurrent('user')}>User</button>
   <button className='purp rad2'  onClick={e=>setcurrent('company')}>Company</button></>  
   }
       </div>
      </div>
      
      <h4>Please fill your company details!</h4>

      <div className="parenp">
       
      <div className="parin">
       
       <h3>Company Name</h3>
       <input type="text" onChange={e=>setcompanyname(e.target.value)} placeholder='Company Name' />
       </div>
       <div className="parin">
        
       <h3>Address</h3>
       <input type="text" onChange={e=>setaddress(e.target.value)} placeholder='Address' />
       </div>
      </div>
  <div className="parenp">
  <div className="parin">
       
       <h3>City</h3>
       <input onChange={e=>setcity(e.target.value)} type="text" placeholder='City' />
       </div>
       <div className="parin">

       <h3>State</h3>
       <input onChange={e=>setstate(e.target.value)} type="text" placeholder='State' />
       </div>
  </div>
     <div className="parenp">
     <div className="parin">
      <h3>Zip Code</h3>
      <input onChange={e=>setzip(e.target.value)} type="text" placeholder='Zip code' /></div>
      <div className="parin">
       
      <h3>Phone</h3>
      <input onChange={e=>setphone(e.target.value)} type="text" placeholder='Phone' />
      </div>
     </div>

     <div className="parin trade">
        <h1>TRADE COMPANY SERVE
</h1>
        <h1>Sheet Metal
 
            
        <input type="checkbox" checked={sheet===true} onClick={e=>sheet?setsheet(false):setsheet(true)} />
</h1><h1>Electrical Ect
    
<input type="checkbox" checked={Electrical===true} onClick={e=>Electrical?setElectrical(false):setElectrical(true)} />
</h1><h1>Other

<input type="checkbox"  checked={other===true} onClick={e=>other?setother(false):setother(true)} />
</h1>
{
    other&&
    
<input type="text" onChange={e=>setothertrade(e.target.value)} placeholder="type here" />
}
     </div>
     <div className="buttx">
       <button onClick={e=>regi()}>Submit</button>
     </div>


   </div>:
     <div className="subregister">
     <div className="sele">
     <h1>Registration form</h1>
      <div className="selecttype">
          {current==='user'?
  <>
  <button  onClick={e=>setcurrent('user')} className='purp rad'>User</button>
  <button className='groo rad2' onClick={e=>setcurrent('company')}>Company</button></>:
  <>
  
  <button className='groo rad'  onClick={e=>setcurrent('user')}>User</button>
  <button className='purp rad2'  onClick={e=>setcurrent('company')}>Company</button></>  
  }
      </div>
     </div>
     
     <h4>Please fill your Personal details!</h4>

     <div className="parenp">
      
     <div className="parin">
      
      <h3>Name</h3>
      <input type="text" onChange={e=>setname(e.target.value)} placeholder='Enter Name' />
      </div>
      <div className="parin">
       
      <h3>Address</h3>
      <input type="text" onChange={e=>setadd2(e.target.value)} placeholder='Address' />
      </div>
     </div>
     <div className="parenp">
      
      <div className="parin">
       
       <h3>Skill</h3>
     
<select name="cars" id="cars" value={skill} onChange={e=>setskill(e.target.value)}>

{
    skildata&&skildata.map(val=>(
        <>
        
<option value={val.name}>{val.name}</option>
        </>
    ))
}
</select>
       </div>
       <div className="parin">
        
       <h3>Phone</h3>
       <input type="text" onChange={e=>setphone2(e.target.value)} placeholder='Enter phone no' />
       </div>
      </div>
      <div className="parenp">
      
      <div className="parin">
       
       <h3>Gender</h3>
     
<select name="cars" id="cars" value={gender} onChange={e=>setgender(e.target.value)}>



<option value={'Male'}>Male</option>
<option value={'Female'}>Female</option>
</select>
       </div>
       <div className="parin">
        
       <h3>Date of Birth</h3>
       <input type="text" onChange={e=>setdob(e.target.value)} placeholder='Enter DOB' />
       </div>
      </div>
      <div className="parenp">
      
      <div className="parin">
       
       <h3>Email</h3>
       <input type="text" onChange={e=>setemail(e.target.value)} placeholder='Enter email' />
       </div>
      
      </div>

    <div className="buttx">
      <button onClick={e=>regi2()}>Submit</button>
    </div>


  </div>
     
     :
      <div className="subregister subreg">
      
      <div className="circltick">
<ImCheckmark  className='cfgt'/>
      </div>
      <h1>Your Account is active. You can login now</h1>

   <p>Password: 123456</p>
   <button className='loog' onClick={e=>pathn()} >Login</button>


   </div>

       }
    </div>
  )
}

export default Register