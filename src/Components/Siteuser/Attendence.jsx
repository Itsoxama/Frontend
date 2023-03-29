import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'

import {RiPagesLine} from 'react-icons/ri'
import { AiOutlineReload } from 'react-icons/ai'
import { AiOutlineDashboard } from 'react-icons/ai'
import ReactToPrint from 'react-to-print';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaRegBuilding } from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';
import { TbBuildingFactory2 } from 'react-icons/tb'
import * as file from 'file-saver'
import axios from 'axios'
import { useEffect } from 'react';
import { tz } from '../apis';
import { TbFileInvoice } from 'react-icons/tb'



import { useRef } from 'react'
import { IoAnalytics } from 'react-icons/io5'
import { AiOutlineProfile, AiOutlineMessage } from 'react-icons/ai'
import date from 'date-and-time';

const Attendence = ({props}) => {



    const [notibox, setnotibox] = useState('notibox2')
    const componentRef = useRef();
    const [att, setatt] = useState()
    const [grey, setgrey] = useState(false)
    useEffect(() => {
console.log(props)
setauser(props.user)
        axios.post(`${tz}/siteatt/findbyname`, {
         id:props.user._id
        }).then(resq => {
            console.log(resq)
            setatt(resq.data.Siteatt)
         
            


        })

        return () => {

        }
    }, [])

    const [user, setuser] = useState()
    const [project, setproject] = useState()

   
    var styl1p=
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
            color:{rgb:'FFFFFF'}
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },							// set the style for target cell
        fill: {
            fgColor: {
                
                theme: 8,
                tint: 0.3999755851924192,
                rgb: '4480b8'
            }
        },
    };

    var cstyl2x=
    {		border: {
        right: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        left: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        bottom: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        top: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
    },
        font: {
            name: "arial",
            bold: false,
            sz:10,
            color:'000000'
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },	
        numFmt: "$#,###.00"
    };
        var styl2xp=
    {		border: {
        right: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        left: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        bottom: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        top: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
    },
    fill: {
        fgColor: {
            
            theme: 8,
            tint: 0.3999755851924192,
            rgb: 'C2D6E8'
        }
    },
        font: {
            name: "arial",
            bold: false,
            sz:10,
            color:'000000'
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },	
    };
    var cstyl2xp=
    {		border: {
        right: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        left: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        bottom: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        top: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
    },
    fill: {
        fgColor: {
            
            theme: 8,
            tint: 0.3999755851924192,
            rgb: 'C2D6E8'
        }
    },
        font: {
            name: "arial",
            bold: false,
            sz:10,
            color:'000000'
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },	
        numFmt: "$#,###.00"
    };
        var styl2x=
    {		border: {
        right: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        left: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        bottom: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
        top: {
            style: "thin",
            color: {rgb:"8DB2D5"}
        },
    },
        font: {
            name: "arial",
            bold: false,
            sz:10,
            color:'000000'
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },	
    };
function reportsa(){
}
const [Daily, setDaily] = useState('reportcard')
const [weekly, setweekly] = useState('reportcard2')
const [yearly, setyearly] = useState('reportcard2')
function Dailys(val){
    if(val==='daily'){
        setDaily('reportcard')
        setweekly('reportcard2')
        setyearly('reportcard2')
        setrtype('daily')
    }
    else if(val==='weekly'){
        setDaily('reportcard2')
        setweekly('reportcard')
        setyearly('reportcard2')
        setrtype('weekly')
    }   else{
        setDaily('reportcard2')
        setweekly('reportcard2')
        setyearly('reportcard')
        setrtype('yearly')
    }

}
const [adduser, setadduser] = useState('adduser2')
const [ptype, setptype] = useState('ap')
const [sites, setsites] = useState()
const [users, setusers] = useState()
const [auser, setauser] = useState()
const [aproject, setaproject] = useState()
useEffect(() => {
    axios.get(`${tz}/jobsite/getall`).then(res2 => {
        console.log(res2)
        setsites(res2.data.Jobsite)
      setaproject(res2.data.Jobsite[0])


    })

  return () => {
    
  }
}, [])



function setprojectx(val){
    sites&&sites.forEach(element => {
        if(element._id===val){
            setaproject(element)
        }
    });
}

const [c, setc] = useState(1)
const [dull, setdull] = useState(true)
const [rtype, setrtype] = useState('daily')
function exports() {
    const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    var ext = '.xlsx'
    
const myHeader = ["DATE","JOBSITE","NAME",'CLOCKIN TIME','CLOCKOUT TIME','WORKING HOURS','STATUS','LATE'];
    const ws = XLSX.utils.json_to_sheet(attreport,{header: myHeader})

    var wscols = [
        { wch: 10 },
        { wch: 15 },
        { wch: 20 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
        { wch: 8 },
        { wch: 10 },
        { wch: 7 },
        { wch: 8 },
        { wch: 12 },
    ];
    for(var k=0;k<attreport.length+1;k++ ){
        if(k===0){
            
    ws[`B${k+1}`].s = styl1p
    ws[`A${k+1}`].s= styl1p
    ws[`C${k+1}`].s= styl1p        
    ws[`D${k+1}`].s= styl1p
    ws[`E${k+1}`].s= styl1p
    ws[`F${k+1}`].s= styl1p
    ws[`G${k+1}`].s= styl1p
    ws[`H${k+1}`].s= styl1p
        }
        else{
            if(k%2===0){

                ws[`B${k+1}`].s = styl2x
                ws[`A${k+1}`].s= styl2x
                ws[`C${k+1}`].s= styl2x        
                ws[`D${k+1}`].s= styl2x
                ws[`E${k+1}`].s= styl2x
                ws[`F${k+1}`].s= cstyl2x
                ws[`G${k+1}`].s= styl2x
                ws[`H${k+1}`].s=  cstyl2x
            }else if(k%2!==0){
                
                ws[`B${k+1}`].s = styl2xp
                ws[`A${k+1}`].s= styl2xp
                ws[`C${k+1}`].s= styl2xp        
                ws[`D${k+1}`].s= styl2xp
                ws[`E${k+1}`].s= styl2xp
                ws[`F${k+1}`].s= cstyl2xp
                ws[`G${k+1}`].s= styl2xp
                ws[`H${k+1}`].s=  cstyl2xp
            }

        }
    }




    ws['!cols'] = wscols;
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
    const excelbuffer = XLSX.write(wb, { booktype: 'xlsx', type: 'array' })
    const dar = new Blob([excelbuffer], { type: filetype })
    file.saveAs(dar, 'asd.xlsx',)



    setdull(true)
}
function generatereport(){
    setattreport([])
    if(ptype==='ap'){
        axios.post(`${tz}/siteatt/findbyname`,{
            id:auser._id

        }).then(res2 => {
            console.log(res2)
          
            if(res2.data.Siteatt.length>0){
                setc(1)
                
          prepare(res2.data.Siteatt)
            }
            else{
                setc(0)
            }
    
        })
    }
    else{
        axios.post(`${tz}/siteatt/findbynameandproject`,{
            id:auser._id,
            pid:aproject._id

        }).then(res2 => {
            console.log(res2)
          if(res2.data.Siteatt.length>0){
            setc(1)
            
          prepare(res2.data.Siteatt)
        }
        else{
            setc(0)
        }
        })
    }
}
const [i, seti] = useState(0)
const [attreport, setattreport] = useState([])
function prepare(arrayx){
    setattreport([])
    console.log(arrayx)
    arrayx.forEach(val => {
        

if(rtype==='daily'){

        
    let date_1 = new Date(val.date);
    let date_2 = new Date();
    let difference = date_1.getTime() - date_2.getTime();
    console.log(difference);
    let TotalDays = Math.ceil(-1*difference / (1000 * 3600 * 24));
    console.log(TotalDays);
        if(TotalDays===0||TotalDays===1){
            
        setattreport(pr => [...pr, {


            ["DATE"]:val.date,
            ["JOBSITE"]:val.projectname,
            ["NAME"]:val.username,
            ["CLOCKIN TIME"]:val.time,
            ["CLOCKOUT TIME"]:val.chkouttime,
            ["WORKING HOURS"]:val.workinghours,
            ["STATUS"]:val.status,
            ["LATE"]:val.late,


        }])
        }
}
else if(rtype==='weekly'){
    
    let date_1 = new Date(val.date);
    let date_2 = new Date();
    let difference = date_1.getTime() - date_2.getTime();
    console.log(difference);
    let TotalDays = Math.ceil(-1*difference / (1000 * 3600 * 24));
    console.log(TotalDays);
    if(TotalDays<=7){
            
        setattreport(pr => [...pr, {


            ["DATE"]:val.date,
            ["JOBSITE"]:val.projectname,
            ["NAME"]:val.username,
            ["CLOCKIN TIME"]:val.time,
            ["CLOCKOUT TIME"]:val.chkouttime,
            ["WORKING HOURS"]:val.workinghours,
            ["STATUS"]:val.status,
            ["LATE"]:val.late,


        }])
        }
}
else{
    
    let date_1 = new Date(val.date);
    let date_2 = new Date();
    let difference = date_1.getTime() - date_2.getTime();
    console.log(difference);
    let TotalDays = Math.ceil(-1*difference / (1000 * 3600 * 24));
    console.log(TotalDays);
    if(TotalDays<=366){
            
        setattreport(pr => [...pr, {


            ["DATE"]:val.date,
            ["JOBSITE"]:val.projectname,
            ["NAME"]:val.username,
            ["CLOCKIN TIME"]:val.time,
            ["CLOCKOUT TIME"]:val.chkouttime,
            ["WORKING HOURS"]:val.workinghours,
            ["STATUS"]:val.status,
            ["LATE"]:val.late,


        }])
        }
}
setdull(false)

    });

}
    return (
     
        <div className="attside">
          <div className="clienthead clockhead2">
                    <h6>Attendence History</h6>
<div className="sd2"></div>

                </div>

                <>       
            <div className={adduser}>
            <div className="subadduser">
         {c===1?
         
         <>
              
       
         <div className="inputname inputname2">
             <h1>Project</h1>
             <div className="rdio">
                 <input onClick={e=>setptype('ap')} type="radio" checked={ptype==='ap'} />
                 <h3  onClick={e=>setptype('ap')} >All Projects</h3>
                 
                 <input  onClick={e=>setptype('cp')}  type="radio"  checked={ptype==='cp'}/>
                 <h3  onClick={e=>setptype('cp')} >Custom Project</h3>
             </div>
             </div>
{ptype==='cp'&&
<div className="inputname inui">
<h1>Choose Jobsite</h1>
<select name="cars" id="cars" onChange={e=>setprojectx(e.target.value)} >
{sites&&sites.map(val=>(

<option value={val._id}>{val.sitename}</option>
))

}

</select>
</div>

}

{ptype!=='cp'&&
<div className="inputname inui">

</div>

}

      
         {dull?
         <>
         
         <button style={{marginLeft:'20px'}} className='btn1 btn3x'  >Export</button>
         
         <button className='btn1' onClick={e=>generatereport()} >Generate</button>
         </>:
   <>      
         <button style={{marginLeft:'20px'}} className='btn1' onClick={e=>exports()} >Export</button>
         
         <button className='btn1 btn3x'  >Generate</button>
</>
         }


         <button onClick={e=>setadduser('adduser2')}  className='btn2'>Cancel</button>
<div className="inputname"></div>
<div className="inputname inui" style={{height:'12px'}}></div>
       </>
       :
       <div className="inputname inui">
        <h1>No Data to Show</h1>
     <button className='ag' onClick={e=>setc(1)}>Search Again</button>
       </div>

         }

              


            </div>

        </div>
        
        <div className="prodiheadere">
             <div className={Daily} onClick={e=>Dailys('daily')}>
                <RiPagesLine className='sio' />
             <div className="subreportcard">
             <h1>Daily Report</h1>
                <p>Last day Report</p>
             </div>
             </div>
             <div className={weekly} onClick={e=>Dailys('weekly')}>
             <RiPagesLine className='sio' />
             <div className="subreportcard">
             <h1>Weekly Report</h1>
                <p>Last day Report</p>
             </div>
             </div>
                 <div className={yearly} onClick={e=>Dailys('yearly')}>
             <RiPagesLine className='sio' />
             <div className="subreportcard">
             <h1>Yearly Report</h1>
                <p>Last Year Report</p>
             </div>
             </div>


            </div>
         <div className="prodi ghbtn">
       
         
<button onClick={e=>setadduser('adduser')}>Generate</button>



        </div>
        </>
<div className="tablerow">
<div className="subtable">
<div className="headertable clop cloo">
      <h1 style={{width:"100px"}}>Date</h1>
      <h2 style={{width:"200px"}}>Project</h2>
      <h3 style={{width:"100px"}}>Clockin Time.</h3>
      <h4 style={{width:"100px"}}>Clockout Time</h4>
      <h4 style={{width:"100px"}}>Total Hours</h4>
      {/*<h5 style={{width:"100px"}}>Status</h5>*/}
      {/*<h6 style={{width:"100px"}}>Late</h6>*/}


  </div>
  {att&&att.map(val=>(
      <>
       <div className="headertable" >
      <h1 style={{width:"100px"}}>{val.date}</h1>
      <h2 style={{width:"200px"}}> <div className="tinvoice">
        {val.projectname}</div> </h2>
      <h3 style={{width:"100px"}} >{val.time}</h3>
      <h4 style={{width:"100px"}} >{val.chkouttime}</h4>
      <h4 style={{width:"100px"}} >{val.workinghours}</h4>
        {/*  <h5 style={{width:"100px"}} >
  {val.status==='Present'?
    <div className="ktypre ktypre2">
        {val.status}
    </div>  :val.status==='Absent'?
      <div className="ktyabs ktypre2">
      {val.status}
  </div>  :  <div className="ktylev ktypre2">
        {val.status}
    </div>  
    }

      </h5>
*/}
     {/* <h6 style={{width:"100px"}} >{val.late}</h6>
      */}
 


  </div>
      </>
  ))

  }
</div>
</div>
        </div>
    )
}

export default Attendence