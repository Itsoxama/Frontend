import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { AiOutlineReload } from 'react-icons/ai'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';
import * as file from 'file-saver'
import axios from 'axios'
import { useEffect } from 'react';
import { tz } from '../../apis';
const Client = () => {
    
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

useEffect(() => {
    axios.get(`${tz}/client/getall`).then(res=>{
        console.log(res)
        setuserd(res.data.Client)
    })

  return () => {
    
  }
}, [])



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

function exports2(preparedata) {
    var tx=[]
    var alltotal=0
    preparedata.invoicedetails.forEach((val,index) => {
        alltotal=alltotal+parseFloat(val.total)
        tx.push({
            empname:val.empname,
            hrs:val.hrs,
            date:preparedata.date,
           payrate:val.payrate,
            othrs:val.othrs,
            otpayrate:val.otpayrate,
            total:val.total,
            skill:val.skill,



        })
        if(preparedata.invoicedetails.length-1===index){
           
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
        color:{rgb:'3E5B77'}
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
        color:{rgb:'3E5B77'}
    },
    alignment: {
        vertical: "center",
        horizontal: "center",
    },	
};
    var styl1x=
    {		border: {
        right: {
            style: "thin",
            color: {rgb:'6899c7'}
        },
        left: {
            style: "thin",
            color: {rgb:'6899c7'}
        },
        bottom: {
            style: "thin",
            color: {rgb:'6899c7'}
        },
        top: {
            style: "thin",
            color: {rgb:'6899c7'}
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
        },							// set the style for target cell
        fill: {
            fgColor: {
                
                theme: 8,
                tint: 0.3999755851924192,
            rgb:'FFFFFF'
            }
        },
    };
    const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    var ext = '.xlsx'
    
const myHeader = ["date","empname",'skill',"hrs",'payrate','othrs','otpayrate','total'];
var prd2=[
{

empname:"val.Employee",
hrs:"val.Hrs",
date:"val.Date",
payrate:"val.Payrate",
othrs:"val.Ot_Hrs",
otpayrate:"val.OT_Pay_rate",
total:"val.total",
skill:"val.skill",
},{

empname:"val.Employee",
hrs:"val.Hrs",
date:"val.Date",
payrate:"val.Payrate",
othrs:"val.Ot_Hrs",
otpayrate:"val.OT_Pay_rate",
total:"val.total",
skill:"val.skill",
},{

empname:"val.Employee",
hrs:"val.Hrs",
date:"val.Date",
payrate:"val.Payrate",
othrs:"val.Ot_Hrs",
otpayrate:"val.OT_Pay_rate",
total:"val.total",
skill:"val.skill",
},{

empname:"val.Employee",
hrs:"val.Hrs",
date:"val.Date",
payrate:"val.Payrate",
othrs:"val.Ot_Hrs",
otpayrate:"val.OT_Pay_rate",
total:"val.total",
skill:"val.skill",
},

]
console.log(preparedata.invoicedetails)
    const ws = XLSX.utils.json_to_sheet(prd2,{header: myHeader})

    
    var wscols = [
        
        { wch: 8 },
        { wch: 13 },
        { wch: 15 },
        { wch: 6 },
        { wch: 6 },
        { wch: 7 },
        { wch: 8 },
        { wch: 10 },
        { wch: 7 },
        { wch: 8 },
        { wch: 12 },
    ];
   


    var wscolsd = [
        { hpx: 20 },
        
        { hpx: 20 },
        
        { hpx: 20 },
        
        { hpx: 20 },
        
        { hpx: 20 },
        
        { hpx: 40 },
    ]
    
ws['!rows']=wscolsd

    ws['!cols'] = wscols;

    var ws3= XLSX.utils.sheet_add_json(ws, 
        tx
        , {
            
    header: myHeader,
    skipHeader:false,
            origin: 'A7'});
   var wsx= XLSX.utils.sheet_add_aoa(ws3, [
        ["CITY FORCE LLC", '', '', '', '', '', '',''],
        
        [`Date: ${preparedata.date}`, '', '', '', '', '', '',''],
        
        [`Invoice # ${preparedata.no}`, '', '', '', '', '', '1106 W CornWallis Road suite 105',''],
        
        [`Project Number `, '', '', '',  '','', '',''],
        
        [`Project Name: `, '', '', '', '', '', 'Durham N.C 27705',''],
        [`Address:`, '', '', '', '', '', 'www.cfi-solutions.com',''],
        
      ], {
        
header: ["note"],
skipHeader:true,
        origin: 'A1'});
        
   var ws2= XLSX.utils.sheet_add_aoa(wsx, [
    
    [ '', '',,'',,'','Total' ,alltotal],
    [ '', '', "Thanks for your business"],
  ], {
    
header: ["note"],
skipHeader:true,
    origin: -1});
        var g=tx.length+7
        for(var k=0;k<g;k++ ){
            if(k===0||k===1||k==2||k===3||k==4||k===5){
                
                ws2[`B${k+1}`].s = styleforaddress
                ws2[`A${k+1}`].s= styleforaddress
                ws2[`C${k+1}`].s= styleforaddress        
                ws2[`D${k+1}`].s= styleforaddress
                ws2[`E${k+1}`].s= styleforaddress
                ws2[`F${k+1}`].s= styleforaddress
                ws2[`G${k+1}`].s= styleforaddress
                ws2[`H${k+1}`].s= styleforaddress
            }
            else if(k===6){
                
                ws2[`B${k+1}`].s = styl1x
                ws2[`A${k+1}`].s= styl1x
                ws2[`C${k+1}`].s= styl1x        
                ws2[`D${k+1}`].s= styl1x
                ws2[`E${k+1}`].s= styl1x
                ws2[`F${k+1}`].s= styl1x
                ws2[`G${k+1}`].s= styl1x
                ws2[`H${k+1}`].s= styl1x
                    }
            else{
                
        ws2[`B${k+1}`].s = styl2x
        ws2[`A${k+1}`].s= styl2x
        ws2[`C${k+1}`].s= styl2x        
        ws2[`D${k+1}`].s= styl2x
        ws2[`E${k+1}`].s= styl2x
        ws2[`F${k+1}`].s= cstyl2x
        ws2[`G${k+1}`].s= styl2x
        ws2[`H${k+1}`].s= styl2x

            }
        }
        
        ws2[`C${tx.length+9}`].s= styleforaddress
        ws2[`G${tx.length+8}`].s= styleforaddress2
        ws2[`H${tx.length+8}`].s= styleforaddress2
        const merge = [
            { s: { r: 0, c: 0 }, e: { r: 0, c: 3 }  },
            { s: { r: 1, c: 0 }, e: { r: 1, c: 3 }  },
            { s: { r: 2, c: 0 }, e: { r: 2, c: 3 }  },
            { s: { r: 3, c: 0 }, e: { r: 3, c: 3 }  },
            { s: { r: 4, c: 0 }, e: { r: 4, c: 3 }  },
            { s: { r: 5, c: 0 }, e: { r: 5, c: 3 }  },
            
            { s: { r: 1, c: 6 }, e: { r: 1, c: 7 }  },
            { s: { r: 0, c: 6 }, e: { r: 0, c: 7 }  },
            { s: { r: 2, c: 6 }, e: { r: 2, c: 7 }  },
            { s: { r: 3, c: 6 }, e: { r: 3, c: 7 }  },
            { s: { r: 4, c: 6 }, e: { r: 4, c: 7 }  },
            { s: { r: 5, c: 6 }, e: { r: 5, c: 7 }  },


          ];
          ws2["!merges"] = merge;
    const wb = { Sheets: { 'data': ws2 }, SheetNames: ['data'] }
    const excelbuffer = XLSX.write(wb, { booktype: 'xlsx', type: 'array' })
    const dar = new Blob([excelbuffer], { type: filetype })
    file.saveAs(dar, 'asd.xlsx',)


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

    return (
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

            <div className="topusersdata">
                <BiUserCircle className='usio' />
                <h1>Company</h1>
             
                <button onClick={e=>setadduser('adduser')}>Add Company</button>
                <div className="endbuttons" >
    {ids&&ids.split('4sd').length<=2&&
    
<button className='addemp  addemp2' onClick={e=>updateuser()} >Update</button>

    }

<button className='addemp addemp3' onClick={e=>deleteuser()} >Delete</button>
</div>{/*
                <div className="spo">
                    <FiDownload className='fid' />
                </div>
                <div className="spo">
                    <AiOutlineReload className='fis' />
                </div>

*/}

            </div>
{invoice===0&&

<div className="tablerow">
<div className="subtable">
<div className="headertable clop">
<span className='sxx'>  </span>
        
      <h1>Company</h1>
      <h2 style={{width:'250px'}} >Address</h2>
      <h3>Phone</h3>
      <h4>Terms</h4>
      <h4>Markup (%)</h4>
      
      <h4>Invoices</h4>


  </div>
  {userd&&userd.map(val=>(
      <>
       <div className="headertable" >
       <span className='sxx'> <input type="checkbox"  checked={ids.search(val._id)>=0} onClick={e=>ids.search(val._id)>=0?setids(ids.replace(val._id+'4sd','')):setids(ids+val._id+'4sd')} /> </span>
                    
      <h1 onClick={e=>openhistory(val)}><img src='' alt="" className='valimg' /> {val.username}</h1>
      <h2 style={{width:'250px'}} >{val.address}</h2>
      <h3>{val.number}</h3>
      <h4>{val.terms}</h4>
      <h4>{val.markup}%</h4>
      
      <h4>{val.invoicedata.length}</h4>


  </div>
      </>
  ))

  }
</div>
</div>

}
{invoice===1&&

<>

<div className="projectview pv2">
        <h1>Pending Invoices: <p>{pending}</p></h1>
        <h1>Cleared Invoices: <p>{cleared}</p></h1>
        <h1>Wages: <p>{balance}</p></h1>
        
        <h1>Paid: <p>{paid}</p></h1>
        <h1>Total: <p>{totalx}</p></h1>

      
    
         </div>

<div className="tablerow">
<div className="subtable">
<div className="headertable clop">
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
      <h2 style={{width:"100px"}}>Invoice</h2>
      <h3 style={{width:"100px"}} >{val.no}</h3>
      <h4 style={{width:"100px"}} >{val.due}</h4>
      <h5 style={{width:"100px"}} >{val.total}$</h5>
      <h6 style={{width:"100px"}} >{val.paid}$</h6>
      <h6 style={{width:"100px"}} >{val.balance}$</h6>
      <h6 style={{width:"100px"}} >{val.status}</h6>
      <h5 className='h5'><button onClick={e=>openinvoice(val)}className='man'>View and Export</button></h5>
      <h5 style={{width:"50px"}}></h5>
      <h5 className='h5'><button onClick={e=>recieve(val)}className='man btnm2 '>Recieve</button></h5>


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
    )
}

export default Client