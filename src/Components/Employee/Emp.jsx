import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { CgMediaLive } from 'react-icons/cg'
import { TbDeviceDesktopAnalytics, TbBriefcase, TbChartInfographic } from 'react-icons/tb'
import { AiTwotoneSecurityScan, AiOutlineMenuFold, AiOutlineLogout } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FiCamera } from 'react-icons/fi'
import {MdOutlineArrowForwardIos,MdOutlineArrowBackIosNew} from 'react-icons/md'
import { BsClockHistory } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { VscNote } from 'react-icons/vsc'
import { BiFileBlank } from 'react-icons/bi'
import { useState } from 'react'
import Arr from '../Att/Arr'
import Projects2 from '../Projects/Projects2'
import Leave from '../Leave/Leave'
import Prod from '../Home/Productivity/Prod'
import Prod2 from '../Prod/Prod2'
import Notes2 from '../Notes/Notes'
import { useEffect } from 'react'
import { tz } from '../apis'
const Emp = () => {

    useEffect(() => {
        if(localStorage.getItem('userid')&&localStorage.getItem('userid').length>0){
      
        }
        else{
          window.location.pathname='/login'
        }
      
        return () => {
          
        }
      }, [])
      function logout(){
          localStorage.removeItem('userid')
          window.location.pathname='/login'
      }
      
    const [i, seti] = useState(7)
    const [grp1, setgrp1] = useState('group1')
    const [grp2, setgrp2] = useState('group2')

function sht(){
setgrp1('group2')
setgrp2('group1')

}

function shsecond(){
    setgrp1('group1')
    setgrp2('group2')
    
    }

    return (
        <div className="dashboard">
            <div className="left">
                <h1>360</h1>
                <p className={grp1} onClick={e => seti(0)} > <MdOutlineDashboard className='iconj' /> <p>Dashboard</p></p>
                
                <p className={grp1}  onClick={e => seti(8)}><AiOutlineMenuFold className='iconj' /><p>Leave</p></p>
                <p className={grp1} onClick={e => seti(4)}> <AiTwotoneSecurityScan className='iconj' /> <p>Productivity</p></p>
               
                <p className={grp1} onClick={e => seti(1)}> <TbBriefcase className='iconj' /> <p>Projects</p></p>
                
                <p className={grp1}  onClick={e => seti(7)}> <BiFileBlank className='iconj' /><p>Notes</p></p>
                <p className={`${grp1} gri`} onClick={e => sht()} > <MdOutlineArrowForwardIos className='iconj' /> <p>Staff</p></p>

<p className={`${grp2} gri`} onClick={e => shsecond()} > <MdOutlineArrowBackIosNew className='iconj' /> <p>Staff</p></p>

                <p className={grp2}  onClick={e => seti(0)}><TbDeviceDesktopAnalytics className='iconj' /> <p>Attendence</p></p>
              
                <p  className={grp2}  onClick={e=>logout()}><AiOutlineLogout className='iconj' /><p>Logout</p></p>


            </div>
            <div className="right">
                {i===0&&
                <Arr />

                }
                {i===1&&
                <Projects2 />

                }
                 {i===8&&
                <Leave />

                }
                 {i===4&&
                <Prod2 />

                }
                {i===7&&
                <Notes2 />

                }
              


            </div>
        </div>
    )
}

export default Emp