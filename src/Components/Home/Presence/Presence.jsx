import React, { useState } from 'react'

import as from '../../../images/219983.png'
import {FiUsers} from 'react-icons/fi'
import {BiSearchAlt2} from 'react-icons/bi'

import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import axios from 'axios'
import { tz } from '../../apis'
import { useEffect } from 'react'

const Presence = () => {

const [presents, setpresents] = useState([])
const [absents, setabsents] = useState([])
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
      
      var percemp=0;
      var latepp=0
      axios.get(`${tz}/user/getall`).then((res2)=>{
        
        axios.post(`${tz}/att/findcatt`,{
          date:r[0]
          
        }).then((res)=>{
          res.data.Attdata.forEach((element,index) => {
            if(element.status==='present'){
              setpresents(presents=>[...presents,element])
              
            }
            else if(element.status==='leave'){
             
             
      
            }
            if(index===res.data.Attdata.length-1){
                res2.data.User.forEach(val => {
                    var t=0
                    res.data.Attdata.forEach((val2,indexs) => {

                        if(val._id===val2.userid){
                            t=1

                        }
                        if(indexs===res.data.Attdata.length-1){
                            if(t===0){
                                
              setabsents(absents=>[...absents,val])
                            }
                        }
                        

                        
                        
                    });
                });
          
            }
      
      
            
          });
      
        })
      
      })
          return () => {
            
          }
        }, [])
       
  return (
    <div className="present">
        <div className="topsearch">
        <div className="searchspan">
            <BiSearchAlt2 className='bi2' />
            <input type="text" placeholder='Search user' />
        </div>

        </div>
        <div className="attdata">
            <div className="absent">
                <div className="absentheader">
                    <span>{presents.length}</span>
                    <p>Present</p>
                    <FiUsers className='fiu' />


                </div>
                <div className="mapabsent">
                    {presents&&presents.map((val)=>(
                        <>
                        <div className="userstat">
                            <div className="kii kii2">
                                <h1>{val.username.charAt(0)}</h1>
                            </div>

                            <p>{val.username}</p>
                        </div>
                        
                        </>
                    ))

                    }

                </div>
            </div>
            <div className="absent redabsent">
                <div className="absentheader redheader">
                    <span className='redspan'>{absents.length}</span>
                    <p>Absent</p>
                    <FiUsers  className='fiu' />


                </div>
                <div className="mapabsent ">
                    {absents&&absents.map((val)=>(
                        <>
                        <div className="userstat">
                        <div className="kii">
                                <h1>{val.username.charAt(0)}</h1>
                            </div>
                            <p>{val.username}</p>
                        </div>
                        
                        </>
                    ))

                    }

                </div>
            </div>



        </div>
        
        <div className="producheader">
                <span>
                    <div className="ricircle">
                        <div className="priconpar">
                            <RiLightbulbFlashLine className='pricon' />
                        </div>
                        <p className='sss'>{presents.length}</p>
                    </div>
                    <h1>Present</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon2">
                            <BiTime className='pricon ' />
                        </div>
                        <p>{absents.length}</p>
                    </div>
                    <h1>Absent</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon3">
                            <MdSnooze className='pricon ' />
                        </div>
                        <p>8</p>
                    </div>
                    <h1>Leave</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon4">
                            <RiTimerFlashFill className='pricon ' />
                        </div>
                        <p>{presents.length+absents.length}</p>
                    </div>
                    <h1>Total</h1>

                </span>

            </div>

    </div>
  )
}

export default Presence