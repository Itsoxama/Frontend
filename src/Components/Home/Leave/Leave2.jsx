import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import axios from 'axios'
import 'react-calendar/dist/Calendar.css';
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { tz } from '../../apis';
import { useEffect } from 'react';
const Leave2 = () => {
    
const [adduser, setadduser] = useState('adduser2')
const [value, onChange] = useState(new Date());

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [pass, setpass] = useState('')
const [c, setc] = useState(0)

function onChanges(e) {
console.log(e)
    
}
const [date, setdate] = useState('')
const [username, setusername] = useState('Lynda koo')
const [leave, setleave] = useState('')
function submit() {
    
    axios.post(`${tz}/leave/add`,{
        username:username,
        status:'Pending',
        date:date,
        leave:leave,
    }).then( res=>{
        console.log(res)
        
    }).then(()=>{
        setadduser('adduser2')
         axios.get(`${tz}/leave/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.Leave)
    })
    })
    
}
const [userd, setuserd] = useState()

useEffect(() => {
    axios.get(`${tz}/leave/getall`).then(res=>{
        console.log(res)
        setuserd(res.data.Leave)
    }).catch(err=>console.log(err))

  return () => {
    
  }
}, [])
var data2=['Jose Ros','Lynda Game','Alex Kuu','John Voo','Tros poo']


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

function approve(val,val1) {
    axios.post(`${tz}/leave/updatestatus`,{
        status:val1,
        id:val
    }).then( res=>{
        console.log(res)
        
    }).then(()=>{
        setadduser('adduser2')
         axios.get(`${tz}/leave/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.Leave)
    })
    })



    
}
const [task, settask] = useState('')
const [tasks, settasks] = useState([])
const [mem, setmem] = useState([])

const [mems, setmems] = useState('')
const [title, settitle] = useState('')
const [last, setlast] = useState('')
function addtask() {
settasks(tsk=>[...tsk,task])
settask('')
}
function addtask2() {
    setmem(tsk=>[...tsk,mems])

    }

    return (
        <>
        
        <div className={adduser}>
            <div className="subadduser">
              {c===0&&
              <>
                <div className="inputname inui">
                    <h1>Leave</h1>
                    <textarea onChange={e=>setleave(e.target.value)} />

                </div>
                <div className="inputname">
                    <h1>Leave Date</h1>
                    <input onChange={e=>setdate(e.target.value)}  type="text" />

                </div>
                <div className="inputname"></div>
               
                <div className="inputname inputname2">
                <h1>Send to</h1>
                {mem&&mem.map((val,index)=>(
                    <>
                    <p>{index+1}. {val}</p>
                    </>
                ))

                }
                <select onChange={e=>setmems(e.target.value)} className='select2' name="cars" id="cars">
                    {data2.map(val=>(
                        <>
                        
  <option value={val}>{val}</option>
                        </>
                    ))

                    }
</select>
                </div>
                <button onClick={e=>addtask2()}   className='btn3'>+ Add Recipient</button>
             <div className="inputname3">
             <button onClick={e=>submit()} className='btn1'>Submit</button>
                <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>

             </div>
              </>

              }


            </div>

        </div>
        <div className="temphead">
            
        </div>
        <div className="usersdata">

            <div className="topusersdata fixedheader">
                <BiUserCircle className='usio' />
                <h1>Leaves</h1>
              
             


            </div>
            <div className="producheader">
                <span>
                    <div className="ricircle">
                        <div className="priconpar">
                            <RiLightbulbFlashLine className='pricon' />
                        </div>
                        <p className='sss'>{userd&&userd.length}</p>
                    </div>
                    <h1>Total Leaves</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon2">
                            <BiTime className='pricon ' />
                        </div>
                        <p>4</p>
                    </div>
                    <h1>Vacation Leaves</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon3">
                            <MdSnooze className='pricon ' />
                        </div>
                        <p>{userd&&userd.length}</p>
                    </div>
                    <h1>Sick Days </h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon4">
                            <RiTimerFlashFill className='pricon ' />
                        </div>
                        <p>8</p>
                    </div>
                    <h1>Days Out</h1>

                </span>

            </div>
            <div className="tablerow">
              <div className="subtable">
              <div className="headertable clop headerxtab">
                    <h1>Username</h1>
                    <h2>Date</h2>
                    <h2>Leave</h2>
                    <h3>Status</h3>
                    <h2>Action</h2>
                    <h2></h2>


                </div>
                {userd&&userd.map(val=>(
                    <>
                     <div className="headertable headerxtab">
                    <h1>{val.username}</h1>
                    <h2>{val.date}</h2>
                    <h2>{val.leave.substring(0,15)}</h2>
                 {val.status==='Pending'?
                 
                 <h2 style={{color:'rgb(218, 167, 14)'}}>Day Out</h2>
                 :val.status==='Approved'?
                 
                 <h2 style={{color:'rgb(3, 143, 9'}}>Vacation</h2>
                 :
                 
                 <h2 style={{color:'rgb(241, 94, 94)'}}>Sick Day</h2>

                 }
                       <h2><button onClick={e=>approve(val._id,'Approved')} className='btn1 btnm'>Approve</button></h2>
                       <h2><button onClick={e=>approve(val._id,'Declined')} className='btn1 btnm btnm2'>Decline</button></h2>

                </div>
                    </>
                ))

                }
              </div>
            </div>
        </div></>
    )
}

export default Leave2