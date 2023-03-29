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
const Projects = () => {
    
const [adduser, setadduser] = useState('adduser2')
const [value, onChange] = useState(new Date());

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [pass, setpass] = useState('')
const [c, setc] = useState(0)
function onChanges(e) {
console.log(e)
    
}
function submit() {
    
    axios.post(`${tz}/project/add`,{
        title:title,
        progress:'10',
        last:last,
        tasks:tasks,
        teams:mem,
        status:'Active'
    }).then( res=>{
        console.log(res)
        
    }).then(()=>{
        setadduser('adduser2')
         axios.get(`${tz}/project/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.Project)
    })
    })
    
}
const [userd, setuserd] = useState()

useEffect(() => {
    axios.get(`${tz}/project/getall`).then(res=>{
        console.log(res)
        setuserd(res.data.Project)
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
                <div className="inputname">
                    <h1>Project Title</h1>
                    <input onChange={e=>settitle(e.target.value)} type="text" />

                </div>
                <div className="inputname">
                    <h1>Last date</h1>
                    <input onChange={e=>setlast(e.target.value)}  type="text" />

                </div>
                <div className="inputname inputname2">
                <h1>Project Tasks</h1>
                {tasks&&tasks.map((val,index)=>(
                    <>
                    <p>{index+1}. {val}</p>
                    </>
                ))

                }
                    <input value={task} onChange={e=>settask(e.target.value)}  type="text" />

                </div>
                <button onClick={e=>addtask()}  className='btn3'>+ Add Task</button>
                <div className="inputname inputname2">
                <h1>Team</h1>
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
                <button onClick={e=>addtask2()}   className='btn3'>+ Add Member</button>
             <div className="inputname3">
             <button onClick={e=>submit()} className='btn1'>Submit</button>
                <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>

             </div>
              </>

              }


            </div>

        </div>
        <div className="usersdata">

            <div className="topusersdata">
                <BiUserCircle className='usio' />
                <h1>Project Management</h1>
              
                <button className='usiosub' onClick={e=>setadduser('adduser')}>Add Project</button>
               



            </div>
            <div className="producheader">
                <span>
                    <div className="ricircle">
                        <div className="priconpar">
                            <RiLightbulbFlashLine className='pricon' />
                        </div>
                        <p className='sss'>{userd&&userd.length}</p>
                    </div>
                    <h1>Total Projects</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon2">
                            <BiTime className='pricon ' />
                        </div>
                        <p>{userd&&userd.length}</p>
                    </div>
                    <h1>Active Project</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon3">
                            <MdSnooze className='pricon ' />
                        </div>
                        <p>{userd&&userd.length}</p>
                    </div>
                    <h1>Completed Projects</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon4">
                            <RiTimerFlashFill className='pricon ' />
                        </div>
                        <p>80%</p>
                    </div>
                    <h1>On Time Delivery</h1>

                </span>

            </div>
            <div className="tablerow">
              <div className="subtable">
              <div className="headertable clop headerxtab">
                    <h1>Project title</h1>
                    <h2>Deadline</h2>
                    <h2>Team</h2>
                    <h3>Tasks</h3>
                    <h4>Progress</h4>
                    <h2>Status</h2>
                    <h2>Action</h2>


                </div>
                {userd&&userd.map(val=>(
                    <>
                     <div className="headertable headerxtab">
                    <h1>{val.title}</h1>
                    <h2>{val.last}</h2>
                    <h2>{val.teams.length}</h2>
                    <h3>{val.tasks.length}</h3>
                    <h4>
                        <div className="ftyp" >
                        <div className="fty"  style={{width:`${val.progress}%`}}>
                        
                        </div>
                        </div>
                       </h4>
                       <h2 style={{color:'rgb(3, 143, 9'}}>{val.status}</h2>
                       <h2><button className='btn1 btnm'>Finish</button></h2>

                </div>
                    </>
                ))

                }
              </div>
            </div>
        </div></>
    )
}

export default Projects