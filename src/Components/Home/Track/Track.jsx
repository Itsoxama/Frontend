import React from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FiUsers} from 'react-icons/fi'
import chrome from '../../../images/chrome.png'
import { useState } from 'react'
import {TbCapture} from 'react-icons/tb'
import {GiEnergyArrow} from 'react-icons/gi'
import cimage from '../../../images/123/a7.png'
import  {AiOutlineClose} from 'react-icons/ai'
const Track = () => {

    var data=[{
        name:'Alex Hoo',
        alldata:'alldata allkji ',
        Role:"Manager",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        
        cx:'32.9086465',
        cy:'-96.4327892'
    },
    {
        name:'John hook',
        alldata:'alldata allkji',
        Role:"site manager",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        
        cx:'32.9086465',
        cy:'-96.4327892'
    },{
        name:'Aliza',
        alldata:'alldata allkji',
        Role:"Labour ",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        
        cx:'32.9086465',
        cy:'-96.4327892'
    },{
        name:'Michael jan',
        alldata:'alldata allkji ',
        Role:"Interviewer",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        
        cx:'32.9086465',
        cy:'-96.4327892'
    },{
        name:'Anna Lu',
        alldata:'alldata allkji ',
        Role:"Lead guide",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        
        cx:'32.9086465',
        cy:'-96.4327892'
    },{
        name:'Michael jan',
        alldata:'alldata allkji ',
        Role:"Interviewer",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        cx:'32.9725646',
        cy:'-96.3259621,'
    },{
        name:'Usama',
        alldata:'alldata allkji ',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        cx:'32.9086465',
        cy:'-96.4327892'
    },{
        name:'Michael jan',
        alldata:'alldata allkji ',
        Role:"Interviewer",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        cx:'32.8357196',
        cy:'-96.9985759'
    },{
        name:'Usama',
        alldata:'alldata allkji',
        Role:"Analyst",
        Time:"9:59 AM",
        prod:"78%",
        App:'chrome',
        cx:'33.6461824',
        cy:'73.07264'
    },


]

function showadduser() {

    
}
function setviewsnaps(val1,val2) {
    setcx(val1)
    setcy(val2)
    setviewsnap('viewsnap')
}
const [viewsnap, setviewsnap] = useState('viewsnap2')
const [cx, setcx] = useState('')
const [cy, setcy] = useState('')
return (
    <>
    
    <div className={viewsnap}>
        <div className="subview ghy">
            <AiOutlineClose onClick={e=>setviewsnap('viewsnap2')} className='ais' />
            <iframe class="map" width="884" height="408" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://maps.google.com/?ie=UTF8&t=m&ll=${cx},${cy}&spn=0.003381,0.017231&z=16&output=embed`}></iframe>

        </div>


                
                </div>
    <div className="users">
        

    <div className="prodiheader">

<GiEnergyArrow className='ene' />
<h1>Live Locations</h1>
<div className="spanicon">

</div>


</div>
        <div className="allusersdata">
            {data.map((Val)=>(
                <>
                <div className={Val.alldata} onClick={e=>setviewsnaps(Val.cx,Val.cy)}>
          
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
                  

                </div>
                </>
            ))

            }


        </div>

    </div>
    </>
  )
}

export default Track