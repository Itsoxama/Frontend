import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import axios from 'axios'
import 'react-calendar/dist/Calendar.css';
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { tz } from '../apis';
import { useEffect } from 'react';
const Notes2 = () => {
    
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

const [sender, setsender] = useState('Lynda')
const [reciever, setreciever] = useState('jose')
const [seen, setseen] = useState('false')
const [note, setnote] = useState('')
const [time, settime] = useState('02:23')
function submit() {
    
    axios.post(`${tz}/note/add`,{
        sender:sender,
        reciever:reciever,
        seen:seen,
        note:note,
        time:time
    }).then( res=>{
        console.log(res)
        
    }).then(()=>{
        setadduser('adduser2')
         axios.get(`${tz}/note/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.Notes)
    })
    })
    
}
const [userd, setuserd] = useState()

useEffect(() => {
    axios.post(`${tz}/note/finduserdata`,{
        reciever:localStorage.getItem('username')
    }).then(res=>{
        console.log(res)
        setuserd(res.data.Notes)





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
                <div className="inputname inui">
                    <h1>Note</h1>
                    <textarea onChange={e=>setnote(e.target.value)} />

                </div>
                
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
             <button onClick={e=>submit()} className='btn1'>Send</button>
                <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>

             </div>
              </>

              }


            </div>

        </div>
        <div className="usersdata">

            <div className="topusersdata">
                <BiUserCircle className='usio' />
                <h1>Notes</h1>
              
             



            </div>
          <div className="mess">
          {
            userd&&userd.map(val=>(
                <div className="messages">
                    <p>{val.note}</p>
                    <h1>{val.time}</h1>
                    <h2>from: {val.sender}</h2>
                </div>

            ))


           }
          </div>
          
          
        </div></>
    )
}

export default Notes2