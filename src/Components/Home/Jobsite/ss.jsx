import React, { useState } from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import axios from 'axios'
import { useEffect } from 'react'
import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';
import * as file from 'file-saver'
import html2canvas from 'html2canvas'
const Jobsite = () => {
    var styl1=
    {		border: {
        right: {
            style: "thin",
            color: "000000"
        },
        left: {
            style: "thin",
            color: "000000"
        },
        bottom: {
            style: "thin",
            color: "000000"
        },
        top: {
            style: "thin",
            color: "000000"
        },
    },
        font: {
            name: "arial",
            bold: true,
            sz:10
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },							// set the style for target cell
        fill: {
            fgColor: {
                
                theme: 8,
                tint: 0.3999755851924192,
                rgb: '9CCEB8'
            }
        },
    };
    var styl2=
    {		border: {
        right: {
            style: "thin",
            color: "000000"
        },
        left: {
            style: "thin",
            color: "000000"
        },
        bottom: {
            style: "thin",
            color: "000000"
        },
        top: {
            style: "thin",
            color: "000000"
        },
    },
        font: {
            name: "arial",
            bold: true,
            sz:10
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },	
    };
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
    var cstyl2=
    {		border: {
        right: {
            style: "thin",
            color: "000000"
        },
        left: {
            style: "thin",
            color: "000000"
        },
        bottom: {
            style: "thin",
            color: "000000"
        },
        top: {
            style: "thin",
            color: "000000"
        },
    },
        font: {
            name: "arial",
            bold: true,
            sz:10
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },	
        numFmt: "$#,###.00"
    };
    function exportPdf() {

        html2canvas(document.getElementById("tablerow")).then(canvas => {
           document.body.appendChild(canvas);  // if you want see your screenshot in body.
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF();
           pdf.addImage(imgData, 'PNG', 0, 0);
           pdf.save("download.pdf"); 
       });
   
    }


    const [adduser, setadduser] = useState('adduser2')
    const [i, seti] = useState(0)
    const [taxes, settaxes] = useState('taxes')
    const [circle, setcircle] = useState('circle')
    const [is, setis] = useState(0)


    const [taxes2, settaxes2] = useState('taxes')
    const [circle2, setcircle2] = useState('circle')
    const [is2, setis2] = useState(0)
    const [data, setdata] = useState()
    const [sname, setsname] = useState('')
    const [userid, setuserid] = useState('')
    const [name, setname] = useState('')
    const [cname, setcname] = useState('')
    const [skill, setskill] = useState('')
    const [payrate, setpayrate] = useState('')
    const [otpayrate, setotpayrate] = useState('')
    const [data2, setdata2] = useState([])

    const [preparedata, setpreparedata] = useState([])

    function preparesheet(val) {
        setl(val)
        setpreparedata([])
        console.log(data)
        data.forEach((val,index) => {
         if(ind.search(' '+index.toString()+' ')>=0){
            val.user.length > 0 && val.user.forEach(element => {
                console.log(val)
                setpreparedata(pr => [...pr, {
                    Taxes: element.taxes,
                    Client: val.clientname,
                    Date: '1-1-2023',
                    Employee: element.name,
                    Hrs: 40,
                    Payrate: parseInt(element.payrate),
                    Ot_Hrs: 0,
                    OT_Pay_rate: parseInt(element.otpayrate),
                    nc_4: element.nc==='no'?'-':((parseInt(element.payrate)*40)+(0*parseInt(element.otpayrate)))*4/100,
                    total:(parseInt(element.payrate)*40)+(0*parseInt(element.otpayrate)),
                    deductions:0,
                    net:(parseInt(element.payrate)*40)+(0*parseInt(element.otpayrate))-0-(element.nc==='no'?0:((parseInt(element.payrate)*40)+(0*parseInt(element.otpayrate)))*4/100)




                }])

            });
         }

        });
setk(1)
        console.log(preparedata)
    }
    
    function preparesheetclient(val) {
        setl(val)
        setpreparedata([])
        console.log(data)
        data.forEach((val,index) => {
         if(ind.search(' '+index.toString()+' ')>=0){
            val.user.length > 0 && val.user.forEach(element => {
                console.log(val)
                setpreparedata(pr => [...pr, {
                    Taxes: element.taxes,
                    Client: val.clientname,
                    Date: '1-1-2023',
                    Employee: element.name,
                    Hrs: 40,
                    Payrate: parseInt(element.payrate),
                    Ot_Hrs: 0,
                    OT_Pay_rate: parseInt(element.otpayrate),
                    nc_4: element.nc==='no'?'-':((parseInt(element.payrate)*40)+(0*parseInt(element.otpayrate)))*4/100,
                    total:(parseInt(element.payrate)*40)+(0*parseInt(element.otpayrate)),
                    deductions:0,
                    net:(parseInt(element.payrate)*40)+(0*parseInt(element.otpayrate))-0-(element.nc==='no'?0:((parseInt(element.payrate)*40)+(0*parseInt(element.otpayrate)))*4/100)




                }])

            });
         }

        });
setk(1)
        console.log(preparedata)
    }
    function exports() {

        const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        var ext = '.xlsx'
        
const myHeader = ["Taxes","Client","Date",'Employee','Hrs','Payrate','Ot_Hrs','OT_Pay_rate','total','nc_4'];
        const ws = XLSX.utils.json_to_sheet(preparedata,{header: myHeader})

        var wscols = [
            { wch: 6 },
            { wch: 7 },
            { wch: 8 },
            { wch: 20 },
            { wch: 6 },
            { wch: 7 },
            { wch: 8 },
            { wch: 10 },
            { wch: 7 },
            { wch: 8 },
            { wch: 12 },
        ];
        for(var k=0;k<preparedata.length+1;k++ ){
            if(k===0){
                
        ws[`B${k+1}`].s = styl1
        ws[`A${k+1}`].s= styl1
        ws[`C${k+1}`].s= styl1        
        ws[`D${k+1}`].s= styl1
        ws[`E${k+1}`].s= styl1
        ws[`F${k+1}`].s= styl1
        ws[`G${k+1}`].s= styl1
        ws[`H${k+1}`].s= styl1
        ws[`I${k+1}`].s= styl1
        ws[`J${k+1}`].s= styl1
        ws[`K${k+1}`].s= styl1
        ws[`L${k+1}`].s= styl1
            }
            else{
                
        ws[`B${k+1}`].s = styl2
        ws[`A${k+1}`].s= styl2
        ws[`C${k+1}`].s= styl2        
        ws[`D${k+1}`].s= styl2
        ws[`E${k+1}`].s= styl2
        ws[`F${k+1}`].s= cstyl2
        ws[`G${k+1}`].s= styl2
        ws[`H${k+1}`].s=  cstyl2
        ws[`I${k+1}`].s= styl2
        ws[`J${k+1}`].s= styl2
        ws[`K${k+1}`].s= styl2
        ws[`L${k+1}`].s= styl2

            }
        }




        ws['!cols'] = wscols;
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelbuffer = XLSX.write(wb, { booktype: 'xlsx', type: 'array' })
        const dar = new Blob([excelbuffer], { type: filetype })
        file.saveAs(dar, 'asd.xlsx',)




    }
    function exports2() {
        
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
        
const myHeader = ["Taxes","Client","Date",'Employee','Hrs','Payrate','Ot_Hrs','OT_Pay_rate','total','nc_4'];
var prd2=[
   {
Client: "12",
Date:"1-1-2023",
Employee: "123",
Hrs:40,
OT_Pay_rate: 12,
Ot_Hrs: 0,
Payrate: 12,
Taxes: "yes",
deductions: 0,
nc_4: 19.2,
net: 460.8,
total: 480,},
{
    Client: "12",
    Date:"1-1-2023",
    Employee: "123",
    Hrs:40,
    OT_Pay_rate: 12,
    Ot_Hrs: 0,
    Payrate: 12,
    Taxes: "yes",
    deductions: 0,
    nc_4: 19.2,
    net: 460.8,
    total: 480,},
    {
        Client: "12",
        Date:"1-1-2023",
        Employee: "123",
        Hrs:40,
        OT_Pay_rate: 12,
        Ot_Hrs: 0,
        Payrate: 12,
        Taxes: "yes",
        deductions: 0,
        nc_4: 19.2,
        net: 460.8,
        total: 480,},
        {
    Client: "12",
    Date:"1-1-2023",
    Employee: "123",
    Hrs:40,
    OT_Pay_rate: 12,
    Ot_Hrs: 0,
    Payrate: 12,
    Taxes: "yes",
    deductions: 0,
    nc_4: 19.2,
    net: 460.8,
    total: 480,},
    {
        Client: "12",
        Date:"1-1-2023",
        Employee: "123",
        Hrs:40,
        OT_Pay_rate: 12,
        Ot_Hrs: 0,
        Payrate: 12,
        Taxes: "yes",
        deductions: 0,
        nc_4: 19.2,
        net: 460.8,
        total: 480,}
]
console.log(preparedata)
        const ws = XLSX.utils.json_to_sheet(prd2,{header: myHeader})
    
        
        var wscols = [
            { wch: 6 },
            { wch: 7 },
            { wch: 8 },
            { wch: 20 },
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
            preparedata
            , {
                
        header: myHeader,
        skipHeader:false,
                origin: 'A7'});
       var wsx= XLSX.utils.sheet_add_aoa(ws3, [
            ["CITY FORCE LLC", undefined, '', '', '', '', '','','', '', 'www.cfi-solutions.com',''],
            
            ["CITY FORCE LLC", undefined, '', '', '', '', '','','', '', 'www.cfi-solutions.com',''],
            
            ["CITY FORCE LLC", undefined, '', '', '', '', '','','', '', 'www.cfi-solutions.com',''],
            
            ["CITY FORCE LLC", undefined, '', '', '', '', '','','', '', 'www.cfi-solutions.com',''],
            ["CITY FORCE LLC", undefined, '', '', '', '', '','','', '', 'www.cfi-solutions.com',''],
            
            ["CITY FORCE LLC", undefined, '', '', '', '', '','','', '', 'www.cfi-solutions.com',''],
          ], {
            
    header: ["note"],
    skipHeader:true,
            origin: 'A1'});
            
       var ws2= XLSX.utils.sheet_add_aoa(wsx, [
        ["Thanks for your business"],
      ], {
        
header: ["note"],
skipHeader:true,
        origin: -1});
            var g=preparedata.length+7
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
                    ws2[`I${k+1}`].s= styleforaddress
                    ws2[`J${k+1}`].s= styleforaddress
                    ws2[`K${k+1}`].s= styleforaddress
                    ws2[`L${k+1}`].s= styleforaddress
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
                    ws2[`I${k+1}`].s= styl1x
                    ws2[`J${k+1}`].s= styl1x
                    ws2[`K${k+1}`].s= styl1x
                    ws2[`L${k+1}`].s= styl1x
                        }
                else{
                    
            ws2[`B${k+1}`].s = styl2x
            ws2[`A${k+1}`].s= styl2x
            ws2[`C${k+1}`].s= styl2x        
            ws2[`D${k+1}`].s= styl2x
            ws2[`E${k+1}`].s= styl2x
            ws2[`F${k+1}`].s= cstyl2x
            ws2[`G${k+1}`].s= styl2x
            ws2[`H${k+1}`].s=  cstyl2x
            ws2[`I${k+1}`].s= styl2x
            ws2[`J${k+1}`].s= styl2x
            ws2[`K${k+1}`].s= styl2x
            ws2[`L${k+1}`].s= styl2x
    
                }
            }
            const merge = [
                { s: { r: 0, c: 0 }, e: { r: 0, c: 3 }  },
                { s: { r: 1, c: 0 }, e: { r: 1, c: 3 }  },
                { s: { r: 2, c: 0 }, e: { r: 2, c: 3 }  },
                
                { s: { r: 1, c: 10 }, e: { r: 1, c: 11 }  },
                { s: { r: 0, c: 10 }, e: { r: 0, c: 11 }  },


              ];
              ws2["!merges"] = merge;
        const wb = { Sheets: { 'data': ws2 }, SheetNames: ['data'] }
        const excelbuffer = XLSX.write(wb, { booktype: 'xlsx', type: 'array' })
        const dar = new Blob([excelbuffer], { type: filetype })
        file.saveAs(dar, 'asd.xlsx',)




    }
    function adddata() {
        setuserdata(userdata => [...userdata, {
            name: name,
            skill: skill,
            payrate: payrate,
            otpayrate: otpayrate,
            nc: nc,
            taxes: taxas,
            



        }])
        setj(0)

    }
    const [userdata, setuserdata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/jobsite/getall').then(res => {
            console.log(res)
            setdata(res.data.Jobsite)
        })

        return () => {

        }
    }, [])

    function req() {
        axios.post('http://localhost:4000/api/jobsite/add', {
            clientname: cname,
            status: 'Active',
            sitename: sname,
            user: userdata
        }).then(res => {
            axios.get('http://localhost:4000/api/jobsite/getall').then(res => {
                console.log(res)
                setdata(res.data.Jobsite)
                setadduser('adduser2')
            })
        })

    }

    function turnon() {
        if (is === 0) {
            settaxas('yes')

            setcircle('circle2')
            settaxes('taxes2')
            setis(1)
        }
        else {

            settaxas('no')

            setcircle('circle')
            settaxes('taxes')
            setis(0)
        }

    }
    function turnon2() {
        if (is2 === 0) {
            setnc('4')

            setcircle2('circle2')
            settaxes2('taxes2')
            setis2(1)
        }
        else {

            setcircle2('circle')
            settaxes2('taxes')
            setis2(0)

            setnc('no')
        }

    }
    function backtop() {
        setk(0)
        setind(' ')
        
    }

    const [jobn, setjobn] = useState('')
    const [nc, setnc] = useState('')
    const [taxas, settaxas] = useState('')
    const [pr, setpr] = useState('')
    const [otpr, setotpr] = useState('')
    const [j, setj] = useState(0)
    const [k, setk] = useState(0)

    const [ind, setind] = useState('')
function addindex(index) {
    if(ind.search(' '+index.toString()+' ')>=0){

        console.log(ind)
        setind(ind.replace(' '+index.toString()+' ',''))
    }
    else{
        
    setind(ind+' '+index.toString()+' ')
    console.log(ind)
    }

    
}
const [adduser3, setadduser3] = useState('adduser2')
const [tempjson, settempjson] = useState()
const [upind, setupind] = useState(0)
function showadd(index) {
    setupind(index)
    setadduser3('adduser')
    console.log(preparedata[index])
settempjson(preparedata[index])


}

function updatedata() {
var p=preparedata
    p[upind]=tempjson
    p[upind].total=(p[upind].Payrate*p[upind].Hrs)+(p[upind].Ot_Hrs*p[upind].OT_Pay_rate)
    
    if(tempjson.nc_4!=='-'){
        
    p[upind].nc_4=((p[upind].Payrate*p[upind].Hrs)+(p[upind].Ot_Hrs*p[upind].OT_Pay_rate))*4/100

    }

    p[upind].net=p[upind].total-(tempjson.nc_4!=='-'?p[upind].nc_4:0)-p[upind].deductions
    
    setpreparedata(p)
    setadduser3('adduser2')
    
}
const [l, setl] = useState(0)
    return (

        <>{tempjson&&
            
         <div className={adduser3}>
                       
         <div className="subadduser ">

             <>
                 <div className="inputname">
                     <h1>Name</h1>
                     <input value={tempjson.Employee} onChange={e => settempjson(tempjson=>({...tempjson,
                        
                      
                        Employee:e.target.value
                  
                }))} type="text" />

                 </div>

                 <div className="inputname">
                     <h1>Working Hrs</h1>
                     <input value={tempjson.Hrs} type="text" 
                     onChange={e => settempjson(tempjson=>({...tempjson,
                        
                      
                        Hrs:e.target.value
                  
                }))}
                     />

                 </div>
                 <div className="inputname">
                     <h1>Pay rate (per/hr)</h1>
                     <input value={tempjson.Payrate} type="text" 
                     onChange={e => settempjson(tempjson=>({...tempjson,
                        
                      
                        Payrate:e.target.value
                  
                }))}
                     />

                 </div>
                 <div className="inputname">
                     <h1>OT Hrs</h1>
                     <input value={tempjson.Ot_Hrs} type="text" 
                     onChange={e => settempjson(tempjson=>({...tempjson,
                        
                      
                        Ot_Hrs:e.target.value
                  
                }))}
                     />

                 </div>
                 <div className="inputname">
                     <h1>OT Pay rate (per/hr)</h1>
                     <input value={tempjson.OT_Pay_rate} type="text" onChange={e => settempjson(tempjson=>({...tempjson,
                        
                      
                            OT_Pay_rate:e.target.value
                      
                    }))} />

                 </div>
                 <div className="inputname">
                     <h1>Deduction</h1>
                     <input value={tempjson.deductions} type="text" onChange={e => settempjson(tempjson=>({...tempjson,
                        
                      
                            deductions:e.target.value
                      
                    }))} />

                 </div>
<div className="inputname"></div>
                 <div className="inputname">
                     <h1>Taxes:  </h1>
                     <div className={taxes} onClick={e => turnon()}>
                         <div className={circle}>

                         </div>
                     </div>

                 </div>
                 <div className="inputname">
                     <h1>NC (4%):  </h1>
                     <div className={taxes2} onClick={e => turnon2()}>
                         <div className={circle2}>

                         </div>
                     </div>

                 </div>

                 <button onClick={e => updatedata()} className='btn1'>Update</button>
                 <button style={{marginBottom:'30px'}} onClick={e => setadduser3('adduser2')} className='btn2'>Cancel</button>

             </>




         </div>

     
    

 </div>

        }
            {i === 0 &&
                <>
                    <div className={adduser}>
                        {j === 1 &&
                            <div className="subadduser subadduser2">

                                <>
                                    <div className="inputname">
                                        <h1>Name</h1>
                                        <input onChange={e => setname(e.target.value)} type="text" />

                                    </div>

                                    <div className="inputname">
                                        <h1>Position</h1>
                                        <input type="text" onChange={e => setskill(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>Pay rate (per/hr)</h1>
                                        <input type="text" onChange={e => setpayrate(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>OT Pay rate (per/hr)</h1>
                                        <input type="text" onChange={e => setotpayrate(e.target.value)} />

                                    </div>

                                    <div className="inputname">
                                        <h1>Taxes:  </h1>
                                        <div className={taxes} onClick={e => turnon()}>
                                            <div className={circle}>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="inputname">
                                        <h1>NC (4%):  </h1>
                                        <div className={taxes2} onClick={e => turnon2()}>
                                            <div className={circle2}>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="inputname">

                                    </div>

                                    <button onClick={e => adddata()} className='btn1'>Add</button>
                                    <button onClick={e => setj(0)} className='btn2'>Back</button>

                                </>




                            </div>

                        }
                        {j === 0 &&
                            <div className="subadduser subadduser2">

                                <>
                                    <div className="inputname">
                                        <h1>Site name</h1>
                                        <input onChange={e => setcname(e.target.value)} type="text" />

                                    </div>
                                    <div className="inputname">
                                        <h1>Client name</h1>
                                        <input type="text" onChange={e => setsname(e.target.value)} />

                                    </div>

                                    <div className="tablerow">
                                        <div className="subtable">
                                            <div className="headertable clop">
                                                <h1>Employee</h1>

                                                <h6>Skill</h6>
                                                <h3>Taxes</h3>
                                                <h4>Pay rate</h4>
                                                <h5>OT Pay rate</h5>
                                                <h5>NC(%)</h5>


                                            </div>
                                            {userdata && userdata.map(val => (
                                                <>
                                                    <div className="headertable">
                                                        <h1><img src='' alt="" className='valimg' /> {val.name}</h1>

                                                        <h6>{val.skill}</h6>

                                                        <h5>{val.taxes}</h5>
                                                        <h3>{val.payrate}</h3>
                                                        <h4>{val.otpayrate}</h4>
                                                        {
                                                            val.nc !== 'no' ?

                                                                <h5>{val.nc}%</h5>
                                                                :

                                                                <h5>NO</h5>
                                                        }


                                                    </div>
                                                </>
                                            ))

                                            }
                                        </div>
                                    </div>
                                    <div className="inputname">
                                        <button onClick={e => setj(1)} className='pluadd'>+ Add Employee</button>

                                    </div>

                                    <button onClick={e => req()} className='btn1'>Submit</button>
                                    <button onClick={e => setadduser('adduser2')} className='btn2'>Cancel</button>
                                    <div className="inputname"></div>
                                </>




                            </div>

                        }

                    </div>
                </>

            }
            <div className="sitemap">
                <div className="prodiheader">

                    <GiEnergyArrow className='ene' />
                    <h1>Jobsites</h1> 
                    <button className='addemp' onClick={e => setadduser('adduser')} >+ Create Site</button>




                </div>
                <div className="prodiheader prodih">


<div className="jk">{
    k===1&&
    
    <>
<button className=' adfp' onClick={e => backtop()}>Back</button>

<button className='addemp'  onClick={e => l===0?exports():l===1?exports():exports2()}>Export</button>

</>
}
</div>{
    k===0&&
    <>
<div className="hh">
    
<button className='addemp' onClick={e => preparesheet(0)}>Generate Report</button>
<button className='addemp2 addemp' onClick={e => preparesheet(1)}>Markup Report</button>
<button className='addemp3 addemp' onClick={e => preparesheetclient(2)}>Client invoice</button>
</div>
    </>

}
</div>

             {k===0&&
             <>
                <div className="tablerow" id='tablerow'>
                    <div className="subtable">
                        <div className="headertable clop">
                            <h2 className='sxx'> Select</h2>
                            <h1>Jobsite</h1>

                            <h6>Client</h6>
                            <h3>Total Employees</h3>
                            <h3>Status</h3>
                            <h5>Action</h5>


                        </div>
                        {data && data.map((val, index) => (
                            <>
                                <div className="headertable">
                                    <h2 className='sxx'> <input onClick={e=>addindex(index)} type="checkbox" checked={ind.search(' '+index.toString()+' ')>=0?true:false} /> </h2>
                                    <h1>{val.sitename}</h1>

                                    <h6>{val.clientname}</h6>
                                    <h3>{val.user.length}</h3>
                                    <h4>{val.status}</h4>
                                    <h5 className='h5'><button className='man'>Manage</button></h5>




                                </div>
                            </>
                        ))

                        }
                    </div>
                </div>
             </>

             }
             {k===1&&
             <>
                 <div className="tablerow">
                    <div className="subtable">
                        <div className="headertable clop">
                            <h2 style={{width:'80px',marginBottom:'0px'}}>Taxes</h2>
                            <h1 style={{width:'180px'}}>Client</h1>

                            <h6>Date</h6>
                            <h3>Contractor name</h3>
                            <h4 style={{width:'80px',marginBottom:'0px'}}>Hrs</h4>
                            
                            <h4 style={{width:'80px',marginBottom:'0px'}}>Pay rate</h4>
                            
                            <h4 style={{width:'80px',marginBottom:'0px'}}>OT Hrs</h4>
                            
                            <h4 style={{width:'80px',marginBottom:'0px'}}>OT Payrate</h4>
                    
                            <h4 style={{width:'80px',marginBottom:'0px'}}>Total</h4>
                            
                            <h4 style={{width:'80px',marginBottom:'0px'}}>NC 4%</h4>
                            
                            <h4 style={{width:'80px',marginBottom:'0px'}}>Deductions</h4>
                            
                            <h4 style={{width:'80px',marginBottom:'0px'}}>Net</h4>
                            <h5>Action</h5>


                        </div>
                        {preparedata && preparedata.map((val, index) => (
                            <>
                                <div className="headertable">
                                    <h2 style={{width:'80px',marginBottom:'0px'}}><img src='' alt="" className='valimg' />{val.Taxes} </h2>
                                    <h1  style={{width:'180px'}}>{val.Client}</h1>

                                    <h6>{val.Date}</h6>
                                    <h3>{val.Employee}</h3>
                                    <h4 style={{width:'80px',marginBottom:'0px'}}  >{val.Hrs}</h4>
                                    
                                    <h4 style={{width:'80px',marginBottom:'0px'}}  >$ {val.Payrate} </h4>
                                    
                                    <h4 style={{width:'80px',marginBottom:'0px'}}  >{val.Ot_Hrs}</h4>
                                    
                                    <h4 style={{width:'80px',marginBottom:'0px'}}  >$ {val.OT_Pay_rate} </h4>
                                    
                                    <h4 style={{width:'80px',marginBottom:'0px'}}  >{val.total} </h4>
                                    
                                    <h4 style={{width:'80px',marginBottom:'0px'}}  >{val.nc_4==='-'?<>0</>
                                    
                                :
                                val.nc_4
                                }</h4>
                                 <h4 style={{width:'80px',marginBottom:'0px'}}  >
                                    $ {val.deductions} 
                                 </h4>
                                 
                            <h4 style={{width:'80px',marginBottom:'0px'}}>{val.net}</h4>
                                    <h5 className='h5'><button className='man' onClick={e=>showadd(index)}>Manage</button></h5>




                                </div>
                            </>
                        ))

                        }
                    </div>
                </div>
             </>

             }

            </div></>
    )
}

export default Jobsite