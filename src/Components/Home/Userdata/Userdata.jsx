import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { AiOutlineReload } from 'react-icons/ai'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import axios from 'axios'
import { useEffect } from 'react';
import { tz } from '../../apis';
const Userdata = () => {
    
const [adduser, setadduser] = useState('adduser2')
const [value, onChange] = useState(new Date());

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [pass, setpass] = useState('')
const [checkintime, setcheckintime] = useState('')
const [chkouttime, setchkouttime] = useState('')
const [c, setc] = useState(0)
function onChanges(e) {
console.log(e)
    
}
function submit() {
    
if(actiontype==='update')
{
    var rt=ids.split('4sd')
    axios.post(`${tz}/user/updatedata`,{
        email:email,
        username:name,
        password:pass,
        chkintime:checkintime,
        chkouttime:chkouttime,
        _id:rt[0]

       



    }).then(res=>{  
        axios.get(`${tz}/user/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.User)
            setadduser('adduser2')
            setactiontype('edit')
            
        setname('')
        setemail('')
        setpass('')
        setcheckintime('')
        setchkouttime('')
          })
    })
}
else{

    axios.post(`${tz}/user/add`,{
        email:email,
        username:name,
        password:pass,
        chkintime:checkintime,
        chkouttime:chkouttime
    }).then( res=>{
        console.log(res)
        
    }).then(()=>{
        setadduser('adduser2')
         axios.get(`${tz}/user/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.User)
    })
    })
}

    
}
const [userd, setuserd] = useState()

useEffect(() => {
    axios.get(`${tz}/user/getall`).then(res=>{
        console.log(res)
        setuserd(res.data.User)
    })

  return () => {
    
  }
}, [])
const [o, seto] = useState(0)
const [arr, setarr] = useState([])
function deletedata(){
    console.log(ids)
    var r=ids.split('4sd')
    r[r.length-1]= r[r.length-2]
    setuserd()
    axios.post(`${tz}/user/delete`,{
      ids:r



    }).then(res=>{  
        console.log(res)
        setids('')
        axios.get(`${tz}/user/getall`).then(res2=>{
            console.log(res2)
            setuserd(res2.data.User)
            setids('')
          })
    })
}
function fillall(){
    console.log(ids)
    if(o===0){
        setarr([])
        seto(1)
        setids('')
        userd.forEach(elem => {
            setids(ids=>ids+elem._id+'4sd')
        
        });
    }
    else{
        setids('')
        seto(0)

    }

}
const [ids, setids] = useState('')
function update(){
setactiontype('update')
    setadduser('adduser')
    var idx=ids.split('4sd')
userd.forEach(val => {
        if(val._id===idx[0]){
            setname(val.username)
        setemail(val.email)
        setpass(val.password)
        setcheckintime(val.chkintime)
        setchkouttime(val.chkouttime)

        }


    })
}

const [actiontype, setactiontype] = useState('edit')
var data=[
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",


]
    return (
        <>
        
        <div className={adduser}>
            <div className="subadduser">
              {c===0&&
              <>
                <div className="inputname">
                    <h1>User Name</h1>
                    <input value={name} onChange={e=>setname(e.target.value)} type="text" />

                </div>
                <div className="inputname">
                    <h1>Email</h1>
                    <input value={email} onChange={e=>setemail(e.target.value)}  type="text" />

                </div>
                <div className="inputname">
                    <h1>Password</h1>
                    <input value={pass} onChange={e=>setpass(e.target.value)}  type="text" />

                </div>
                <div className="inputname">
                    <h1>Checkin Time</h1>
                    <select className='select2' onChange={e=>setcheckintime(e.target.value)} name="cars" id="cars">
                       
                       <>
                       {
                        actiontype==='update'&&
                        
                       <option value={checkintime}>{checkintime}</option>
                       }
                        {data.map(val=>(
                            <>
                            
                        <option value={val}>{val}</option>
                            </>
                        ))

                        }
                        </>
                        <option value="mercedes">Employee</option>
                    </select>
                </div>
                
                <div className="inputname">
                    <h1>Checkout Time</h1>
                    <select className='select2' onChange={e=>setchkouttime(e.target.value)} name="cars" id="cars">
                      
                      <>  
                      {
                        actiontype==='update'&&
                        
                       <option value={chkouttime}>{chkouttime}</option>
                       }
                      {data.map(val=>(
                            <>
                            
                        <option value={val}>{val}</option>
                            </>
                        ))
                        

                        }
                        </>
                        <option value="mercedes">Employee</option>
                    </select>
                </div>
                <button onClick={e=>submit()} className='btn1'>Submit</button>
                <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>

              </>

              }


            </div>

        </div>
        <div className="usersdata">

            <div className="topusersdata">
                <BiUserCircle className='usio' />
                <h1>Users</h1>
                <div className="filter">
                    <select className='select' name="cars" id="cars">
                        <option value="volvo">Role</option>
                        <option value="saab">Admin</option>
                        <option value="mercedes">Employee</option>
                    </select>


                </div>
                <div className="filter">
                    <select className='select' name="cars" id="cars">
                        <option value="volvo">Role</option>
                        <option value="saab">Admin</option>
                        <option value="mercedes">Employee</option>
                    </select>


                </div>

                
                <button onClick={e=>deletedata()} className='addemp3'>Delete</button>
                {ids&&ids.split('4sd').length<=2&&

<button onClick={e=>update()} className='addemp2'>Update</button>
                }
                <button onClick={e=>setadduser('adduser')}>Add User</button>
                <div className="spo">
                    <FiDownload className='fid' />
                </div>
                <div className="spo">
                    <AiOutlineReload className='fis' />
                </div>



            </div>

            <div className="tablerow">
              <div className="subtable">
              <div className="headertable clop">
              <span className='sxx'> <input type="checkbox"  onClick={e=>fillall()} checked={o===1} /> </span>
                  
                    <h1>Employee</h1>
                    <h2>Email</h2>
                    <h3>Checkin Time</h3>
                    <h4>Checkout Time</h4>


                </div>
                {userd&&userd.map(val=>(
                    <>
                     <div className="headertable">
                     <span className='sxx'> <input type="checkbox"  checked={ids.search(val._id)>=0} onClick={e=>ids.search(val._id)>=0?setids(ids.replace(val._id+'4sd','')):setids(ids+val._id+'4sd')} /> </span>
                  
                    <h1><img src={val.img} alt="" className='valimg' /> {val.username}</h1>
                    <h2>{val.email}</h2>
                    <h3>{val.chkintime}</h3>
                    <h4>{val.chkouttime}</h4>


                </div>
                    </>
                ))

                }
              </div>
            </div>
        </div></>
    )
}

export default Userdata