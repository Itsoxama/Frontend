import React from 'react'

import { BiUserCircle } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { AiOutlineReload } from 'react-icons/ai'
import Calendar from 'react-calendar';
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { tz } from '../apis';
const Arr = () => {

  var ty='15:00'
    const [usersdata, setusersdata] = useState()
const [username, setusername] = useState(localStorage.getItem('username'))
const [userid, setuserid] = useState(localStorage.getItem('userid'))
const [workingt, setworkingt] = useState('')
const [idlet, setidlet] = useState('')
const [date, setdate] = useState('')
const [day, setday] = useState('')
const [late, setlate] = useState('')
const [status, setstatus] = useState('')
const [chkintime, setchkintime] = useState('')
const [e, sete] = useState(0)
const [chkouttime, setchkouttime] = useState('')
function chklate(intime) {
  var f=intime.split(':')
  var hrs=parseInt(f[0])
  var mins=parseInt(f[1])

  
  var f2=ty.split(':')
  var hrs2=parseInt(f2[0])
  var mins2=parseInt(f2[1])
  var lt=hrs-hrs2
  var ltm=mins-mins2
  if(lt>=0){
    
    setlate(`${lt}:${ltm}`)

  }
  else if(lt===0&&ltm>5){
    setlate(`${lt}:${ltm}`)
  }
  else{
    setlate('On time')
  }


  
}
useEffect(() => {
  axios.post(`${tz}/att/finduserdata`,{
    userid:localStorage.getItem('userid')
  }).then(res=>{
    console.log(res)
    setusersdata(res.data.Attdata)
    
  })

  return () => {
    
  }
}, [e])
const [f, setf] = useState(0)
function time() {
  setshowbtn(false)
  var ctime=new Date
  console.log(ctime.getTimezoneOffset)
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
console.log(r)
  setchkintime(r[1])
  setdate(r[0])
  setchkouttime('')
  chklate(r[1])
  setstatus('present')
  setworkingt(0)
  setidlet(0)
  setf(f+1)










}

useEffect(() => {
  if(f){

    console.log('called')

    axios.post(`${tz}/att/add`,{
      username:username,
      userid:userid,
      chkintime:chkintime,
      chkouttime:chkouttime,
      date:date,
      workingtime:workingt,
      Idletime:idlet,
      late:late,
      status:status
    }).then(res=>{
      console.log(res)
      sete(e+1)
      
  setiu(iu+1)
    
    })
  }
 
  return () => {
    
  }
}, [f])
const [showbtn, setshowbtn] = useState(false)
const [idtoday, setidtoday] = useState('')
const [allgrey, setallgrey] = useState(false)
const [iu, setiu] = useState(0)

useEffect(() => {
  var ctime=new Date
  console.log(ctime.getTimezoneOffset)
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
  axios.post(`${tz}/att/findcattuser`,{
    userid:localStorage.getItem('userid'),
    date:r[0]
  }).then((res)=>{
console.log(res)
if(res.data.Attdata.length>0){
setshowbtn(false)
console.log(res.data.Attdata)
res.data.Attdata.forEach(element => {
 if(element.date===r[0]){
  setidtoday(element._id)
  if(element.chkouttime&&element.chkouttime.length>0){
setallgrey(true)
  }

 } 
});
}else{
  
setshowbtn(true)
}
  })
  return () => {
    
  }
}, [iu])

function checkout(val){
  var ctime=new Date
  console.log(ctime.getTimezoneOffset)
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
console.log(r)


axios.post(`${tz}/att/update`,{
  _id:val,
  time:r[1]

}).then(res=>{
  console.log(res)
  setiu(iu+1)
  sete(e+1)

})


}

  return (



<>
    <div className="arr">
        <div className="topusersdata">
                <BiUserCircle className='usio' />
                <h1 className='at'>Attendence</h1>
             
               {showbtn&&
                <button className='aty' onClick={e=>time()}>Clock in</button>
                


               }


            </div>
            <div className="chy">
              
    {showbtn&&
                <button className='aty' onClick={e=>time()}>Clock in</button>
                


               }
                {!showbtn&&
                <button className='aty atyred' >Clock in</button>
                


               }
               {allgrey?
               <>
               {(allgrey||showbtn)&&
                <button className='aty atyred' >Clock out</button>
                                                                            


               }</>
               :
               <>
                 {!showbtn&&
                <button className='aty werq' onClick={e=>checkout(idtoday)}>Clock out</button>
                


               }</>}
            </div>

            <div className="tablerow">
              <div className="subtable">
              <div className="headertable clop">
              <h2 style={{paddingLeft:'10px'}}>Date</h2>
                    <h1 style={{width:'120px'}}>Employee</h1>
                    <h2 style={{width:'120px'}}>Checking Time</h2>
                    <h4 style={{width:'120px'}}>Productive Time</h4>
                    <h3 style={{width:'80px'}}>Idle Time</h3>
                    <h5 style={{width:'120px'}}>Checkout</h5>
                    <h5 style={{width:'80px'}}>Late</h5>
                    <h6 style={{width:'80px'}}>Status</h6>


                </div>
                {usersdata&&usersdata.map(val=>(
                    <>
                     <div className="headertable">
                       <h2 style={{paddingLeft:'10px'}}>{val.date}</h2>
                    <h1 style={{width:'120px'}}><img src='' alt="" className='valimg' /> {val.username}</h1>
                    <h2 style={{width:'120px'}} >{val.chkintime}</h2>
                    <h3 style={{width:'120px'}} >{val.workingtime}</h3>
                    <h4 style={{width:'80px'}} >{val.Idletime}</h4>
                    <h5 style={{width:'120px'}} >
                      
                      {val.chkouttime.length<=2?
                  <>
                  <button className='chkio' onClick={e=>checkout(val._id)}>Check out</button>
                  </> :
                  val.chkouttime 
                  }
                      
                      </h5>
                    <h5 style={{width:'80px'}} >{val.late}</h5>
                    <h6 style={{width:'80px'}} >{val.status}</h6>


                </div>
                    </>
                ))

                }
              </div>
            </div>
    </div>
     
    </>
  )
}

export default Arr