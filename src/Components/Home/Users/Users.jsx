import React from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FiUsers} from 'react-icons/fi'
import chrome from '../../../images/chrome.png'
import { useState } from 'react'
import {TbCapture} from 'react-icons/tb'

import cimage from '../../../images/123/a7.png'
import  {AiOutlineClose} from 'react-icons/ai'
const Users = () => {

    var data=[{
        name:'Usama',
        alldata:'alldata alldataoff',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },
    {
        name:'Usama',
        alldata:'alldata',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },{
        name:'Usama',
        alldata:'alldata',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },{
        name:'Usama',
        alldata:'alldata alldataoff',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },{
        name:'Usama',
        alldata:'alldata alldataoff',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },{
        name:'Usama',
        alldata:'alldata',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },{
        name:'Usama',
        alldata:'alldata alldataoff',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },{
        name:'Usama',
        alldata:'alldata',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },{
        name:'Usama',
        alldata:'alldata',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome'
    },


]

function showadduser() {

    
}
const [viewsnap, setviewsnap] = useState('viewsnap2')
return (
    <>
    
    <div className={viewsnap}>
        <div className="subview">
            <AiOutlineClose onClick={e=>setviewsnap('viewsnap2')} className='ais' />
            <img src={cimage} alt="" />
            <div className="basics">
                <p>Usama</p>
                <h3>United States</h3>
                <h4>Microsoft Word</h4>
                <h2>Date: 12-7-2022</h2>
                <h2>Time: 6:06 PM</h2>
            </div>
        </div>


                
                </div>
    <div className="users">
        

<div className="temphead">
    
</div>
        <div className="topusers ">
            <h1><FiUsers className='hiu' />13 Users Online</h1>
        </div>
        <div className="allusersdata">
            {data.map((Val)=>(
                <>
                <div className={Val.alldata} onClick={e=>setviewsnap('viewsnap')}>
                    <div className="screensh">
                        <TbCapture className='tbg' />

                    </div>
                    <div className="topall">
                        <div className="span">

                        </div>
                        <div className="titleperson">
                            <p>{Val.name}</p>
                            <h4>
                                {Val.Role}
                            </h4>
                        </div>
                        
                    </div>
                    <div className="prodlive">
                        <div className="time">
                            <p>{Val.Time}</p>
                            <h4>In Time</h4>

                        </div>
                        <div className="tivity">

                        <p>{Val.prod}</p>
                            <h4>Productivity</h4>
                        </div>
                        
                    </div>
                    <div className="appuse">
                        <img src={chrome} alt="" />
                        <p>Chrome</p>
                    </div>
                    <div className="chktime">
                        <p>Checkin Time 24:12</p>
                    </div>

                </div>
                </>
            ))

            }


        </div>

    </div>
    </>
  )
}

export default Users