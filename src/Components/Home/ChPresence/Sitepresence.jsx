import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import 'react-calendar/dist/Calendar.css';
import { FiDownload } from 'react-icons/fi'
import { AiOutlineReload } from 'react-icons/ai'
import { AiOutlineDashboard } from 'react-icons/ai'
import ReactToPrint from 'react-to-print';
import Calendar from 'react-calendar';
import {RiCloseFill} from 'react-icons/ri'
import prof from '../../../images/prof.png'
import 'react-calendar/dist/Calendar.css';
import { FaRegBuilding } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';
import { TbBuildingFactory2 } from 'react-icons/tb'
import * as file from 'file-saver'
import axios from 'axios'

import {FiLogOut} from 'react-icons/fi'

import {FaUserCheck,FaUserTimes,FaUserEdit} from 'react-icons/fa'
import { useEffect } from 'react';
import { tz } from '../../apis';
import { TbFileInvoice } from 'react-icons/tb'
import { useRef } from 'react'
import { IoAnalytics } from 'react-icons/io5'
import { AiOutlineProfile, AiOutlineMessage } from 'react-icons/ai'
import date from 'date-and-time';

const Sitepresence = () => {

const [openp, setopenp] = useState(false)
const [showcalender, setshowcalender] = useState(false)
const [prodata, setprodata] = useState()

function viewprof(val){
    axios.post(`${tz}/siteuser/find`,{
        Siteuserd_id:val,
    }).then(res2 => {
        console.log(res2)
        setprodata(res2.data.Siteuserd[0])
        setopenp(true)
       
    })

}
    const [notibox, setnotibox] = useState('notibox2')
    const componentRef = useRef();
    const [att, setatt] = useState()
    const [projects, setprojects] = useState()
    const [pending2, setpending2] = useState([])
    const [attr, setattr] = useState()
    const [datep, setdatep] = useState('')
    
  const [value, value2] = useState(new Date());

  function onChange(e){


    var ustime=e.toLocaleString("en-US", {hour12:false})
    console.log(ustime)
    setshowcalender(false)
    var yt=ustime.split(', ')
    setdatep(yt[0])
    mopenthis(activesite,yt[0])
  }

    useEffect(() => {
      
        axios.get(`${tz}/att/time`).then(res => {

            var dateput = res.data.Date.split(', ')
            setdatep(dateput[0])
            axios.get(`${tz}/jobsite/getall`).then(resq => {
                console.log(resq)
                
                axios.post(`${tz}/siteatt/findbydate`,{
                    date:dateput[0]
                }).then(rex => {
                    console.log(rex)
                    setattr(rex.data.Siteatt)
                    setprojects(resq.data.Jobsite)
        


           
                })
                
    
    
            })
    
           
        })

        return () => {

        }
    }, [])

    const [user, setuser] = useState()
    const [project, setproject] = useState()
    const [clk, setclk] = useState()
    const [chkou, setchkou] = useState(0)
    
const [filter, setfilter] = useState('sitename')
const [searchval, setsearchval] = useState('')
function openthis(val){
    setactivesite(val)
    seto(1)
    setchkou(0)
setpending2([])
    axios.post(`${tz}/siteatt/findbydateandproject`,{
        date:datep,
        id:val._id
    }).then(rex => {

        val.user.forEach(ele => {
            var y=0
            rex.data.Siteatt.forEach((ele2,index) => {
                if(ele2.userid===ele.userid){
                    y=1}
                  
                        if(index===rex.data.Siteatt.length-1){
                            if(y===0){
    
                                setpending2(pending2=>[...pending2,ele])
                            }
                        }
                 
               
            });
        });

        setclk(rex.data.Siteatt)
        rex.data.Siteatt.forEach(element => {
            if(element.chkouttime!=='-'){
                setchkou(chkou=>chkou+1)

            }
        });


    })

}

function mopenthis(val,bn){
    setactivesite(val)
    seto(1)
    setchkou(0)
setpending2([])
    axios.post(`${tz}/siteatt/findbydateandproject`,{
        date:bn,
        id:val._id
    }).then(rex => {

        val.user.forEach(ele => {
            var y=0
            rex.data.Siteatt.forEach((ele2,index) => {
                if(ele2.userid===ele.userid){
                    y=1}
                  
                        if(index===rex.data.Siteatt.length-1){
                            if(y===0){
    
                                setpending2(pending2=>[...pending2,ele])
                            }
                        }
                 
               
            });
        });

        setclk(rex.data.Siteatt)
        rex.data.Siteatt.forEach(element => {
            if(element.chkouttime!=='-'){
                setchkou(chkou=>chkou+1)

            }
        });


    })

}

const [activesite, setactivesite] = useState()
   const [o, seto] = useState(0)
const [i, seti] = useState(0)
    return (
     
        <div className="attside attddide">
              {openp&&
        <div className="profio procio">
               <div className="profilepage">
                <RiCloseFill className='ioyt' onClick={e=>setopenp(false)} />
           <img src={prof} alt="" />
           <h1>Name:</h1>
           <h6>{prodata.name}</h6> 
            <h1>Skill:</h1>
           <h6>{prodata.skill}</h6>
           <h1>Address:</h1>
           <h6>{prodata.address}</h6>
           <h1>Phone :</h1>
           <h6>{prodata.phone}</h6>
           <h1>Status:</h1>
           <h6>{prodata.status}</h6>
   
           
       </div>
        </div>

        }
        <div className="temphead tempheadr">

        </div>
             <div className="clienthead varyheight2 fixedheader ">
                    
                    <h6  className="searchengine"><h4> Jobsite Attendence</h4>
                    
                  
                        {o!==1&&
                        <>
                            <input onChange={e=>setsearchval(e.target.value)}  type="text" placeholder='Search here...' />

<select className='apply'  name="cars" id="cars" onChange={e=>setfilter(e.target.value)}>
<option >Filters</option>
<option value="sitename">Jobsite</option>
<option value="clientname">Company</option>
</select>
                        </>

                        }
                   
                </h6>
                  
                    
             {o===1?
                    <button className='backj' onClick={e=>seto(0)}>Back</button>
                    :
                    <div className="sd2"></div>

             }
             
                </div>

{o===0&&

<div className='clientpro clienttro'>
<h1>Jobsites</h1>


<div className="tablerow">
<div className="subtable">
<div className="headertable clop cloo">
<h1 style={{width:"200px"}}>Sitename</h1>
<h2 style={{width:"200px"}}>Client Name</h2>


</div>
{searchval.length>0&&filter==='sitename'&&projects&&projects.map(val=>(
val.sitename.toLowerCase().search(searchval.toLowerCase())>=0&&  
<>
<div className="headertable" >
<h1 style={{width:"200px"}}>{val.sitename}</h1>
<h2 style={{width:"250px"}}> <div className="tinvoice">
{val.clientname}</div> </h2>

<h5 className='h5'><button onClick={e=>openthis(val)} className='manx man'>View Presence</button></h5>



</div>
</>
))

}

{searchval.length>0&&filter==='clientname'&&projects&&projects.map(val=>(
val.clientname.toLowerCase().search(searchval.toLowerCase())>=0&&  
<>
<div className="headertable" >
<h1 style={{width:"200px"}}>{val.sitename}</h1>
<h2 style={{width:"250px"}}> <div className="tinvoice">
{val.clientname}</div> </h2>

<h5 className='h5'><button onClick={e=>openthis(val)} className='manx man'>View Presence</button></h5>



</div>
</>
))

}
{searchval.length===0&&projects&&projects.map(val=>(
 
<>
<div className="headertable" >
<h1 style={{width:"200px"}}>{val.sitename}</h1>
<h2 style={{width:"250px"}}> <div className="tinvoice">
{val.clientname}</div> </h2>

<h5 className='h5'><button onClick={e=>openthis(val)} className='manx man'>View Presence</button></h5>



</div>
</>
))

}
</div>
</div>


</div>

}
{
    o===1&&
    <>

    <div className="clockhead">
        <button onClick={e=>setshowcalender(true)} className='cht'> Choose Date</button>
    {showcalender&&
    <div>
    <Calendar onChange={onChange} 
                value={value} />
  </div>

    }
    </div>
    <div className="clientpro clientproo clientproh">
           <h1>User Stats</h1>
           <div className="projectscard">
               <div className="balance balancec">  <div className="mhg mhg3">
                       
                       <FaUserCheck className='mhgf mhgf3' />
                       </div>
                   <div className="detbalance">
                       <h1>Clocked in</h1>
                       <h3>{clk&&clk.length-chkou}</h3>
                   </div>
               </div>
               <div className="balance balancec">
                   <div className="mhg">
                       
                   <FaUserTimes className='mhgf' />
                   </div>
                                       <div className="detbalance">
                       <h1>Pending</h1>
                       <h3>{activesite&&clk&&activesite.user.length-clk.length} </h3>
                   </div>
               </div>
               <div className="balance balancec">  <div className="mhg mhg2">
                       
                       <FiLogOut className='mhgf mhgf2' />
                       </div>
                   <div className="detbalance">
                       <h1>Clocked Out </h1>
                       <h3>{chkou}</h3>
                   </div>
               </div>
                <div className="balance balancec">  <div className="mhg mhg2x">
                       
                       <FaUserEdit className='mhgf mhgf2x' />
                       </div>
                   <div className="detbalance">
                       <h1>On Leave </h1>
                       <h3>{0} </h3>
                   </div>
               </div>
           </div>
       </div>
     <div className="clientpro clientproo">
   <h1>Clockedin Users</h1>
   <>
 
 
 <div className="usersdata">
 
 
 {o===1&&
 
 <>
 
 <div className="tablerow">
 <div className="subtable">
 <div className="headertable clop cloo">
 <h1 style={{width:"200px"}}>User</h1>
 <h2 style={{width:"100px"}}>Date</h2>
 <h3 style={{width:"100px"}}>Clockin Time</h3>
 
 <h3 style={{width:"100px"}}>Clockout Time</h3>
 <h3 style={{width:"100px"}}>Working Time</h3>
 <h4 style={{width:"100px"}}>Status</h4>
 <h5 style={{width:"100px"}}>Late</h5>
 
 
 </div>
 {clk&&clk.map(val=>(
 <>
 <div className="headertable" >
 <h1 style={{width:"200px"}}>{val.username.substring(0,50)}</h1>
 <h2 style={{width:"100px"}}> <div className="tinvoice">
 {val.date}</div> </h2>
 <h3 style={{width:"100px"}} >{val.time}</h3>
 <h3 style={{width:"100px"}} >{val.chkouttime}</h3>
 <h3 style={{width:"100px"}} >{val.workinghours}</h3>
 {val.status==='Absent'?
 <div  style={{width:"100px"}} className="yellowlabel">
 
 <h6 >{val.status}</h6>
 </div>:
 <div  style={{width:"100px"}} className="greenlabel">
 
 <h6 >{val.status}</h6>
 </div>
 
 }
 <h5 style={{width:"100px"}} >{val.late}</h5>
 
 
 
 </div>
 </>
 ))
 
 }
 </div>
 </div>
 </>
 }
 
 </div></>
 </div>
 <div className="clientpro clientproo">
   <h1>Pending Users</h1>
   <>
 
 
 <div className="usersdata">
 
 
 {o===1&&
 
 <>
 
 <div className="tablerow">
 <div className="subtable">
 <div className="headertable clop cloo">
 <h1 style={{width:"200px"}}>User</h1>
 <h2 style={{width:"200px"}}>Skill</h2>
 
 
 </div>
 {clk&&clk.length>0?pending2&&pending2.map(val=>(
 <>
 <div className="headertable" >
 <h1 style={{width:"200px"}}>{val.name.substring(0,50)}</h1>
 <h2 style={{width:"200px"}}> <div className="tinvoice">
 {val.skill}</div> </h2>
 
 <h5 className='h5'><button className='manx man' onClick={e=>viewprof(val.userid)}>View Profile</button></h5>
 
 
 
 </div>
 </>
 )):
 activesite&&activesite.user.map(val=>(
    <>
    <div className="headertable" >
    <h1 style={{width:"200px"}}>{val.name.substring(0,50)}</h1>
    <h2 style={{width:"200px"}}> <div className="tinvoice">
    {val.skill}</div> </h2>
    
    <h5 className='h5'><button className='manx man' onClick={e=>viewprof(val.userid)}>View Profile</button></h5>
    
    
    
    </div>
    </>
    ))
 
 }
 </div>
 </div>
 </>
 }
 
 </div></>
 </div>
 </>
}
        </div>
    )
}

export default Sitepresence