import React, { useEffect, useState } from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import {RiPagesLine} from 'react-icons/ri'
import { tz } from '../../apis'
import as from '../../../images/219983.png'
import axios from 'axios'

import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';

import * as file from 'file-saver'
const Reports = () => {


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
    axios.get(`${tz}/siteuser/getall`).then(res2 => {
        console.log(res2)
      
        setusers(res2.data.Siteuserd)

        setauser(res2.data.Siteuserd[0])

    })

  return () => {
    
  }
}, [])


function setuserx(val){
    users&&users.forEach(element => {
        if(element._id===val){
            setauser(element)
        }
    });

}


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
        <>       
            <div className={adduser}>
            <div className="subadduser">
         {c===1?
         
         <>
              
                
         <div className="inputname inui">
             <h1>Select User</h1>
             <select name="cars" id="cars"  onChange={e=>setuserx(e.target.value)} >
{users&&users.map(val=>(

<option value={val._id}>{val.name}</option>
))

}

</select>
         </div>
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
         <div className="prodi ghbtn">
            <div className="prodiheader">
                <h1>Attendance Report</h1>
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
         
<button onClick={e=>setadduser('adduser')}>Generate</button>



        </div>
        </>
    )
}

export default Reports