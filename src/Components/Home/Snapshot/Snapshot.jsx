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
const Snapshot = () => {


var data=[{
    snapshot:a,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a6,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a5,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a3,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a4,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a5,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a3,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a4,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a5,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a3,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a4,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a5,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a3,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
{
    snapshot:a4,
    Time:'10:45',
    Date:"12-12-2022",
    Location:'United states',
    User:'Jose Doe'
},
]

const [cimage, setcimage] = useState()
const [cloc, setcloc] = useState()
const [cprog, setcprog] = useState()
const [cuser, setcuser] = useState()
const [ctime, setctime] = useState()
const [cdate, setcdate] = useState()
function callset(val) {
    setcimage(val.snapshot)
    setcloc(val.Location)
    setctime(val.Time)
    setcdate(val.Date)
    setcuser(val.User)
setviewsnap('viewsnap')
    
}
const [viewsnap, setviewsnap] = useState('viewsnap2')

    return (
    <>
       <div className={viewsnap}>
        <div className="subview">
            <AiOutlineClose onClick={e=>setviewsnap('viewsnap2')} className='ais' />
            <img src={cimage} alt="" />
            <div className="basics">
                <p>{cuser}</p>
                <h3>{cloc}</h3>
                <h4>Microsoft Word</h4>
                <h2>Date: {cdate}</h2>
                <h2>Time: {ctime}</h2>
            </div>
        </div>


                
                </div>
        <div className="prodi">
            
         <div className="temphead">
            
         </div>
            <div className="prodiheader fixedheader">

                <GiEnergyArrow className='ene' />
                <h1>Snapshots</h1>
                <div className="spanicon">
                    <AiOutlineReload className='relo' />

                </div>


            </div>
            <div className="snapshots">
            {data.map(val=>(
                <>
                <div onClick={e=>callset(val)} className="itemsnap">
                    <img src={val.snapshot} alt="" />
                    <p>{val.User}</p>
                    <h3>{val.Date}  {val.Time}</h3>

                </div>
                </>
            ))

            }

            </div>
           

        </div>
        </>
    )
}

export default Snapshot