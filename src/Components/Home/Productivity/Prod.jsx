import React from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import axios from 'axios'

import as from '../../../images/219983.png'
import { useEffect } from 'react'
import { tz } from '../../apis'
import { useState } from 'react'

const Prod = () => {
var data=[{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},
{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},
]
const [prod, setprod] = useState()
const [ptime, setptime] = useState(0)
const [itime, setitime] = useState(0)
useEffect(() => {
    
    let options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12:false
    },
    formatter = new Intl.DateTimeFormat([], options);
  
  var t=formatter.format(new Date())
  var r=t.split(', ')
  
  axios.post(`${tz}/att/findcatt`,{
    date:r[0]
    
  }).then((res)=>{
   
      console.log(res)
      setprod(res.data.Attdata)
      res.data.Attdata.forEach(element => {
        setptime(ptime=>ptime+element.workingtime)
        setitime(itime=>itime+element.Idletime)
      });
    });
      return () => {
        
      }
    }, [])
    

   
    return (
        <div className="prodi">
            <div className="prodiheader">

                <GiEnergyArrow className='ene' />
                <h1>Productivity</h1>
                {/*
                <div className="spanicon">
                    <AiOutlineReload className='relo' />

                </div>
    */}

            </div>
            <div className="producheader">
                <span>
                    <div className="ricircle">
                        <div className="priconpar">
                            <RiLightbulbFlashLine className='pricon' />
                        </div>
                        <p className='sss'>{ptime}</p>
                    </div>
                    <h1>Total Productivity (%)</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon2">
                            <BiTime className='pricon ' />
                        </div>
                        <p>{parseInt((ptime/60)).toString()}:{ptime%60} hrs</p>
                    </div>
                    <h1>Total Working Time</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon3">
                            <MdSnooze className='pricon ' />
                        </div>
                        <p>{parseInt((itime/60)).toString()}:{itime%60} hrs</p>
                    </div>
                    <h1>Total Idle Time</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon4">
                            <RiTimerFlashFill className='pricon ' />
                        </div>
                        <p>{parseInt(((ptime+itime)/60)).toString()}:{(ptime+itime)%60} hrs</p>
                    </div>
                    <h1>Total Time</h1>

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
                    <h1>Name</h1>
                    <h2>Working Time</h2>
                    <h3>Idle Time</h3>
                    <h4>Checkin Time</h4>
                    <h5>Checkout time</h5>
                    <h6>Status</h6>


                </div>
                {prod&&prod.map(val=>(
                    <>
                     <div className="headertable">
                    <h1>{val.username}</h1>
                    <h2>{val.workingtime}</h2>
                    <h3>{val.Idletime}</h3>
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

export default Prod