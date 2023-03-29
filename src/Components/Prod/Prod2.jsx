import React from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'

import axios from 'axios'
import as from '../../images/219983.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { tz } from '../apis'
const Prod2 = () => {
var data=[{
    name:"26-12-2022",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},
{
    name:"27-12-2022",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"28-12-2022",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"29-12-2022",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"30-12-2022",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},
]
const [atte, setatte] = useState()

useEffect(() => {
  
axios.post(`${tz}/att/finduserdata`,{
    userid:localStorage.getItem('userid')
}).then((res)=>{
    console.log(res)
    setatte(res.data.Attdata)
})
  return () => {
    
  }}, [])

    return (
        <div className="prodi">
            <div className="prodiheader">

                <GiEnergyArrow className='ene' />
                <h1>Productivity</h1>
                <div className="spanicon">
                    <AiOutlineReload className='relo' />

                </div>


            </div>
            <div className="producheader">
                <span>
                    <div className="ricircle">
                        <div className="priconpar">
                            <RiLightbulbFlashLine className='pricon' />
                        </div>
                        <p className='sss'>55.72</p>
                    </div>
                    <h1>Total Productivity (%)</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon2">
                            <BiTime className='pricon ' />
                        </div>
                        <p>55.72</p>
                    </div>
                    <h1>Total Working Time</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon3">
                            <MdSnooze className='pricon ' />
                        </div>
                        <p>55.72</p>
                    </div>
                    <h1>Total Idle Time</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon4">
                            <RiTimerFlashFill className='pricon ' />
                        </div>
                        <p>55.72</p>
                    </div>
                    <h1>Total Working Time</h1>

                </span>

            </div>
            <div className="graphprod">
                <div className="colorgraph">
                    <div className="subcolor">

                    </div>

                </div>
                <div className="spani">
                   <div className="twocolor">

                   </div>
                    <p>Productive</p>
                    <div className="onecolor">

                    </div>
                    <p>Idle</p>
                </div>

            </div>
            <div className="tablerow">
              <div className="subtable">
              <div className="headertable clop">
                    <h1>Date</h1>
                    <h2>Working Time</h2>
                    <h3>Idle Time</h3>
                    <h4>Checkin time</h4>
                    <h5>Checkout time</h5>
                    <h6>Status</h6>


                </div>
                {atte&&atte.map(val=>(
                    <>
                     <div className="headertable">
                    <h1>{val.date}</h1>
                    <h2>{parseInt((val.workingtime/60)).toString()}:{val.workingtime%60} hrs</h2>
                    <h3>{parseInt((val.Idletime/60)).toString()}:{val.Idletime%60} hrs</h3>
                    <h4>{val.chkintime}</h4>
                    <h5>{val.chkouttime}</h5>
                    <h6>{val.status}</h6>


                </div>
                    </>
                ))

                }
              </div>
            </div>

        </div>
    )
}

export default Prod2