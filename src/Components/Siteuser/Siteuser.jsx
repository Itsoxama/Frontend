import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import './Siteuser.css'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { AiOutlineReload } from 'react-icons/ai'
import { AiOutlineDashboard } from 'react-icons/ai'
import ReactToPrint from 'react-to-print';
import {MdAttachMoney} from 'react-icons/md'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaRegBuilding } from 'react-icons/fa'

import prof from '../../images/prof.png'
import { GrFormClose } from 'react-icons/gr'
import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';
import { TbBuildingFactory2 } from 'react-icons/tb'
import * as file from 'file-saver'
import axios from 'axios'
import { useEffect } from 'react';
import { tz } from '../apis';
import { TbFileInvoice } from 'react-icons/tb'
import { useRef } from 'react'
import { IoAnalytics } from 'react-icons/io5'
import app from '../../firebase.config'
import { AiOutlineProfile, AiOutlineMessage } from 'react-icons/ai'
import date from 'date-and-time';
import Attendence from './Attendence'
import Leave from './Leave'
import Notes from './Notes'
import Profile2 from './Profile2'
import Empnotes from '../Home/Notes/Empnotes'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Siteuser = () => {



    const [notibox, setnotibox] = useState('notibox2')
    const componentRef = useRef();
    const [datec, setdatec] = useState('')
    const [grey, setgrey] = useState(false)
    const [attid, setattid] = useState()
    const [allg, setallg] = useState(false)
    const [show, setshow] = useState(false)
    const [siteall, setsiteall] = useState()
const [chkintime, setchkintime] = useState('')

function selectsite(val) {
  console.log(val)
siteall&&siteall.forEach(element => {
    if(element._id===val)
    {
        setproject(element)
    }
});
    
}
    useEffect(() => {



var uu=localStorage.getItem('siteuserapi')
var uu2=localStorage.getItem('siteuserid')
var utype=localStorage.getItem('siteusertype')
if(uu&&uu2&&uu2.length>2&&uu==='^%$234'&&utype==='user'){
    
    axios.get(`${tz}/att/time`).then(res1 => {
        console.log(res1)

        var dateput = res1.data.Date.split(', ')
        setdatec(dateput[0])
        axios.post(`${tz}/siteuser/find`, {
            Siteuserd_id: uu2
        }).then(res => {
            setshow(true)
            console.log(res)
            setuser(res.data.Siteuserd[0])
            axios.get(`${tz}/jobsite/getall`).then(res2 => {
                console.log(res2)
                setsiteall(res2.data.Jobsite)
                setproject(res2.data.Jobsite[0])
                axios.post(`${tz}/siteatt/findbydateandchk`, {
                    date:dateput[0],
                    id:res.data.Siteuserd[0]._id,
                    chkouttime:'-'
                }).then(resq => {
                    console.log(resq)
                    if(resq.data.Siteatt.length>0){
                        setgrey(true)
                        setattid(resq.data.Siteatt[0])
                        setchkintime(resq.data.Siteatt[0].time)
                        console.log(resq.data)

                        if(resq.data.Siteatt[0].chkouttime==='-'){
                            setgrey(true)
                           


                            
                        }
                    }else{
                        setgrey(false)
                    }
                    
    
    
                })


            })

        })


    })
}
else{
    window.location.pathname='userlogin'
}
        return () => {

        }
    }, [])

    const [user, setuser] = useState()
    const [project, setproject] = useState()
function logout(){


    axios.post(`${tz}/siteuser/updatestatus`,{
        login:'no',
        _id:localStorage.getItem('siteuserid')
    }).then((resa)=>{

        localStorage.removeItem('siteuserid')
        localStorage.removeItem('siteuserapi')
        window.location.reload()
    })
}
    function clockin() {


        axios.get(`${tz}/att/time`).then(res => {

            var dateput = res.data.Date.split(', ')
            var late = dateput[1].split(':')
            setchkintime(dateput[1])

            if (parseInt(late[0]) - 9 > 0) {

                axios.post(`${tz}/siteatt/add`, {
                    projectid: project._id,
                    date: dateput[0],
                    time: dateput[1],
                    chkouttime: '-',
                    status: 'Present',
                    userid: user._id,
                    username: user.name,
                    late: `${parseInt(late[0]) - 9}:${late[1]}`,
                    projectname:project.sitename,
                    workinghours:'-'

                }).then(res2 => {
                    console.log(res2)
                    setgrey(true)
                    axios.post(`${tz}/siteatt/findbydateandchk`, {
                        date:dateput[0],
                        id:user._id,
                        chkouttime:'-'
                    }).then(resq => {   
                        console.log(resq)
                  
                        setattid(resq.data.Siteatt[0])
                        axios.post(`${tz}/noti/add`, {
                            message:`${user.name} clocked in at jobsite ${project.sitename}`,
                            idp:project.clientid,
                            time:dateput[1]
                        }).then(resp => {
                            console.log(resp)
                            
                      var y=0

                      if(user.linkedsites&&user.linkedsites.length>0){
                        console.log(user)
                           user.linkedsites.forEach((element,index) => {
                                if(element.projectid===project._id){
                                    y=1
                                }
                                if(index===user.linkedsites.length-1){
                                    if(y===0){
                                        axios.post(`${tz}/siteuser/updatelinkedsites`, {
                                            pid:project._id,
                                            _id:user._id,
                                        }).then(resps => {
                                            console.log(resps)
                                            axios.post(`${tz}/siteuser/find`, {
                                                Siteuserd_id: user._id
                                            }).then(ress => {
                                                setuser(ress.data.Siteuserd[0])

                                            })
                                      
                                            
                            
                            
                                        })
                                    }
                                }
                            });
                        }else{
                            console.log(user)
                            axios.post(`${tz}/siteuser/updatelinkedsites`, {
                                pid:project._id,
                                _id:user._id,
                            }).then(resps => {
                                console.log(resps)
                                axios.post(`${tz}/siteuser/find`, {
                                    Siteuserd_id: user._id
                                }).then(ress => {
                                    setuser(ress.data.Siteuserd[0])

                                })
                          
                                
                
                
                            })
                        }
                            
            
            
                        })
        
        
                    })

                })
            }
            else {

                axios.post(`${tz}/siteatt/add`, {
                    projectid: project._id,
                    date: dateput[0],
                    time: dateput[1],
                    chkouttime: '-',
                    status: 'Present',
                    userid: user._id,
                    username: user.name,
                    late: 'On time',
                    projectname:project.sitename,
                    workinghours:'-'


                }).then(res2 => {
                    console.log(res2)
                    axios.post(`${tz}/siteatt/findbydateandchk`, {
                        date:dateput[0],
                        id:user._id,
                        chkouttime:'-'
                    }).then(resq => {
                        console.log(resq)
                  
                        setattid(resq.data.Siteatt[0])
                        axios.post(`${tz}/noti/add`, {
                            message:`${user.name} clocked in at jobsite ${project.sitename}`,
                            idp:project.clientid,
                            time:dateput[1],
                            status:'att',
                        }).then(resp => {
                            console.log(resp)
                      
                            
                      var y=0

                      if(user.linkedsites&&user.linkedsites.length>0){
                        console.log(user)
                           user.linkedsites.forEach((element,index) => {
                                if(element.projectid===project._id){
                                    y=1
                                }
                                if(index===user.linkedsites.length-1){
                                    if(y===0){
                                        axios.post(`${tz}/siteuser/updatelinkedsites`, {
                                            pid:project._id,
                                            _id:user._id,
                                        }).then(resps => {
                                            console.log(resps)
                                            axios.post(`${tz}/siteuser/find`, {
                                                Siteuserd_id: user._id
                                            }).then(ress => {
                                                setuser(ress.data.Siteuserd[0])

                                            })
                                      
                                            
                            
                            
                                        })
                                    }
                                }
                            });
                        }else{
                            console.log(user)
                            axios.post(`${tz}/siteuser/updatelinkedsites`, {
                                pid:project._id,
                                _id:user._id,
                            }).then(resps => {
                                console.log(resps)
                                axios.post(`${tz}/siteuser/find`, {
                                    Siteuserd_id: user._id
                                }).then(ress => {
                                    setuser(ress.data.Siteuserd[0])

                                })
                          
                                
                
                
                            })
                        }

            
                        })
        
        
                    })

                    setgrey(true)

                })
            }
        })



    }
    function clockout(){
        var t1=chkintime


        axios.get(`${tz}/att/time`).then(res => {

            var dateput = res.data.Date.split(', ')
            var late = dateput[1].split(':')

            
        var t2=dateput[1]
        var t=chkintime.split(":")
        var tx=t2.split(":")
        var chkin=parseInt(t[0])*60+parseInt(t[1])
        var chkut=parseInt(tx[0])*60+parseInt(tx[1])
      var minsa=(chkut-chkin)%60
       var hrsa=Math.floor((chkut-chkin)/60)

                axios.post(`${tz}/siteatt/updatetimelat`, {
                    _id:attid._id,
                    time: dateput[1],
                    wh:`${hrsa}:${minsa}`,
                    wages:Math.ceil(hrsa*user.payrate+(minsa/60)*user.payrate)

                }).then(res2 => {
                    console.log(res2)
                    setgrey(false)
            
                    axios.post(`${tz}/noti/add`, {
                        message:`${user.name} clock out at jobsite ${project.sitename}`,
                        idp:project.clientid,
                        time:dateput[1],
                        status:'att',
                    }).then(resp => {
                        console.log(resp)
                  
                        
        
        
                    })



                })
            
         
        })
    }
const [i, seti] = useState(0)
const [adduser, setadduser] = useState('adduser2')
const [pass, setpass] = useState('')
const [optype, setoptype] = useState('clockin')
function clockinp(){
    setadduser('adduser')
    setoptype('clockin')
}
const [notibox2, setnotibox2] = useState('notibox3 notibox2')
function clockoutp(){
    setadduser('adduser')
    setoptype('clockout')
}
function checkpass(){
    if(pass==='123456'){
        setadduser('adduser2')
if(optype==='clockin'){
    clockin()
}
else{
clockout()
}
    }
    else{
        alert('type Correct Password')
    }
}
const [open, setopen] = useState(0)
const [linked, setlinked] = useState([])
const [att, setatt] = useState()
function open2(val){
    axios.post(`${tz}/siteatt/findbynameandproject`, {
        id:user._id,
        pid:val
       }).then(resq => {
           console.log(resq)
           setatt(resq.data.Siteatt)
           seti(49)
        
           


       })
}
const [opentype, setopentype] = useState('work')
function openhistory(val){
    setopentype(val)
    setlinked([])
   if(user.linkedsites&&user.linkedsites.length>0){
    siteall.forEach(element => {
        
            user.linkedsites.forEach(ele => {
                if(element._id===ele.projectid){
                    
                    setlinked(linked=>[...linked,element])
                }
            });
        
    });
    
    seti(48)
   }
   else{
    alert('No History found')
   }
    
}

    return (
        <>       {show&&
            <div className='dashsite'>
                
      
            <div className="sidesite">
                <h1>City Force LLC</h1>
                <h3  onClick={e=>seti(0)}>
                    <AiOutlineDashboard className='icondash1' />

                    Dashboard
                </h3>

                <h3 onClick={e=>seti(4)}>
                    <FaRegBuilding className='icondash1' />

                    Profile
                </h3>
               {user&&user.status!=='Inactive'&&
                <h3 onClick={e=>seti(1)}>
                <IoAnalytics className='icondash1' />

                Attendence
            </h3>

               }
                <h3 onClick={e=>seti(3)}>
                    <AiOutlineMessage className='icondash1' />

                    Notes
                </h3>
              {user&&user.status!=='Inactive'&&
                <h3 onClick={e=>seti(2)}>
                <AiOutlineProfile className='icondash1' />

                Leaves
            </h3>

              }

            </div>
            <div className="clientb clientc">
            <div className={adduser}>
            <div className="subadduser">
          
              <>
             {
                !grey&&
                <div className="inputname inui">
                <h1>Select Project</h1>
                      <select name="cars" id="cars" onChange={e=>selectsite(e.target.value)}>
  {siteall&&siteall.map(val=>(
        <option value={val._id}>{val.sitename}</option>
  ))
  
  }
  </select>
                </div>
             }
                <div className="inputname inui " >
             
                    <h1 >Password</h1>
                    <input onChange={e=>setpass(e.target.value)} />

               
                </div>
         
             <div className="inputname3">
             <button className='btn1' onClick={e=>checkpass()}>Submit</button>
                <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>

             </div>
              </>

              


            </div>

        </div>
                {i===0&&
                <>
                <div className="temphead" style={{paddingTop:"100px"}}>

                </div>
                <div className="clienthead fixedheader ">

                    <h6>Hy {user && user.name}</h6>

                    <div className="companymenu">

                      
<div className={notibox2}>
    <GrFormClose className='grno' onClick={e=>setnotibox2('notibox2 notibox3')} />
  
  <h2>{user && user.name}</h2>
  <button  onClick={e=>logout()}  className='logouty'>Logout</button>
</div>

                      {/*  <FaRegBell className='menuit' />
*/}
                        <div className="profilebtn menuit"  onClick={e=>setnotibox2('notibox3 notibox')}>
                            E
                            <div className="profiledot">

                            </div>

                        </div>
                    </div>
                </div>


              {user&&user.status!=='Inactive'?
                <><div className="buttonsclock">
            <div className="btx1">
            {!grey?
                    <div className="clkin" onClick={e => clockinp()}>

                    <button>Clock in</button>
                </div>:
                    <div className="clkinx" >

                    <button>Clock in</button>
                </div>

                }
                 {grey?
                      !allg?<div className="clkin2" onClick={e => clockoutp()}>

                      <button>Clock out</button>
                  </div>:
                  <div className="clkinx" >

                  <button>Clock out</button>
              </div>
                      :
                     <div className="clkinx" >

                     <button>Clock out</button>
                 </div>

                }
            </div>


<div className="displayatend">
{user&&!user.imgurl?
        
        <img src={prof} alt="" className='resizeimg' />:
        
        <img className='resizeimg' src={user.imgurl} alt="" />

        }
</div>
                 
                </div>

            

                <div className="clientpro" style={{display:'flex'}}>
                    <div className="projectscard proft">
                        <div className="procard">
                            <h1>Active Jobsite</h1>
                            <h4 className='cardh2'>{project && project.sitename}</h4>

                            <h2 className='cardh3' > <TbBuildingFactory2 />  <button onClick={e=>openhistory('work')} className='procd'>Work history</button> </h2>
                            <h6 className='cardf3' > {project && project.address.substring(0, 50)}</h6>
                            <div className="circlelast"></div>

                            <div className="circlelast2"></div>

                        </div>
                        <div className="procard">
                            <h1>Wages history</h1>
                            <h4 className='cardh2'>Info</h4>

                            <h2 className='cardh3' > <MdAttachMoney />  <button onClick={e=>openhistory('wages')} className='procd'>Wages history</button> </h2>
                            <h6 className='cardf3' > Click to view past history</h6>
                            <div className="circlelast"></div>

                            <div className="circlelast2"></div>

                        </div>


                    </div>
                  
                </div>
            
                </>:
                <div className="cardf">
                    <h1>Welcome! {user.name}</h1>
                    My name is Jose and I am very happy to welcome you on board with my Company
You joined hundred of users who are already skyrocketing their career with us.

                </div>
}
                <div className="clientpro clientproh" >
                    <h1>General info</h1>
                    <div className="projectscard xxxsd"  >
                    <div className="balance"> <div className="mhg">

<BsCreditCard2FrontFill className='mhgf' />
</div>
<div className="detbalance">
    <h1>Wages (This week)</h1>
    <h3>{user&&user.wages?user.wages:0} $</h3>

</div>
</div>
                        <div className="balance">  <div className="mhg mhg3">

                            <RiMoneyDollarCircleFill className='mhgf mhgf3' />
                        </div>
                            <div className="detbalance">
                                <h1>Pay Rate</h1>
                                <h3>{user&&user.payrate} $</h3>

                            </div>
                        </div>
                        <div className="balance">
                            <div className="mhg">

                                <BsCreditCard2FrontFill className='mhgf' />
                            </div>
                            <div className="detbalance">
                                <h1>OverTime Rate</h1>

                                <h3>{user&&user.otpayrate} $</h3>
                            </div>
                        </div>
                       
                    </div>
                    <div className="projectscard">
                    <div className="balance">  <div className="mhg mhg2">

<IoMdCheckmarkCircleOutline className='mhgf mhgf2' />
</div>
<div className="detbalance">
    <h1>Skill </h1>

    <h1>{user&&user.skill}</h1>
</div>
</div>
               </div>
                
                </div>

                </>

                }
                {i===49&&
           
 
    <><div className="clienthead  ">
    <h6>Jobsites</h6>

 
</div>
    
    <div className="tablerow">
    <div className="subtable">
    <div className="headertable clop cloo">
    <h1 style={{width:"200px"}}>User</h1>
    <h2 style={{width:"100px"}}>Date</h2>
    <h3 style={{width:"100px"}}>Clockin Time</h3>
    
    <h3 style={{width:"100px"}}>Clockout Time</h3>
    <h3 style={{width:"100px"}}>Total Time</h3>
    <h3 style={{width:"100px"}}>Wages</h3>
    {/*
    <h4 style={{width:"100px"}}>Status</h4>
    <h5 style={{width:"100px"}}>Late</h5>
                */}
    
    </div>
    {att&&att.map(val=>(
    <>
    <div className="headertable" >
    <h1 style={{width:"200px"}}>{val.username.substring(0,50)}</h1>
    <h2 style={{width:"100px"}}> <div className="tinvoice">
    {val.date}</div> </h2>
    <h3 style={{width:"100px"}} >{val.time}</h3>
    <h3 style={{width:"100px"}} >{val.chkouttime}</h3>
    <h3 style={{width:"100px"}} >{val.workinghours}</h3>
    {opentype==='wages'&&

<h3 style={{width:"100px"}} >{val.wages} $</h3>
    }

   {/*} {val.status==='Absent'?
    <div  style={{width:"100px"}} className="yellowlabel">
    
    <h6 >{val.status}</h6>
    </div>:
    <div  style={{width:"100px"}} className="greenlabel">
    
    <h6 >{val.status}</h6>
    </div>
    
    }
    <h5 style={{width:"100px"}} >{val.late}</h5>
    */}
    
    
    
    </div>
    </>
    ))
    
    }
    </div>
    </div>
    </>
    

                }
{i===1&&
<Attendence props={{
    user:user,
    date:datec

}} />

}
{i===2&&
<Leave  props={{
    user:user,
    date:datec

}} />

}

{i===3&&
<Empnotes/>

}
{i===4&&
<Profile2  props={{
    user:user,
    date:datec

}} />

}
{i===48&&
  
<div className='clientpro clienttro'>
<div className="clienthead  ">
                    <h6>Jobsites</h6>

                 
                </div>

<div className="tablerow">
<div className="subtable">
<div className="headertable clop cloo">
<h1 style={{width:"200px"}}>Sitename</h1>
<h2 style={{width:"200px"}}>Client Name</h2>


</div>
{linked&&linked.map(val=>(
<>
<div className="headertable" >
<h1 style={{width:"200px"}}>{val.sitename}</h1>
<h2 style={{width:"250px"}}> <div className="tinvoice">
{val.clientname}</div> </h2>

<h5 className='h5'>
{
    opentype==='wages'?
    <button onClick={e=>open2(val._id)} className='manx man'>Wages History</button>
    :
    <button onClick={e=>open2(val._id)} className='manx man'>Work History</button>
}

</h5>



</div>
</>
))

}
</div>
</div>


</div>}

            </div>
       
          
            
        </div>

       }</>
    )
}

export default Siteuser