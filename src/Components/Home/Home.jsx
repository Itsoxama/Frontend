import React from 'react'
import "./Home.css"
import { MdOutlineDashboard } from 'react-icons/md'
import { CgMediaLive } from 'react-icons/cg'
import { TbDeviceDesktopAnalytics, TbBriefcase, TbChartInfographic } from 'react-icons/tb'
import { AiTwotoneSecurityScan, AiOutlineMenuFold, AiOutlineLogout } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FiCamera } from 'react-icons/fi'
import { BsClockHistory } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { VscNote } from 'react-icons/vsc'
import { BiFileBlank } from 'react-icons/bi'
import { useState } from 'react'
import {BiBuildingHouse} from 'react-icons/bi'
import Dashboard from './Dashboard'
import 'react-calendar/dist/Calendar.css';
import {VscSourceControl} from 'react-icons/vsc'
import Users from './Users/Users'
import Presence from './Presence/Presence'
import Prod from './Productivity/Prod'
import Userdata from './Userdata/Userdata'
import {MdOutlineArrowForwardIos,MdOutlineArrowBackIosNew} from 'react-icons/md'
import Snapshot from './Snapshot/Snapshot'
import Apps from './App/App'
import Projects from './Projects/Projects'
import Track from './Track/Track'
import Reports from './Report/Report'
import Leave2 from './Leave/Leave2'
import Notes from './Notes/Notes'
import Emp from './Employeetype/Emp'
import Jobsite from './Jobsite/Jobsite'
import { useEffect } from 'react'
import Client from './Client/Client'
import ChPresence from './ChPresence/ChPresence'
import Admin from './Admin/Admin'
import { tz } from '../apis'
import axios from 'axios'
import Notes2 from './Notes/Notes2'
const Home = () => {
    const [datax, setdatax] = useState()
useEffect(() => {
  if(localStorage.getItem('userid')&&localStorage.getItem('userid').length>0){
if(localStorage.getItem('emptype')==='admin'){

    axios.post(`${tz}/admin/login2`,
    {
        email:localStorage.getItem('username')
    }).then(res=>
        {
            console.log(res
                )
                setdatax(res.data.Admin)
        })
    
}
else{

    window.location.pathname='/user'
}
  }
  else{
    window.location.pathname='/login'
  }

  return () => {
    
  }
}, [])
function setis(val){
  seti(55)
  setTimeout(() => {
    seti(val)
  }, 100);
}
function logout(){
    localStorage.removeItem('userid')
    window.location.pathname='/login'
}
    const [i, seti] = useState(16)
    const [grp1, setgrp1] = useState('group1')
    const [grp2, setgrp2] = useState('group2')
    const [grp3, setgrp3] = useState('group2')
    function shsecond(){
        setgrp2('group1')
        setgrp3('group2')
        setgrp1('group2')
    }
    function shf(){
        setgrp2('group2')
        setgrp3('group2')
        setgrp1('group1')
    }
    
    function sht(){
        setgrp2('group2')
        setgrp3('group1')
        setgrp1('group2')
    }
    return (
    <>
    {datax&&
        <div className="dashboard">
        <div className="left">
            <h1>Monitor</h1>
            <p className={`${grp1} ${i===0&&'activemenu'}`} onClick={e => setis(0)} > <MdOutlineDashboard className='iconj' /> <p>Dashboard</p></p>

          {datax.stream==='Allowed'&&
            <p className={`${grp1} ${i===1&&'activemenu'}`} onClick={e => setis(1)}> <CgMediaLive className='iconj' /> <p>Live Stream</p></p>
          

          }
  {datax.presence==='Allowed'&&
          
          <p className={`${grp1} ${i===2&&'activemenu'}`} onClick={e => setis(2)}><TbDeviceDesktopAnalytics className='iconj' /> <p>Presence</p></p>
           
          }

{datax.productivity==='Allowed'&&
          
          <p className={`${grp1} ${i===4&&'activemenu'}`} onClick={e => setis(4)}> <AiTwotoneSecurityScan className='iconj' /> <p>Productivity</p></p>
            
          }


{datax.staff==='Allowed'&&
          
          <p className={`${grp1} ${i===5&&'activemenu'}`} onClick={e => setis(5)} > <FaUserAlt className='iconj' /> <p>Staff</p></p>
             
          }

 
           <p  className={`${grp1} ${i===0&&'activemenu'} gri`} onClick={e => shsecond()} > <MdOutlineArrowForwardIos className='iconj' /> <p>Staff</p></p>


            <p className={`${grp2} ${i===0&&'activemenu'} gri`} onClick={e => shf()} > <MdOutlineArrowBackIosNew className='iconj' /> <p>Staff</p></p>
            {datax.site==='Allowed'&&
           <p className={`${grp2} ${i===13&&'activemenu'}`} onClick={e => setis(13)} > <BiBuildingHouse className='iconj' /> <p>Site Projects</p></p>
           
          }
           {datax.company==='Allowed'&&
            <p className={`${grp2} ${i===16&&'activemenu'}`} onClick={e => setis(16)} > <FaUserAlt className='iconj' /> <p>Company</p></p>

          }
    {datax.snaps==='Allowed'&&
             <p className={`${grp2} ${i===6&&'activemenu'}`} onClick={e => setis(6)}><FiCamera className='iconj'  /> <p>Snapshots</p></p>
            
          }
    {datax.apps==='Allowed'&&
            <p className={`${grp2} ${i===7&&'activemenu'}`} onClick={e => setis(7)}><VscNote className='iconj' /> <p>Applications</p></p>
          
          }


           
          
            
          
          <p className={`${grp2} ${i===0&&'activemenu'} gri`}  onClick={e => sht()} > <MdOutlineArrowForwardIos className='iconj' /> <p>Staff</p></p>

            <p className={`${grp3} ${i===0&&'activemenu'} gri`}  onClick={e => shsecond()} > <MdOutlineArrowBackIosNew className='iconj' /> <p>Staff</p></p>
          
{datax.gps==='Allowed'&&
             <p className={`${grp3} ${i===9&&'activemenu'}`}  onClick={e => setis(9)}> <BiFileBlank className='iconj' /><p>GPS Location</p></p>
           
          }
    {datax.leave==='Allowed'&&
            <p className={`${grp3} ${i===11&&'activemenu'}`} onClick={e => setis(11)}><AiOutlineMenuFold className='iconj' /><p>Leave</p></p>
           
          }

          
          <p className={`${grp3} ${i===12&&'activemenu'}`} onClick={e => setis(12)}> <BiFileBlank className='iconj' /><p>Notes</p></p>
          {datax.reports==='Allowed'&&
             <p  className={`${grp3} ${i===10&&'activemenu'}`} onClick={e => setis(10)}><BsClockHistory className='iconj' /><p>Reports</p></p>
            
          }
    {datax.admin==='Allowed'&&
              <p className={`grts ${i===14&&'activemenu'}`} onClick={e => setis(14)}> <VscSourceControl className='iconj' /> <p>Admin Control</p></p>
            
          }
           
          <p className={`grts ${i===8&&'activemenu'}`} onClick={e => setis(8)}> <TbBriefcase className='iconj' /> <p>Projects</p></p>
            <p className={`${grp3} ${i===123&&'activemenu'}`} onClick={e=>logout()}><AiOutlineLogout className='iconj' /><p>Logout</p></p>


        </div>
        <div className="right">
            {
                i === 0 &&
                <Dashboard />

            }{i === 1 &&
                <Users />

            }
            {i === 2 &&
                <ChPresence />

            }
            {i === 4 &&
                <Prod />

            }{
                i === 5 &&
                <Emp />
            }
            {i===6&&
            <Snapshot />

            }
              {i===7&&
            <Apps />

            }
            {i===8&&
            <Projects />

            }
            {i===9&&
            <Track />

            }
              {i===10&&
            <Reports />

            }
            {i===11&&
            <Leave2 />

            }
            {i===12&&
            <Notes2 />
            

            }
             {i===13&&
            <Jobsite />
            

            }
            {i===16&&
           <Client />
           

           }
           {i===14&&
          <Admin />
          

          }


        </div>
    </div>

    }
    </>
    )
}

export default Home