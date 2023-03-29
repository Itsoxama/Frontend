import React, { useRef, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import axios from 'axios'
import 'react-calendar/dist/Calendar.css';
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { tz } from '../../apis';
import { useEffect } from 'react';
import {RiSendPlaneFill} from 'react-icons/ri'
const Empnotes = () => {
    
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

const [senderids, setsenderids] = useState(localStorage.getItem('siteuserid'))
const [sender, setsender] = useState(localStorage.getItem('siteusername'))
const [reciever, setreciever] = useState('')
const [seen, setseen] = useState('false')
const [note, setnote] = useState('')
const [time, settime] = useState('02:23')
function submit() {
    
    axios.post(`${tz}/note/add`,{
        sender:sender,
        reciever:reciever,
        recieverid:recid,
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
const [addedusers, setaddedusers] = useState()

const [data2, setdata2] = useState()
const [sitestaff, setsitestaff] = useState()
useEffect(() => {
    axios.get(`${tz}/note/getall`).then(res=>{
        console.log(res)
        setuserd(res.data.Notes)
    }).catch(err=>console.log(err))
 
    axios.get(`${tz}/admin/getall`).then(res=>{
        console.log(res)
        setsitestaff(res.data.Admin)
    }).catch(err=>console.log(err))

    
    axios.post(`${tz}/admin/find`,{
        _id:localStorage.getItem('siteuserid')

    }).then(res=>{
        console.log(res)
        setaddedusers(res.data.Admin)
    }).catch(err=>console.log(err))

  return () => {
    
  }
}, [])

const [searchval, setsearchval] = useState('')
var data=[
    {
        name:'usama',
        role:'User',
        status:'no new notes'
    },
    {
        name:'usama',
        role:'User',
        status:'no new notes'
    },
    {
        name:'usama',
        role:'User',
        status:'no new notes'
    },
    {
        name:'usama',
        role:'User',
        status:'no new notes'
    },{
        name:'usama',
        role:'User',
        status:'no new notes'
    },
    {
        name:'usama',
        role:'User',
        status:'no new notes'
    },
    {
        name:'usama',
        role:'User',
        status:'no new notes'
    }


]
const [task, settask] = useState('')
const [tasks, settasks] = useState([])
const [mem, setmem] = useState([])

const [title, settitle] = useState('')
const [last, setlast] = useState('')
const [emptype, setemptype] = useState('office')
function startchat(val){
var y=0
if(addedusers&&addedusers.addedusers&&addedusers.addedusers.length>0){
    addedusers.addedusers.forEach((element,index) => {
    if(element.userid===val._id){
        y=1
        setadduser('adduser2')
        openthischat(element)


    }
    else if(index===addedusers.addedusers.length-1){
if(y===0){
    
    axios.post(`${tz}/admin/addchat`,{
        _id:localStorage.getItem('siteuserid'),
            name:val.name,
            userid:val._id,
            status:'No new chats',
            role:'User'
    
    
    
    
        }).then(res2=>{  
            axios.post(`${tz}/siteuser/addchat`,{
                _id:val._id,
                    name:val.name,
                    userid:localStorage.getItem('siteuserid'),
                    status:'No new chats',
                    role:'User'
            
            
            
            
                }).then(res2x=>{  
                
                    console.log(res2)
        
                    axios.post(`${tz}/admin/find`,{
                        _id:localStorage.getItem('siteuserid')
                
                    }).then(res=>{
                        setadduser('adduser2')
                        console.log(res)
                        setaddedusers(res.data.Admin)
                    }).catch(err=>console.log(err))
                
                })        
       
        })
}
    }

});
}
else{
    
    axios.post(`${tz}/admin/addchat`,{
        _id:localStorage.getItem('siteuserid'),
            name:val.name,
            userid:val._id,
            status:'No new chats',
            role:'User'
    
    
    
    
        }).then(res2=>{  
            axios.post(`${tz}/siteuser/addchat`,{
                _id:val._id,
                    name:val.name,
                    userid:localStorage.getItem('siteuserid'),
                    status:'No new chats',
                    role:'User'
            
            
            
            
                }).then(res2x=>{  
                
                    console.log(res2)
        
                    axios.post(`${tz}/admin/find`,{
                        _id:localStorage.getItem('siteuserid')
                
                    }).then(res=>{
                        setadduser('adduser2')
                        console.log(res)
                        setaddedusers(res.data.Admin)
                    }).catch(err=>console.log(err))
                
                })        
       
        })
}


}
const [activeid, setactiveid] = useState()

function openthischat(val){
    console.log(val)
    setactiveid(val)
    axios.post(`${tz}/note/find`,{
      
        senderid:localStorage.getItem('siteuserid'),
        recieverid:val._id
       }).then( res=>{
        setmessages(res.data.Notes)
        setlsection('leftsection leftsectionp')
        messageEl.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
         
       })
    


}
function deleted(val){
    axios.post(`${tz}/note/delete`,{
     _id:val
    }).then( res=>{
        console.log(res)
        
        axios.get(`${tz}/note/getall`).then(resa=>{
            console.log(resa)
            setuserd(resa.data.Notes)
    })
    })
}
const [msg, setmsg] = useState('')
function sendmsg(){
    
    if(activeid){
        axios.get(`${tz}/att/time`).then(res1 => {
            console.log(res1)
    
            var dateput = res1.data.Date.split(', ')
           
        axios.post(`${tz}/note/add`,{
            sender:sender,
            senderid:localStorage.getItem('siteuserid'),
            reciever:activeid.email,
            recieverid:activeid._id,
            seen:'false',
            note:msg,
            time:dateput[1],
            date:dateput[0]
    
        }).then( res=>{
            console.log(res)
            setadduser('adduser2')
            setmsg('')
            openthischat(activeid)
        })
    
        })
    }
    else{
        alert('Please select user!')
    }
    

}

const messageEl = useRef(null);
const [messages, setmessages] = useState()
function addtask() {
settasks(tsk=>[...tsk,task])
settask('')
}
const [recid, setrecid] = useState('')
function setrecieverfor(val){
    console.log(val)
    var b=val.split('5rt*)(')
    setrecid(b[1])
    setreciever(b[0])

}
const [lsection, setlsection] = useState('leftsectionp leftsection')
function addtask2() {
    setmem(tsk=>[...tsk,reciever])

    }

    return (
        <>
        
        <div className="usersdata fullwidth">

          {  /*<div className="topusersdata fixedheader">
                <BiUserCircle className='usio' />
                <h1>Notes</h1>
              
                <button className='usiosub' onClick={e=>setadduser('adduser')}>+ Add Note</button>
               



            </div>*/
}
          <div className="messagesection">
            <div className={lsection}>
                <div className="fixedsearch">
                    <h4>Notes  

<button className='mobilebtn mobilebtn2' onClick={e=>setlsection('leftsectionp') }>Back</button>

                    </h4>
                    <div className="searchbar">
                        <input type="text" onChange={e=>setsearchval(e.target.value)} placeholder='Search...' />
                    </div>
                </div>
               
                  {adduser!=='adduser'&&
                  
                  searchval.length>0?sitestaff&&sitestaff.map(val=>(
                   val.email.toLowerCase().search(searchval.toLowerCase())>=0&&
                   <div className={`cardmsg ${activeid&&activeid.email===val.email&&'msgback'}`} onClick={e=>openthischat(val)}>
                   <div className="profmsg">
                       {val.email.charAt(0).toUpperCase()}
                   </div>
            <div className="colcard">
            <h1>{val.email} <div className="roli">
            {val.role1}
                       </div></h1>
                       <h3>Start new chat</h3>
            </div>
               </div>
                )):
                sitestaff&&sitestaff.map(val=>(
                    val.email.toLowerCase().search(searchval.toLowerCase())>=0&&
                    <div className={`cardmsg ${activeid&&activeid.email===val.email&&'msgback'}`} onClick={e=>openthischat(val)}>
                    <div className="profmsg">
                        {val.email.charAt(0).toUpperCase()}
                    </div>
             <div className="colcard">
             <h1>{val.email} <div className="roli">
                       {val.role1}
                        </div></h1>
                        <h3>Start new chat</h3>
             </div>
                </div>
                 )) 

                }

            </div>
            <div className="rightsection">
                <div className="headermsg">

                    <h1>{activeid&&activeid.email}</h1>
                    <button className='mobilebtn' onClick={e=>setlsection('leftsection')}>Users</button>

                </div>
                <div className="messagesall" ref={messageEl}>
                    {messages&&messages.length>0?messages.map(val=>(

                        val.senderid===senderids?
                        <div className="msgboxs">
                            <h1>{val.note}</h1>
                            <h3> <p>{val.date}</p> <p>{val.time}</p></h3>
                        </div>
                        :<div className="msgbox">
                        <h1>{val.note}</h1>
                        <h3> <p>{val.date}</p> <p>{val.time}</p></h3>
                    </div>

                    ))
:<>
<div className="msgbox">
    <h1>No Notes</h1>
</div>
</>
                    }
                    <div className="sendingnotes">
                        <input placeholder='Type note here...'  value={msg} type="text" onChange={e=>setmsg(e.target.value)} />
                        <button className='sendbtnb' onClick={e=>sendmsg()} ><RiSendPlaneFill /></button>
                    </div>
                </div>

            </div>
          </div>
        </div></>
    )
}

export default Empnotes