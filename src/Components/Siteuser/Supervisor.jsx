import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import './Siteuser.css'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

import {FiLogOut} from 'react-icons/fi'

import {FaUserCheck,FaUserTimes,FaUserEdit} from 'react-icons/fa'
import prof from '../../images/prof.png'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'

import { AiOutlineReload } from 'react-icons/ai'
import { AiOutlineDashboard } from 'react-icons/ai'
import ReactToPrint from 'react-to-print';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaRegBuilding } from 'react-icons/fa'
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
import { AiOutlineProfile, AiOutlineMessage } from 'react-icons/ai'
import date from 'date-and-time';
import Attendence from './Attendence'
import Leave from './Leave'
import Notes from './Notes'
import Profile2 from './Profile2'
import Reports from './Reports'

const Supervisor = () => {
    
  const [value, value2] = useState(new Date());

  function onChange(e){


    var ustime=e.toLocaleString("en-US", {hour12:false})
    console.log(ustime)
    setshowcalender(false)
    var yt=ustime.split(', ')
    setdatep(yt[0])
    mopenthis(project,yt[0])
  }
  function mopenthis(val,datex) {
    setchkou(0)
    setpending2([])

   
        setdatep(datex)
        axios.post(`${tz}/siteatt/findbydateandproject`, {
            date: datex,    
            id: val._id
        }).then(rex => {

            val.user.forEach(ele => {
                var y = 0
                rex.data.Siteatt.forEach((ele2, index) => {
                    if (ele2.userid === ele.userid) {
                        y = 1
                    }

                    if (index === rex.data.Siteatt.length - 1) {
                        if (y === 0) {

                            setpending2(pending2 => [...pending2, ele])
                        }
                    }


                });
            });

            setclk(rex.data.Siteatt)
            rex.data.Siteatt.forEach(element => {
                if (element.chkouttime !== '-') {
                    setchkou(chkou => chkou + 1)

                }
            });


        })

   

}
const [datep, setdatep] = useState('')
const [openp, setopenp] = useState(false)
const [showcalender, setshowcalender] = useState(false)
const [prodata, setprodata] = useState()
    const [pending2, setpending2] = useState([])
    const [chkou, setchkou] = useState(0)
    const [clk, setclk] = useState()
    function openthis(val) {
        setchkou(0)
        setpending2([])

        axios.get(`${tz}/att/time`).then(resx => {
            console.log(resx)

            var dateput = resx.data.Date.split(', ')
            setdatep(dateput[0])
            axios.post(`${tz}/siteatt/findbydateandproject`, {
                date: dateput[0],
                id: val._id
            }).then(rex => {

                val.user.forEach(ele => {
                    var y = 0
                    rex.data.Siteatt.forEach((ele2, index) => {
                        if (ele2.userid === ele.userid) {
                            y = 1
                        }

                        if (index === rex.data.Siteatt.length - 1) {
                            if (y === 0) {

                                setpending2(pending2 => [...pending2, ele])
                            }
                        }


                    });
                });

                setclk(rex.data.Siteatt)
                rex.data.Siteatt.forEach(element => {
                    if (element.chkouttime !== '-') {
                        setchkou(chkou => chkou + 1)

                    }
                });


            })

        })

    }


    const [notibox, setnotibox] = useState('notibox2')
    const componentRef = useRef();
    const [datec, setdatec] = useState('')
    const [grey, setgrey] = useState(false)
    const [attid, setattid] = useState()
    const [allg, setallg] = useState(false)
    const [show, setshow] = useState(false)
    const [siteall, setsiteall] = useState()
    const [chkintime, setchkintime] = useState('')


    useEffect(() => {



        var uu = localStorage.getItem('siteuserapi')
        var uu2 = localStorage.getItem('siteuserid')
        var utype = localStorage.getItem('siteusertype')
        if (uu && uu2 && uu2.length > 2 && uu === '^%$234' && utype === 'supervisor') {

            axios.post(`${tz}/super/find`, {
                Supervisor_id: uu2
            }).then(res1 => {
                console.log(res1)
                setuser(res1.data.Supervisor[0])
                axios.post(`${tz}/jobsite/find`, {
                    Jobsite_id: res1.data.Supervisor[0].siteid
                }).then(res2 => {
                    console.log(res2)
                    setshow(true)
                    res2.data.Jobsite&&setproject(res2.data.Jobsite[0])
                    res2.data.Jobsite&&
                    openthis(res2.data.Jobsite[0])


                })

            })
        }
        else {
            window.location.pathname = 'userlogin'
        }
        return () => {

        }
    }, [])

    const [user, setuser] = useState()
    const [project, setproject] = useState()
    function logout() {



        localStorage.removeItem('siteuserid')
        localStorage.removeItem('siteuserapi')
        window.location.reload()

    }
    const [i, seti] = useState(0)

    const [notibox2, setnotibox2] = useState('notibox3 notibox2')

    const [open, setopen] = useState(0)
    const [linked, setlinked] = useState([])
    const [att, setatt] = useState()
    function open2(val) {
        axios.post(`${tz}/siteatt/findbynameandproject`, {
            id: user._id,
            pid: val
        }).then(resq => {
            console.log(resq)
            setatt(resq.data.Siteatt)
            seti(49)




        })
    }
    
function viewprof(val){
    axios.post(`${tz}/siteuser/find`,{
        Siteuserd_id:val,
    }).then(res2 => {
        console.log(res2)
        setprodata(res2.data.Siteuserd[0])
        setopenp(true)
       
    })

}
    function openhistory() {
        setlinked([])
        if (user.linkedsites && user.linkedsites.length > 0) {
            siteall.forEach(element => {

                user.linkedsites.forEach(ele => {
                    if (element._id === ele.projectid) {

                        setlinked(linked => [...linked, element])
                    }
                });

            });

            seti(48)
        }
        else {
            alert('No History found')
        }

    }
    return (
        <>       {show &&
            <div className='dashsite'>


                <div className="sidesite">
                    <h1>City Force LLC</h1>
                    <h3 onClick={e => seti(0)}>
                        <AiOutlineDashboard className='icondash1' />

                        Dashboard
                    </h3>

                    <h3 onClick={e => seti(4)}>
                        <FaRegBuilding className='icondash1' />

                        Profile
                    </h3>
                    <h3 onClick={e => seti(11)}>
                        <FaRegBuilding className='icondash1' />

                        Jobsite info
                    </h3>
                    <h3 onClick={e => seti(16)}>
                        <FaRegBuilding className='icondash1' />

                        Reports
                    </h3>


                </div>
                <div className="clientb clientc">

                    {i === 0 &&
                        <>
                            <div className="clienthead  ">
                                <h6 className='s55'>Hy {user && user.name} <div className="spanish">Supervisor</div> </h6>

                                <div className="companymenu">


                                    <div className={notibox2}>
                                        <GrFormClose className='grno' onClick={e => setnotibox2('notibox2 notibox3')} />

                                        <h2>{user && user.name}</h2>
                                        <button onClick={e => logout()} className='logouty'>Logout</button>
                                    </div>

                                    {/*  <FaRegBell className='menuit' />
*/}
                                    <div className="profilebtn menuit" onClick={e => setnotibox2('notibox3 notibox')}>
                                        E
                                        <div className="profiledot">

                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="clientpro">
                                <div className="projectscard">
                                    <div className="procard">
                                        <h1>Active Jobsite</h1>
                                        <h4 className='cardh2'>{project && project.sitename}</h4>

                                        <h2 className='cardh3' > <TbBuildingFactory2 />  </h2>
                                        <h6 className='cardf3' > {project && project.address.substring(0, 50)}</h6>
                                        <div className="circlelast"></div>

                                        <div className="circlelast2"></div>

                                    </div>

                                </div>
                            </div>
                            <>

                                <div className="clockhead">
                                    <button onClick={e => setshowcalender(true)} className='cht'> Choose Date</button>
                                    {showcalender &&
                                        <div>
                                            <Calendar onChange={onChange}
                                                value={value} />
                                        </div>

                                    }
                                </div>
                                <div className="clientpro clientproh">
                                    <h1>User Stats</h1>
                                    <div className="projectscard">
                                        <div className="balance balancec">  <div className="mhg mhg3">

                                            <FaUserCheck className='mhgf mhgf3' />
                                        </div>
                                            <div className="detbalance">
                                                <h1>Clocked in</h1>
                                                <h3>{clk && clk.length - chkou}</h3>
                                            </div>
                                        </div>
                                        <div className="balance balancec">
                                            <div className="mhg">

                                                <FaUserTimes className='mhgf' />
                                            </div>
                                            <div className="detbalance">
                                                <h1>Pending</h1>
                                                <h3>{project && clk && project.user.length - clk.length} </h3>
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
                                <div className="clientpro">
                                    <h1>Clockedin Users</h1>
                                    <>


                                        <div className="usersdata">


                                                <>

                                                    <div className="tablerow">
                                                        <div className="subtable">
                                                            <div className="headertable clop cloo">
                                                                <h1 style={{ width: "200px" }}>User</h1>
                                                                <h2 style={{ width: "100px" }}>Date</h2>
                                                                <h3 style={{ width: "100px" }}>Clockin Time</h3>

                                                                <h3 style={{ width: "100px" }}>Clockout Time</h3>
                                                                <h3 style={{ width: "100px" }}>Working Time</h3>
                                                                <h4 style={{ width: "100px" }}>Status</h4>
                                                                <h5 style={{ width: "100px" }}>Late</h5>


                                                            </div>
                                                            {clk && clk.map(val => (
                                                                <>
                                                                    <div className="headertable" >
                                                                        <h1 style={{ width: "200px" }}>{val.username.substring(0, 50)}</h1>
                                                                        <h2 style={{ width: "100px" }}> <div className="tinvoice">
                                                                            {val.date}</div> </h2>
                                                                        <h3 style={{ width: "100px" }} >{val.time}</h3>
                                                                        <h3 style={{ width: "100px" }} >{val.chkouttime}</h3>
                                                                        <h3 style={{ width: "100px" }} >{val.workinghours}</h3>
                                                                        {val.status === 'Absent' ?
                                                                            <div style={{ width: "100px" }} className="yellowlabel">

                                                                                <h6 >{val.status}</h6>
                                                                            </div> :
                                                                            <div style={{ width: "100px" }} className="greenlabel">

                                                                                <h6 >{val.status}</h6>
                                                                            </div>

                                                                        }
                                                                        <h5 style={{ width: "100px" }} >{val.late}</h5>



                                                                    </div>
                                                                </>
                                                            ))

                                                            }
                                                        </div>
                                                    </div>
                                                </>
                                            

                                        </div></>
                                </div>
                                <div className="clientpro">
                                    <h1>Pending Users</h1>
                                    <>


                                        <div className="usersdata">


                                          
                                                <>

                                                    <div className="tablerow">
                                                        <div className="subtable">
                                                            <div className="headertable clop cloo">
                                                                <h1 style={{ width: "200px" }}>User</h1>
                                                                <h2 style={{ width: "200px" }}>Skill</h2>


                                                            </div>
                                                            {clk && clk.length > 0 ? pending2 && pending2.map(val => (
                                                                <>
                                                                    <div className="headertable" >
                                                                        <h1 style={{ width: "200px" }}>{val.name.substring(0, 50)}</h1>
                                                                        <h2 style={{ width: "200px" }}> <div className="tinvoice">
                                                                            {val.skill}</div> </h2>

                                                                        <h5 className='h5'><button className='manx man' onClick={e => viewprof(val.userid)}>View Profile</button></h5>



                                                                    </div>
                                                                </>
                                                            )) :
                                                                project && project.user.map(val => (
                                                                    <>
                                                                        <div className="headertable" >
                                                                            <h1 style={{ width: "200px" }}>{val.name.substring(0, 50)}</h1>
                                                                            <h2 style={{ width: "200px" }}> <div className="tinvoice">
                                                                                {val.skill}</div> </h2>

                                                                            <h5 className='h5'><button className='manx man' onClick={e => viewprof(val.userid)}>View Profile</button></h5>



                                                                        </div>
                                                                    </>
                                                                ))

                                                            }
                                                        </div>
                                                    </div>
                                                </>
                                            s

                                        </div></>
                                </div>
                            </>


                        </>

                    }
                    {i === 49 &&


                        <><div className="clienthead  ">
                            <h6>Jobsites</h6>


                        </div>

                            <div className="tablerow">
                                <div className="subtable">
                                    <div className="headertable clop cloo">
                                        <h1 style={{ width: "200px" }}>User</h1>
                                        <h2 style={{ width: "100px" }}>Date</h2>
                                        <h3 style={{ width: "100px" }}>Clockin Time</h3>

                                        <h3 style={{ width: "100px" }}>Clockout Time</h3>
                                        <h3 style={{ width: "100px" }}>Working Time</h3>
                                        <h4 style={{ width: "100px" }}>Status</h4>
                                        <h5 style={{ width: "100px" }}>Late</h5>


                                    </div>
                                    {att && att.map(val => (
                                        <>
                                            <div className="headertable" >
                                                <h1 style={{ width: "200px" }}>{val.username.substring(0, 50)}</h1>
                                                <h2 style={{ width: "100px" }}> <div className="tinvoice">
                                                    {val.date}</div> </h2>
                                                <h3 style={{ width: "100px" }} >{val.time}</h3>
                                                <h3 style={{ width: "100px" }} >{val.chkouttime}</h3>
                                                <h3 style={{ width: "100px" }} >{val.workinghours}</h3>
                                                {val.status === 'Absent' ?
                                                    <div style={{ width: "100px" }} className="yellowlabel">

                                                        <h6 >{val.status}</h6>
                                                    </div> :
                                                    <div style={{ width: "100px" }} className="greenlabel">

                                                        <h6 >{val.status}</h6>
                                                    </div>

                                                }
                                                <h5 style={{ width: "100px" }} >{val.late}</h5>



                                            </div>
                                        </>
                                    ))

                                    }
                                </div>
                            </div>
                        </>


                    }
                    {i === 1 &&
                        <Attendence props={{
                            user: user,
                            date: datec

                        }} />

                    }   
                    
                    {i === 16 &&
                        <Reports props={{
                            user: user,
                            project:project

                        }}  />

                    }
                    {i === 11 &&
                        <>  <div className="projectview">
                            <h4>     <span></span> <p>Active</p></h4>
                            <h1>Company : <p>{project.clientname}</p></h1>
                            <h1>Site : <p className='greenp'>{project.sitename}</p></h1>
                            <h1 className='teamm'>Supervisor: </h1>
                            <div className="teamates">
                                <button>{user.name}</button>



                            </div>

                            <h1 className='teamm'>Employees: </h1>

                            <div className="tablerow">
                                <div className="subtable">
                                    <div className="headertable clop">
                                        <h1>Employee</h1>

                                        <h6>Skill</h6>
                                        <h3>Address</h3>
                                        <h4>Phone</h4>
                                        <h5>OT Pay rate</h5>
                                        <h5>NC(%)</h5>


                                    </div>
                                    {project && project.user.map(val => (
                                        <>
                                            <div className="headertable">
                                                <h1><img src='' alt="" className='valimg' /> {val.name}</h1>

                                                <h6>{val.skill}</h6>

                                                <h1>{val.address}</h1>
                                                <h6>{val.phone}</h6>


                                            </div>
                                        </>
                                    ))

                                    }
                                </div>
                            </div>

                        </div>
                        </>

                    }
                    {i === 2 &&
                        <Leave props={{
                            user: user,
                            date: datec

                        }} />

                    }

                    {i === 3 &&
                        <Notes props={{
                            user: user,
                            date: datec

                        }} />

                    }
                    {i === 4 &&
                        <>

                            <div className="profilepage">
                                <img src={prof} alt="" />
                                <h1>Name:</h1>
                                <h6>{user.name}</h6>

                                <h1>Address:</h1>
                                <h6>{user.address}</h6>

                                <h1>phone:</h1>
                                <h6>{user.phone}</h6>


                                <h1>Status:</h1>
                                <h6>{user.status}</h6>

                                <h1>Cuurent Jobsite:</h1>
                                <h6>{user.sitename} </h6>

                            </div>
                        </>

                    }
                    {i === 48 &&

                        <div className='clientpro clienttro'>
                            <div className="clienthead  ">
                                <h6>Jobsites</h6>


                            </div>

                            <div className="tablerow">
                                <div className="subtable">
                                    <div className="headertable clop cloo">
                                        <h1 style={{ width: "200px" }}>Sitename</h1>
                                        <h2 style={{ width: "200px" }}>Client Name</h2>


                                    </div>
                                    {linked && linked.map(val => (
                                        <>
                                            <div className="headertable" >
                                                <h1 style={{ width: "200px" }}>{val.sitename}</h1>
                                                <h2 style={{ width: "250px" }}> <div className="tinvoice">
                                                    {val.clientname}</div> </h2>

                                                <h5 className='h5'><button onClick={e => open2(val._id)} className='manx man'>Work History</button></h5>



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

export default Supervisor