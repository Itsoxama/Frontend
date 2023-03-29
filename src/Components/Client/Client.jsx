import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import './Client.css'
import {BsCreditCard2FrontFill} from 'react-icons/bs'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { AiOutlineReload } from 'react-icons/ai'
import {RiCloseFill} from 'react-icons/ri'
import prof from '../../images/prof.png'
import ReactToPrint from 'react-to-print';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {FaUserCheck,FaUserTimes,FaUserEdit} from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr'
import XLSX from 'sheetjs-style'
import {FiLogOut} from 'react-icons/fi'
import jsPDF from 'jspdf';

import * as file from 'file-saver'
import axios from 'axios'
import { useEffect } from 'react';
import { tz } from '../apis';
import {TbFileInvoice} from  'react-icons/tb'
import { useRef } from 'react'
 
const Client = () => {
    const accesstoken="sk.eyJ1IjoidXNhbXNhbGVlbTEyMyIsImEiOiJjbGV2ZjJ5cmYwbnI5M3hta3RnMGFxeTlwIn0.c9pItAGw_ws3lVlSuVRMKA"
  
    
      
   
const [adduser, setadduser] = useState('adduser2')
const [value, onChange] = useState(new Date());

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [pass, setpass] = useState('')
const [checkintime, setcheckintime] = useState('')
const [chkouttime, setchkouttime] = useState('')

const [username, setusername] = useState('')
const [address, setaddress] = useState('')
const [terms, setterms] = useState('')
const [phone, setphone] = useState('')



const [c, setc] = useState(0)
function onChanges(e) {
console.log(e)
    
}
function submit() {
    if(actiontype==='edit'){
    
    axios.post(`${tz}/client/add`,{
      
        username:username,
        address:address+" "+cty+" "+state+" "+zip,
        number:phone,
        terms:terms,
        markup:markup,       
    }).then( res=>{
        console.log(res)
        
    }).then(()=>{
        setadduser('adduser2')
         axios.get(`${tz}/client/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.Client)
    })
    })}
    else{
       console.log('hy')
       setactiontype('edit')
    axios.post(`${tz}/client/updatedata`,{
      
        username:username,
        address:address,
        number:phone,
        terms:terms,
        markup:markup,
        _id:idb       
    }).then( res=>{
        console.log(res)
        
    }).then(()=>{
        setadduser('adduser2')
         axios.get(`${tz}/client/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.Client)
    })
    })} 
    }
    

const [userd, setuserd] = useState()
const [sites, setsites] = useState()
const [Notifications, setNotifications] = useState()
useEffect(() => {
    var t=localStorage.getItem('companyid')
    if(t&&t.length>5){
        axios.post(`${tz}/client/findbyid`,{
            Client_id:localStorage.getItem('companyid')
        }).then(res=>{
            console.log(res)
            setuserd(res.data.Client)
            openhistory(res.data.Client[0])
          
           
        })
        axios.post(`${tz}/jobsite/findbyname`,{
            cname:localStorage.getItem('companyname')
        }).then(res => {
            console.log(res)
            if(res.data.Jobsite.length>0){
                
            setsites(res.data.Jobsite)
            }
            axios.post(`${tz}/noti/find`,{
                id:localStorage.getItem('companyid')
            }).then(resa => {
                console.log(resa)
                setNotifications(resa.data.Not)
            })


        })
    }
    else{
        window.location.pathname='client-login'
    }

  return () => {
    
  }
}, [])

function logout(){
    localStorage.removeItem('companyname')
    
    localStorage.removeItem('companyid')
    window.location.reload()
}

const [invoicemenu, setinvoicemenu] = useState()

 var styleforaddress=
{		border: {
    right: {
        style: "thin",
        color: {rgb:'FFFFFF'}
    },
    left: {
        style: "thin",
        color: {rgb:'FFFFFF'}
    },
    bottom: {
        style: "thin",
        color: {rgb:'FFFFFF'}
    },
    top: {
        style: "thin",
        color: {rgb:'FFFFFF'}
    },
},
    font: {
        name: "arial",
        bold: true,
        sz:10,
        
        color: {rgb:'4069A7'}
    },
    alignment: {
        vertical: "center",
        horizontal: "left",
    },	
};
var styleforaddress2=
{		border: {
   right: {
       style: "thin",
       color: {rgb:'FFFFFF'}
   },
   left: {
       style: "thin",
       color: {rgb:'FFFFFF'}
   },
   bottom: {
       style: "thin",
       color: {rgb:'FFFFFF'}
   },
   top: {
       style: "thin",
       color: {rgb:'FFFFFF'}
   },
},
   font: {
       name: "arial",
       bold: true,
       sz:10,
       
       color: {rgb:'4069A7'}
   },
   alignment: {
       vertical: "center",
       horizontal: "center",
   },	
};
const [txp, settxp] = useState()
const [totalall, settotalall] = useState()
function exports2(preparedata) {
    var tx=[]
    var alltotal=0
    preparedata.invoicedetails.forEach((val,index) => {
        alltotal=alltotal+parseFloat(val.total)
        settotalall(alltotal)
   
        tx.push({
            ["NAME"]:val.empname,
            ["REG HRS"]:val.hrs,
            ["WEEKEND"]:preparedata.date,
            ["REG RTE"]:val.payrate,
            ["OT HRS"]:val.othrs,
            ["OT RTE"]:val.otpayrate,
            ["TOTAL"]:val.total,
            ["SKILL"]:val.skill,



        })
        if(preparedata.invoicedetails.length-1===index){
           
    const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    var ext = '.xlsx'
    
const myHeader = ["date","empname",'skill',"hrs",'payrate','othrs','otpayrate','total'];

console.log(preparedata.invoicedetails)

   
   

settxp(tx)
setaduserl('adduser')


        }
    
      
    });


}

const [transacid, settransacid] = useState('')

function recieve(val) {
    seti(0)
    settransacid(val._id)
    setstatus(val.status)
}
function openinvoice(val) {
    setinvoice(2)
    setinvoicedata(val.invoicedetails)
    exports2(val)
    setinid(val._id)

}
const [inid, setinid] = useState('')
const [cuurid, setcuurid] = useState('')
function openhistory(val) {
    setcurrname(val)
    setinvoicemenu(val.invoicedata)
    setcuurid(val._id)
    setinvoice(1)
    val.invoicedata.forEach(element => {
        setpaid(paid=>paid+parseInt(element.paid))
        
        setbalance(balance=>balance+parseInt(element.balance))
        settotalx(totalx=>totalx+parseInt(element.total))
       if(element.status==='pending'){
        setpending(pending=>pending+1)
       }
       else{
        
        setcleared(cleared=>cleared+1)
       } 
    });



}
const [pending, setpending] = useState(0)
const [cleared, setcleared] = useState(0)
const [paid, setpaid] = useState(0)
const [balance, setbalance] = useState(0)
const [totalx, settotalx] = useState(0)
const [invoice, setinvoice] = useState(0)
const [invoicedata, setinvoicedata] = useState()
const [i, seti] = useState(1)
const [amount, setamount] = useState(0)
const [status, setstatus] = useState('')
const [markup, setmarkup] = useState(0)
function postrecieved() {
    setpaid(0)
        
    setbalance(0)
    settotalx(0)

    setpending(0)
   
    
    setcleared(0)
  



var t1=0;
var t2=0;
var t3=0;
    invoicemenu.forEach((element,index) => {
        if(element._id===transacid){
           t1=parseFloat(element.total)-amount
            t2=parseFloat(element.balance)-amount
            t3=parseFloat(element.paid)+parseFloat(amount)
            
    axios.post(`${tz}/client/updatefunds`,{
        id:cuurid,
        subid:element._id,
        paid:t3.toString(),
        balance:t2,
        status:status
          
   
   
   
       }).then(res2=>{  
        console.log(res2)
        axios.get(`${tz}/client/getall`).then(res=>{
            console.log(res)
            setuserd(res.data.Client)
            res.data.Client.forEach(sd => {
                if(sd._id===cuurid){



                    openhistory(sd)
                    seti(1)

                }
                
            });

    })
       })
        }
    });
}
const [ids, setids] = useState('')
const [actiontype, setactiontype] = useState('edit')
function deleteuser() {
    console.log(ids)
    var r=ids.split('4sd')
    r[r.length-1]= r[r.length-2]
    setuserd()
    axios.post(`${tz}/client/deletedata`,{
      ids:r



    }).then(res=>{  
        console.log(res)
        setids('')
        axios.get(`${tz}/client/getall`).then(res2=>{
            console.log(res2)
            setuserd(res2.data.Client)
            setadduser('adduser2')
          })
    })
    
}
const [idb, setidb] = useState('')
function updateuser() {
    setactiontype('update')
    setadduser('adduser')
    var idx=ids.split('4sd')
    userd.forEach(val => {
        if(val._id===idx[0]){
           setusername(val.username)
           setaddress(val.address)
           setphone(val.number)
           setterms(val.terms)
           setmarkup(val.markup)
           setidb(val._id)
           
        }
        
    });

    
}
const [cty, setcty] = useState('')
const [zip, setzip] = useState('')
const [state, setstate] = useState('')
const [notibox, setnotibox] = useState('notibox2')
const [notibox2, setnotibox2] = useState('notibox2 notibox3')
const [aduserl, setaduserl] = useState('adduser2')
const [indate, setindate] = useState('')
const [inno, setinno] = useState('')
const [indue, setindue] = useState('')
const [inname, setinname] = useState('')
const [innum, setinnum] = useState('')
const [currname, setcurrname] = useState('')
const [inadd, setinadd] = useState('')
function down(val) {
    setindate(val.date)
    setindue(val.due)
    setinno(val.no)
    setinname(currname.username)
    setinadd(currname.address)
    setinnum(currname.number)

}

const [compnay, setcompnay] = useState('City Force LLC')
const [add, setadd] = useState('1106 W CORNWALLIS RD, STE 105')
const [zpi, setzpi] = useState('Durham NC 27705')
const [mail, setmail] = useState('admin@cfl-solution.com')
const [u, setu] = useState(0)
const [k, setk] = useState(0)
const [clkin, setclkin] = useState()
const [chkou, setchkou] = useState(0)
const [pending2, setpending2] = useState([])
const [openp, setopenp] = useState(false)
const [prodata, setprodata] = useState()
function openprofile(val){

    axios.post(`${tz}/siteuser/find`,{
        Siteuserd_id:val.userid,
    }).then(res2 => {
        console.log(res2)
        setprodata(res2.data.Siteuserd[0])
        setopenp(true)
       
    })
}
const [activesite, setactivesite] = useState()
function opentodaystats(val){
    setactivesite(val)
    setk(1)
    axios.get(`${tz}/att/time`).then(res => {

        var dateput = res.data.Date.split(', ')
        axios.post(`${tz}/siteatt/findbydateandproject`,{
            id:val._id,
            date:dateput[0]
        }).then(res2 => {
            console.log(res2)

            val.user.forEach(ele => {
                var y=0
                res2.data.Siteatt.forEach((ele2,index) => {
                    if(ele2.userid===ele.userid){
                        y=1}
                      
                            if(index===res2.data.Siteatt.length-1){
                                if(y===0){
        
                                    setpending2(pending2=>[...pending2,ele])
                                }
                            }
                     
                   
                });
            });

            setclkin(res2.data.Siteatt)
            res2.data.Siteatt.forEach(element => {
                if(element.chkouttime!=='-'){
                    setchkou(chkou=>chkou+1)

                }
            });
console.log(pending2)
        
    
           
        })

       
    })
}
const componentRef = useRef();
function openprojects(){
    setu(1)
}


const [sw, setsw] = useState({viewport: {
    width: "100vw",
    height: "100vh",
    latitude: 42.430472,
    longitude: -123.334102,
    zoom: 16
  },
 userLocation: {}})
useEffect(() => {
  
function setloc(){
    
    navigator.geolocation.getCurrentPosition(position => {
        let setUserLocation = {
            lat: position.coords.latitude,
            long: position.coords.longitude
         };
        let newViewport = {
           height: "100vh",
           width: "100vw",
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           zoom: 10
         };
         setsw({
           viewport: newViewport,
           userLocation: setUserLocation
        });
     });
}
setloc()

  return () => {
    
  }
}, [])
    return (
        <>
        {openp&&
        <div className="profio">
               <div className="profilepage">
                <RiCloseFill className='ioyt' onClick={e=>setopenp(false)} />
           <img src={prof} alt="" />
           <h1>Name:</h1>
           <h6>{prodata.name}</h6> 
            <h1>Skill:</h1>
           <h6>{prodata.skill}</h6>
           <h1>Address:</h1>
           <h6>{prodata.address}</h6>
           <h1>Phone :</h1>
           <h6>{prodata.phone}</h6>
           <h1>Status:</h1>
           <h6>{prodata.status}</h6>
   
           
       </div>
        </div>

        }
          <div className={aduserl}>
            <div className="mainpage1" >
            <ReactToPrint
            
        trigger={() => <button className='ss33'>Export To pdf!</button>}
        content={() => componentRef.current}
      />
      <button className='ss333' onClick={e=>setaduserl('adduser2')}>Cancel</button>
                <div className="mainpage" ref={componentRef}>

             
            
      <div className="mainpage" >
        
        <h1 className='invoiceh'>{compnay}<p className='invoicep' >Invoice</p></h1>
        <div className="spanl">
            <h3>
                Date: <p>{indate}</p>
            </h3>
            <h3>
                Invoice #: <p>{inno}</p>
            </h3>
            <h3>
                Consumer ID: <p>01238979</p>
            </h3>
            <h3>
                Due Date: <p>{indue}</p>
            </h3>
       
        </div>
        <div className="billto">
          <div className="bill1">
          <h3>
                Bill To:
            </h3>
            <h2>{inadd}</h2>
          
            <h2>Project # {innum}</h2>
<h2>
Project Name: {inname}
</h2>

          </div>
          <div className="bill1">
          <h3>
                Company:
            </h3>
<h2>{add}</h2>
<h2>{zpi}</h2>
<h2>919-381-0394</h2>
<h2>www.cfi-solutions.com</h2>


          </div>
        </div>
        <div className="tavle">
            <div className="tavhead">
                <h6 style={{width:'100px'}}>
                    WEEKEND
                </h6>
                <h6 style={{width:'100px'}}>
                    NAME
                </h6>
                <h6 style={{width:'100px'}}>
                    SKILL
                </h6>
                <h6>
                    REG HRS
                </h6>
                <h6>REG RTE</h6>
                <h6>
                    OT HRS
                </h6>
                <h6>OT RTE</h6>
                <h6>TOTAL</h6>




            </div>
         
            {txp&&txp.map((val,index)=>(
                <>
                 {index%2===0?
                   <div className="tavbody">
                   <h6 style={{width:'100px'}}>
                           {val["WEEKEND"]}
                       </h6>
                       <h6 style={{width:'100px'}}>
                       {val["NAME"]}
                       </h6>
                       <h6 style={{width:'100px'}}>
                       {val["SKILL"]}
                       </h6>
                       <h6>
                       {val["REG HRS"]}
                       </h6>
                       <h6> {val["REG RTE"]}</h6>
                       <h6>
                       {val["OT HRS"]}
                       </h6>
                       <h6> {val["OT RTE"]}</h6>
                       <h6> {val["TOTAL"]}</h6>
       
                   </div>:
                     <div className="tavbody tavbo">
                     <h6 style={{width:'100px'}}>
                             {val["WEEKEND"]}
                         </h6>
                         <h6 style={{width:'100px'}}>
                         {val["NAME"]}
                         </h6>
                         <h6 style={{width:'100px'}}>
                         {val["SKILL"]}
                         </h6>
                         <h6>
                         {val["REG HRS"]}
                         </h6>
                         <h6> {val["REG RTE"]}</h6>
                         <h6>
                         {val["OT HRS"]}
                         </h6>
                         <h6> {val["OT RTE"]}</h6>
                         <h6> {val["TOTAL"]}</h6>
         
                     </div>

                 }
                </>
            ))

            }

            <div className="tavbody tavbodyx">
            <h6 style={{width:'100px'}}>
               
                </h6>
                <h6 style={{width:'100px'}}>
                 
                </h6>
                <h6 style={{width:'100px'}}>
              
                </h6>
                <h6>
           
                </h6>
                <h6></h6>
                <h6>
                   
                </h6>
                <h6>Total</h6>
                <h6>{totalall} $</h6>

            </div>
                
            <div className="special">
                <h1>Special Notes & Instruction</h1>
                
            </div>
         

<h1 className='h1h'>
Thanks for your business. Its a pleasure to work with you on your project.
</h1>
        </div>






</div>

                </div>
                



            </div>
        </div>
<div className="clientb">
<div className="clienthead">
            <h6>City Force Solutions</h6>

            <div className="companymenu">

<div className={notibox}>
    <GrFormClose className='grno' onClick={e=>setnotibox('notibox2')} />
   {Notifications&&Notifications.map(val=>(
    <div className="notcard">
        <h3> <div className="notcircle">
            {val.message.charAt(0)}
            </div><p> {val.message} </p> </h3>
        <h6>{val.time}</h6>
    </div>
   ))

   }
</div>

<div className={notibox2}>
    <GrFormClose className='grno' onClick={e=>setnotibox2('notibox2 notibox3')} />
  
  <h2>{sites&&sites[0].clientname}</h2>
  <button  onClick={e=>logout()}  className='logouty'>Logout</button>
</div>

                <FaRegBell onClick={e=>setnotibox('notibox')} className='menuit'  />

                <div className="profilebtn menuit" onClick={e=>setnotibox2('notibox3 notibox')} >
                    E
                    <div className="profiledot">

                    </div>

                </div>
            </div>
        </div>
   

        
        {u===0&&
        <>
        
        <div className="clientpro clientproh">
            <h1>Wages</h1>
            <div className="projectscard">
                <div className="balance">  <div className="mhg mhg3">
                        
                        <RiMoneyDollarCircleFill className='mhgf mhgf3' />
                        </div>
                    <div className="detbalance">
                        <h1>Total Amount</h1>
                        <h3>{totalx} $</h3>
                    </div>
                </div>
                <div className="balance">
                    <div className="mhg">
                        
                    <BsCreditCard2FrontFill className='mhgf' />
                    </div>
                                        <div className="detbalance">
                        <h1>Pending Wages</h1>
                        <h3>{balance} $</h3>
                    </div>
                </div>
                <div className="balance">  <div className="mhg mhg2">
                        
                        <IoMdCheckmarkCircleOutline className='mhgf mhgf2' />
                        </div>
                    <div className="detbalance">
                        <h1>Paid Amount </h1>
                        <h3>{paid} $</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="clientpro">
            <h1>Projects</h1>
            <div className="projectscard">
                <div className="procard">
                    <h1>Active Projects</h1>
                    <h2>{sites&&sites.length}  <button onClick={e=>openprojects()} className='procd'>View Analytics</button> </h2>
                    <div className="circlelast"></div>
                    
                    <div className="circlelast2"></div>

                </div>
                <div className="procard procard1">
                  <h1>  Completed Projects</h1>
                  <h2>0 {/*<button className='procd procd2'>View Analytics</button>*/} </h2>
                  <div className="circlelast"></div>
                    <div className="circlelast2"></div>
                </div>
                <div className="procard procard2">
<h1>Total Projects</h1>
<h2>{sites&&sites.length} {/*<button className='procd procd3'>View Analytics</button> */}</h2>
                    <div className="circlelast"></div>
                    <div className="circlelast2"></div>
</div>
            </div>
        </div>
       
        <div className="clientpro">
            <h1>Invoices</h1>
            <>
         {i === 0 &&
                <>
                    <div className='adduser'>
                      
                       
                            <div className="subadduser subadduser2">

                                <>
                                    <div className="inputname">
                                        <h1>Recieved Amount</h1>
                                        <input onChange={e => setamount(e.target.value)} type="number" />

                                    </div>
                                  
                                    <div className="inputname">
                                        <h1>Status</h1>
                                        <select value={status} className='select2' onChange={e=>setstatus(e.target.value)} name="cars" id="cars">
                       
                       <option value="pending">Pending</option>
                       <option value="cleared">Cleared</option>
                   </select>
                                    </div>
                                  <div className="inputname"></div>
                                    
                                    <button onClick={e => postrecieved()} className='btn1'>Recieved</button>
                                    <button onClick={e => seti(1)} className='btn2'>Cancel</button>
                                    <div className="inputname"></div>
                                </>




                            </div>

                        

                    </div>
                </>

            }
        <div className={adduser}>
            <div className="subadduser">
              {c===0&&
              <>
                <div className="inputname">
                    <h1>Company name</h1>
                    <input onChange={e=>setusername(e.target.value)} type="text" value={username} />

                </div>
                
                <div className="inputname">
                    <h1>Id no.</h1>
                    <input type="text"  />

                </div>
                <div className="inputname">
                    <h1>Address</h1>
                    <input onChange={e=>setaddress(e.target.value)}  type="text" value={address} />

                </div>
                
                <div className="inputname">
                    <h1>City</h1>
                    <input onChange={e=>setcty(e.target.value)}  type="text" value={cty} />

                </div>
                
                <div className="inputname">
                    <h1>State</h1>
                    <input onChange={e=>setstate(e.target.value)}  type="text" value={state} />

                </div>
                
                <div className="inputname">
                    <h1>Zip Code</h1>
                    <input onChange={e=>setzip(e.target.value)}  type="text" value={zip} />

                </div>
                <div className="inputname">
                    <h1>Phone:</h1>
                    <input onChange={e=>setphone(e.target.value)}  type="text" value={phone} />

                </div>
                <div className="inputname">
                    <h1>Markup (%):</h1>
                    <input onChange={e=>setmarkup(e.target.value)}  type="number" value={markup} />

                </div>
                
                <div className="inputname">
                    <h1>Terms</h1>
                    <select className='select2' onChange={e=>setterms(e.target.value)} value={terms} name="cars" id="cars">
                       
                        <option value="Net 10">Net 10</option>
                        <option value="Net 15">Net 15</option>
                        <option value="Net 30">Net 30</option>
                    </select>
                </div>
                <button onClick={e=>submit()} className='btn1'>Submit</button>
                <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>

              </>

              }


            </div>

        </div>
        <div className="usersdata">

       
{invoice===1&&

<>
<div className="analyticsin">
    <div className="ancard">
   <div className="mhg mhgy">
         <TbFileInvoice  className='mhgf mhgf2y'/>
   </div>
        <div className="detan">
            <h1>Pending Invoices</h1>
            <h2>{pending}</h2>
        </div>
    </div>
        <div className="ancard ancard2">
   <div className="mhg mhgy2">
         <TbFileInvoice  className='mhgf mhgf2y2'/>
   </div>
        <div className="detan">
            <h1>Cleared Invoices</h1>
            <h2>{cleared}</h2>
        </div>
    </div>
    <div className="ancard ancard3">
   <div className="mhg mhgy3">
         <TbFileInvoice  className='mhgf mhgf2y3'/>
   </div>
        <div className="detan">
            <h1>Total </h1>
            <h2>{totalx} $</h2>
        </div>
    </div>
    <div className="ancard ancard4">
   <div className="mhg mhgy4">
         <TbFileInvoice  className='mhgf mhgf2y4'/>
   </div>
        <div className="detan">
            <h1>Paid Amount</h1>
            <h2>{paid} $</h2>
        </div>
    </div>
    <div className="ancard ancard5">
   <div className="mhg mhgy5">
         <TbFileInvoice  className='mhgf mhgf2y5'/>
   </div>
        <div className="detan">
            <h1>Wages</h1>
            <h2>{balance} $</h2>
        </div>
    </div>
    
</div>

<div className="tablerow">
<div className="subtable">
<div className="headertable clop cloo">
      <h1 style={{width:"100px"}}>Date</h1>
      <h2 style={{width:"100px"}}>Type</h2>
      <h3 style={{width:"100px"}}>No.</h3>
      <h4 style={{width:"100px"}}>Due Date</h4>
      <h5 style={{width:"100px"}}>Total Due</h5>
      <h6 style={{width:"100px"}}>Paid</h6>
      <h6 style={{width:"100px"}}>Balance</h6>
      <h6 style={{width:"100px"}}>Status</h6>


  </div>
  {invoicemenu&&invoicemenu.map(val=>(
      <>
       <div className="headertable" >
      <h1 style={{width:"100px"}}>{val.date}</h1>
      <h2 style={{width:"100px"}}> <div className="tinvoice">
        Invoice</div> </h2>
      <h3 style={{width:"100px"}} >{val.no}</h3>
      <h4 style={{width:"100px"}} >{val.due}</h4>
      <h5 style={{width:"100px"}} >{val.total}$</h5>
      <h6 style={{width:"100px"}} >{val.paid}$</h6>
      <h6 style={{width:"100px"}} >{val.balance}$</h6>
      {val.status==='pending'?
      <div  style={{width:"100px"}} className="yellowlabel">
        
      <h6 >{val.status}</h6>
      </div>:
      <div  style={{width:"100px"}} className="greenlabel">
        
      <h6 >{val.status}</h6>
      </div>
        
      }
      <h5 className='h5'><button onClick={e=>exports2(val)}className='manx man'>Download</button></h5>
      <h5 style={{width:"50px"}}></h5>


  </div>
      </>
  ))

  }
</div>
</div>
</>
}

{invoice===2&&

<div className="tablerow">
<div className="subtable">
<div className="headertable clop">
      <h1 style={{width:"100px"}}>Employee</h1>
      <h2 style={{width:"100px"}}>Skill</h2>
      <h3 style={{width:"100px"}}>Hrs</h3>
      <h4 style={{width:"100px"}}>Payrate</h4>
      <h5 style={{width:"100px"}}>OT Hrs</h5>
      <h6 style={{width:"100px"}}>OTPayrate</h6>
      <h6 style={{width:"100px"}}>Total</h6>


  </div>
  {invoicedata&&invoicedata.map(val=>(
      <>
       <div className="headertable" onClick={e=>openinvoice(val.invoicedetails)}>
      <h1 style={{width:"100px"}}>{val.empname}</h1>
      <h2 style={{width:"100px"}}>{val.skill}</h2>
      <h3 style={{width:"100px"}} >{val.hrs}</h3>
      <h4 style={{width:"100px"}} >{val.payrate}$</h4>
      <h5 style={{width:"100px"}} >{val.othrs}</h5>
      <h6 style={{width:"100px"}} >{val.otpayrate}$</h6>
      <h6 style={{width:"100px"}} >{val.total}$</h6>


  </div>
      </>
  ))

  }
</div>
</div>
}
        </div></>
        </div>
        </>

        }
       {u===1&&
      <>
        <div className="cdf">
            
        <button className='iut' onClick={e=>setu(0)}>Dashboard</button>
        </div>
     
     
      {k===0?
      <div className="clientpro">
      <h1>Projects</h1>
      <>
   
 
  <div className="usersdata">

 
{invoice===1&&

<>

<div className="tablerow">
<div className="subtable">
<div className="headertable clop cloo">
<h1 style={{width:"100px"}}>Site Title</h1>
<h2 style={{width:"100px"}}>No</h2>
<h3 style={{width:"100px"}}>Address.</h3>
<h4 style={{width:"100px"}}>Status</h4>
<h5 style={{width:"100px"}}>Total Users</h5>


</div>
{sites&&sites.map(val=>(
<>
 <div className="headertable" >
<h1 style={{width:"100px"}}>{val.sitename}</h1>
<h2 style={{width:"100px"}}> <div className="tinvoice">
  {val.no}</div> </h2>
<h3 style={{width:"100px"}} >{val.address.substring(0,50)}</h3>
{val.status==='pending'?
<div  style={{width:"100px"}} className="yellowlabel">
  
<h6 >{val.status}</h6>
</div>:
<div  style={{width:"100px"}} className="greenlabel">
  
<h6 >{val.status}</h6>
</div>
  
}
<h5 style={{width:"100px"}} >{val.user.length}</h5>

<h5 className='h5'><button onClick={e=>opentodaystats(val)}className='manx man'>View Stats</button></h5>



</div>
</>
))

}
</div>
</div>
</>
}

  </div></>
  </div>:
  <>
   <div className="clientpro clientproh">
          <h1>User Stats</h1>
          <div className="projectscard">
              <div className="balance balancec">  <div className="mhg mhg3">
                      
                      <FaUserCheck className='mhgf mhgf3' />
                      </div>
                  <div className="detbalance">
                      <h1>Clocked in</h1>
                      <h3>{clkin&&clkin.length-chkou}</h3>
                  </div>
              </div>
              <div className="balance balancec">
                  <div className="mhg">
                      
                  <FaUserTimes className='mhgf' />
                  </div>
                                      <div className="detbalance">
                      <h1>Pending</h1>
                      <h3>{sites&&clkin&&sites[0].user.length-clkin.length} </h3>
                  </div>
              </div>
              <div className="balance balancec">  <div className="mhg mhg2">
                      
                      <FiLogOut className='mhgf mhgf2' />
                      </div>
                  <div className="detbalance">
                      <h1>Clocked Out </h1>
                      <h3>{chkou}</h3>
                  </div>
              </div>
               <div className="balance balancec">  <div className="mhg mhg2x">
                      
                      <FaUserEdit className='mhgf mhgf2x' />
                      </div>
                  <div className="detbalance">
                      <h1>On Leave </h1>
                      <h3>{0} </h3>
                  </div>
              </div>
          </div>
      </div>
    <div className="clientpro">
  <h1>Clockedin Users</h1>
  <>


<div className="usersdata">


{invoice===1&&

<>

<div className="tablerow">
<div className="subtable">
<div className="headertable clop cloo">
<h1 style={{width:"200px"}}>User</h1>
<h2 style={{width:"100px"}}>Date</h2>
<h3 style={{width:"100px"}}>Clockin Time</h3>

<h3 style={{width:"100px"}}>Clockout Time</h3>
<h3 style={{width:"100px"}}>Working Time</h3>
<h4 style={{width:"100px"}}>Status</h4>
<h5 style={{width:"100px"}}>Late</h5>


</div>
{clkin&&clkin.map(val=>(
<>
<div className="headertable" >
<h1 style={{width:"200px"}}>{val.username.substring(0,50)}</h1>
<h2 style={{width:"100px"}}> <div className="tinvoice">
{val.date}</div> </h2>
<h3 style={{width:"100px"}} >{val.time}</h3>
<h3 style={{width:"100px"}} >{val.chkouttime}</h3>
<h3 style={{width:"100px"}} >{val.workinghours}</h3>
{val.status==='Absent'?
<div  style={{width:"100px"}} className="yellowlabel">

<h6 >{val.status}</h6>
</div>:
<div  style={{width:"100px"}} className="greenlabel">

<h6 >{val.status}</h6>
</div>

}
<h5 style={{width:"100px"}} >{val.late}</h5>



</div>
</>
))

}
</div>
</div>
</>
}

</div></>
</div>
<div className="clientpro">
  <h1>Pending Users</h1>
  <>


<div className="usersdata">


{invoice===1&&

<>

<div className="tablerow">
<div className="subtable">
<div className="headertable clop cloo">
<h1 style={{width:"200px"}}>User</h1>
<h2 style={{width:"200px"}}>Skill</h2>


</div>
{clkin&&clkin.length>0?pending2&&pending2.map(val=>(
<>
<div className="headertable" >
<h1 style={{width:"200px"}}>{val.name.substring(0,50)}</h1>
<h2 style={{width:"200px"}}> <div className="tinvoice">
{val.skill}</div> </h2>

<h5 className='h5'><button onClick={e=>openprofile(val)}className='manx man'>View Profile</button></h5>



</div>
</>
))
:
activesite&&activesite.user.map(val=>(
    <>
<div className="headertable" >
<h1 style={{width:"200px"}}>{val.name.substring(0,50)}</h1>
<h2 style={{width:"200px"}}> <div className="tinvoice">
{val.skill}</div> </h2>

<h5 className='h5'><button onClick={e=>openprofile(val)}className='manx man'>View Profile</button></h5>



</div>
</>
))

}
</div>
</div>
</>
}

</div></>
</div>
</>

      }
      </>

       }
</div>
</>
    )
}

export default Client