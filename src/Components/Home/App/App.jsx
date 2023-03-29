import React, { useState } from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import a from '../../../images/123/a.png'
import a2 from '../../../images/123/a2.png'
import a3 from '../../../images/123/a3.png'
import a4 from '../../../images/123/a4.png'
import a5 from '../../../images/123/a5.png'
import a6 from '../../../images/123/a6.png'
import a7 from '../../../images/123/a7.png'
import a8 from '../../../images/123/a8.png'
import a9 from '../../../images/123/a9.png'
import a10 from '../../../images/123/a10.png'
import as from '../../../images/219983.png'
import {AiOutlineClose} from 'react-icons/ai'

import ch from '../../../images/ch.png'
import ws from '../../../images/wh.png'
import e from '../../../images/e.png'
import ppt from '../../../images/ppt.png'
import f from '../../../images/f.png'
import y from '../../../images/y.png'
import w from '../../../images/w.png'
import vs from '../../../images/vs.png'




const Apps = () => {


var data=[{
    snapshot:ch,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe',
    percentage:15
},
{
    snapshot:w,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Word',
    percentage:30
},
{
    snapshot:e,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Excel',
    
    percentage:40
},
{
    snapshot:ppt,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Powerpoint',
    
    percentage:55
},
{
    snapshot:ws,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Whatsapp',
    
    percentage:70
},
{
    snapshot:f,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Facebook',
    
    percentage:5
},
{
    snapshot:y,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Youtube',
    
    percentage:25
},
{
    snapshot:vs,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Visual studio',
    percentage:25
},
]

const [cimage, setcimage] = useState()
const [cloc, setcloc] = useState()
const [cprog, setcprog] = useState()
const [cuser, setcuser] = useState()
const [ctime, setctime] = useState()

    return (
    <>
        <div className="prodi">
            
         <div className="temphead"></div>
            <div className="prodiheader fixedheader">

                <GiEnergyArrow className='ene' />
                <h1>App Usage</h1>
                <div className="spanicon">
                    <AiOutlineReload className='relo' />

                </div>


            </div>
            <div className="graphs">
                <div className="subgraph">
                    {data.map(val=>(
                        <>
                        <div className="build" style={{height:`${val.percentage.toString()}%`}}>
                            <img src={val.snapshot} alt="" />
                  


                        </div>
                        </>
                    ))

                    }
                    <div className="subgraphan">
                    {data.map(val=>(
                        <>
                        <div className="build2" >
                            <img src={val.snapshot} alt="" />
                            <p>{val.User}</p>
                            <h5>{val.percentage}%</h5>
                  


                        </div>
                        </>
                    ))

                    }

                    </div>

                </div>
                
            </div>
            <div className="appss">
                {data.map(val=>(
                    <>
                    <div className="appf">
                        <img src={val.snapshot} alt="" />
                        <div className="descript">
                            <p>{val.User}</p>
                            <h3>{val.percentage}%</h3>
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

export default Apps