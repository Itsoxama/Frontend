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
import ReactToPrint from 'react-to-print';

import * as file from 'file-saver'
import {AiFillDelete} from 'react-icons/ai'
import html2canvas from 'html2canvas'
import { tz } from '../../apis'
import { useRef } from 'react'
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

const [address, setaddress] = useState('')
const [pno, setpno] = useState('')
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
    const [mkup, setmkup] = useState(0)
const [currid, setcurrid] = useState('')
const [address2, setaddress2] = useState('')
const [pno2, setpno2] = useState('')
const [pname2, setpname2] = useState('')


const [filter, setfilter] = useState('jobsite')
const [searchval, setsearchval] = useState('')

    const [preparedata, setpreparedata] = useState([])

    function preparesheet(valx) {
        if (valx===2){
            
    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

    setinno(seq)
        }
        setl(valx)
        setpreparedata([])
        console.log(data)
        if(valx===2){
            data.forEach((val,index) => {
            
                if(valx===2){
                        
                setmkup(val.markup)
                setinnum(val.no)
                setinadd(val.address)
                setinname(val.sitename)
                console.log(val.address)
                    
                const date = new Date();
                
                const date3 = new Date();
    
                var result = date3.setDate(date.getDate() + 20);
                const date2 = new Date(result)
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    
    let day2 = date2.getDate();
    let month2 = date2.getMonth() + 1;
    let year2 = date2.getFullYear();
    
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    setindate(currentDate)
    let currentDate2 = `${day2}-${month2}-${year2}`;
    setindue(currentDate2)
    
                      }
             if(ind.search(' '+index.toString()+' ')>=0){
                val.user.length > 0 && val.user.forEach(element => {
                    console.log(val)
                    if(valx===2){
                        
                  setcurrid(val.clientname)
                  
                    }
    
                    setpreparedata(pr => [...pr, {
                        Taxes: element.taxes,
                        Client: val.clientname,
                        Date: '1-1-2023',
                        Employee: element.name,
                        skill:element.skill,
                        Hrs: 40,
                        Payrate:valx===1? Number(element.payrate)-5: Number(element.payrate)+ Number(element.payrate)*Number(val.markup)/100,
                   
                     
                        Ot_Hrs: 0,
                        OT_Pay_rate: Number(element.otpayrate)+Number(element.otpayrate)*Number(val.markup)/100,
                        nc_4: element.nc==='no'?'-':((Number(element.payrate)*40)+(0*Number(element.otpayrate)))*4/100,
                        total:(Number(element.payrate)*40)+(0*Number(element.otpayrate)),
                        deductions:0,
                        net:(Number(element.payrate)*40)+(0*Number(element.otpayrate))-0-(element.nc==='no'?0:((Number(element.payrate)*40)+(0*parseInt(element.otpayrate)))*4/100)
    
    
    
    
                    }])
    
                });
             }
    
            });
    setk(1)
            console.log(preparedata)
        }
        else{
            data.forEach((val,index) => {
            
                if(valx===2){
                        
                setmkup(val.markup)
                setinnum(val.no)
                setinadd(val.address)
                setinname(val.sitename)
                console.log(val.address)
                    
                const date = new Date();
                
                const date3 = new Date();
    
                var result = date3.setDate(date.getDate() + 20);
                const date2 = new Date(result)
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    
    let day2 = date2.getDate();
    let month2 = date2.getMonth() + 1;
    let year2 = date2.getFullYear();
    
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    setindate(currentDate)
    let currentDate2 = `${day2}-${month2}-${year2}`;
    setindue(currentDate2)
    
                      }
             if(ind.search(' '+index.toString()+' ')>=0){
                val.user.length > 0 && val.user.forEach(element => {
                    console.log(val)
                    if(valx===2){
                        
                  setcurrid(val.clientname)
                  
                    }
    
                    setpreparedata(pr => [...pr, {
                        Taxes: element.taxes,
                        Client: val.clientname,
                        Date: '1-1-2023',
                        Employee: element.name,
                        Hrs: 40,
                        Payrate:valx===1? parseInt(element.payrate)-5: parseInt(element.payrate),
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
        
const myHeader = ["Taxes","Client","Date",'Employee','Hrs','Payrate','Ot_Hrs','OT_Pay_rate','total','nc_4','deductions','net'];
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
    function exports3() {

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
        const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        var ext = '.xlsx'
        
const myHeader = ["Taxes","Client","Date",'Employee','Hrs','Payrate','Ot_Hrs','OT_Pay_rate','total','nc_4','deductions','net'];
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
                
        ws[`B${k+1}`].s = styl1p
        ws[`A${k+1}`].s= styl1p
        ws[`C${k+1}`].s= styl1p        
        ws[`D${k+1}`].s= styl1p
        ws[`E${k+1}`].s= styl1p
        ws[`F${k+1}`].s= styl1p
        ws[`G${k+1}`].s= styl1p
        ws[`H${k+1}`].s= styl1p
        ws[`I${k+1}`].s= styl1p
        ws[`J${k+1}`].s= styl1p
        ws[`K${k+1}`].s= styl1p
        ws[`L${k+1}`].s= styl1p
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
                    ws[`I${k+1}`].s= styl2x
                    ws[`J${k+1}`].s= styl2x
                    ws[`K${k+1}`].s= styl2x
                    ws[`L${k+1}`].s= styl2x
                }else if(k%2!==0){
                    
                    ws[`B${k+1}`].s = styl2xp
                    ws[`A${k+1}`].s= styl2xp
                    ws[`C${k+1}`].s= styl2xp        
                    ws[`D${k+1}`].s= styl2xp
                    ws[`E${k+1}`].s= styl2xp
                    ws[`F${k+1}`].s= cstyl2xp
                    ws[`G${k+1}`].s= styl2xp
                    ws[`H${k+1}`].s=  cstyl2xp
                    ws[`I${k+1}`].s= styl2xp
                    ws[`J${k+1}`].s= styl2xp
                    ws[`K${k+1}`].s= styl2xp
                    ws[`L${k+1}`].s= styl2xp
                }

            }
        }




        ws['!cols'] = wscols;
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelbuffer = XLSX.write(wb, { booktype: 'xlsx', type: 'array' })
        const dar = new Blob([excelbuffer], { type: filetype })
        file.saveAs(dar, 'asd.xlsx',)




    }
    const [totalall, settotalall] = useState(0)
    const [markupcuee, setmarkupcuee] = useState(0)
    function exports2() {
        
        setaduserl('adduser')
        var tx=[]
        var alltotal=0
        preparedata.forEach((val,index) => {

            
            var tr=parseFloat(val.Payrate)
            
            var to=parseFloat(val.OT_Pay_rate)

            alltotal=alltotal+parseFloat(tr*val.Hrs+to*val.Ot_Hrs)
            settotalall(alltotal)
            tx.push({
                ["NAME"]:val.Employee,
                ["REG HRS"]:val.Hrs,
                ["WEEKEND"]:val.Date,
                ["REG RTE"]:Number(tr).toFixed(2).toLocaleString('en'),
               ["OT HRS"]:val.Ot_Hrs,
                ["OT RTE"]:Number(to).toFixed(2).toLocaleString('en'),
                ["TOTAL"]:Number(tr*val.Hrs+to*val.Ot_Hrs).toFixed(2).toLocaleString('en'),
                ["SKILL"]:val.skill,
    
    
    
            })
            if(preparedata.length-1===index){
               
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
        
const myHeader = ["WEEKEND","NAME",'SKILL',"REG HRS",'REG RTE','OT HRS', "OT RTE",'TOTAL'];
var prd2=[
   {

    ["NAME"]:"val.Employee",
    ["REG HRS"]:"val.Hrs",
    ["WEEKEND"]:"val.Date",
    ["REG RTE"]:"val.Payrate",
    ["OT HRS"]:"val.Ot_Hrs",
    ["OT RTE"]:"val.OT_Pay_rate",
    ["TOTAL"]:"val.total",
    ["SKILL"]:"val.skill",
},
{

    ["NAME"]:"val.Employee",
    ["REG HRS"]:"val.Hrs",
    ["WEEKEND"]:"val.Date",
    ["REG RTE"]:"val.Payrate",
    ["OT HRS"]:"val.Ot_Hrs",
    ["OT RTE"]:"val.OT_Pay_rate",
    ["TOTAL"]:"val.total",
    ["SKILL"]:"val.skill",
},{

    ["NAME"]:"val.Employee",
    ["REG HRS"]:"val.Hrs",
    ["WEEKEND"]:"val.Date",
    ["REG RTE"]:"val.Payrate",
    ["OT HRS"]:"val.Ot_Hrs",
    ["OT RTE"]:"val.OT_Pay_rate",
    ["TOTAL"]:"val.total",
    ["SKILL"]:"val.skill",
},{

    ["NAME"]:"val.Employee",
    ["REG HRS"]:"val.Hrs",
    ["WEEKEND"]:"val.Date",
    ["REG RTE"]:"val.Payrate",
    ["OT HRS"]:"val.Ot_Hrs",
    ["OT RTE"]:"val.OT_Pay_rate",
    ["TOTAL"]:"val.total",
    ["SKILL"]:"val.skill",
},

]
console.log(preparedata)
        const ws = XLSX.utils.json_to_sheet(prd2,{header: myHeader})
    
        
        var wscols = [
            
            { wch: 8 },
            { wch: 13 },
            { wch: 15 },
            
            { wch: 8 },
            { wch: 8 },
            { wch: 8 },
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
        settxp(tx)

        var ws3= XLSX.utils.sheet_add_json(ws, 
            tx
            , {
                
        header: myHeader,
        skipHeader:false,
                origin: 'A7'});
       var wsx= XLSX.utils.sheet_add_aoa(ws3, [
            [`${compnay}`, '', '', '', '', '', '',''],
            
            [`Date: ${indate}`, '', '', '', '', '', '',''],
            
            [`Invoice # ${inno}`, '', '', '', '', `${add}`, '',''],
            
            [`Project Number ${innum}`, '', '', '',  '',`${zpi}`, '',''],
            
            [`Project Name: ${inname}`, '', '', '', '', '919-381-0394', '',''],
            [`${inadd}`, '', '', '', '', 'www.cfi-solutions.com', '',''],
            
          ], {
            
    header: ["note"],
    skipHeader:true,
            origin: 'A1'});
            
       var ws2= XLSX.utils.sheet_add_aoa(wsx, [
        
        [ '', '',,'',,'','Total' ,alltotal],
        [ '', "Thanks for your business. Its a pleasure to work with you on your project."],
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
            ws2[`E${k+1}`].s= cstyl2x
            ws2[`F${k+1}`].s= styl2x
            ws2[`G${k+1}`].s= cstyl2x
            ws2[`H${k+1}`].s= styl2x
    
                }
            }
            
            ws2[`B${tx.length+9}`].s= styleforaddress
            ws2[`G${tx.length+8}`].s= styleforaddress2
            ws2[`H${tx.length+8}`].s= styleforaddress2
            const merge = [
                { s: { r: 0, c: 0 }, e: { r: 0, c: 3 }  },
                { s: { r: 1, c: 0 }, e: { r: 1, c: 3 }  },
                { s: { r: 2, c: 0 }, e: { r: 2, c: 3 }  },
                { s: { r: 3, c: 0 }, e: { r: 3, c: 3 }  },
                { s: { r: 4, c: 0 }, e: { r: 4, c: 3 }  },
                { s: { r: 5, c: 0 }, e: { r: 5, c: 3 }  },
                
                { s: { r: 1, c: 5 }, e: { r: 1, c: 7 }  },
                { s: { r: 0, c: 5 }, e: { r: 0, c: 7 }  },
                { s: { r: 2, c: 5 }, e: { r: 2, c: 7 }  },
                { s: { r: 3, c: 5 }, e: { r: 3, c: 7 }  },
                { s: { r: 4, c: 5 }, e: { r: 4, c: 7 }  },
                { s: { r: 5, c: 5 }, e: { r: 5, c: 7 }  },


              ];
              ws2["!merges"] = merge;
        const wb = { Sheets: { 'data': ws2 }, SheetNames: ['data'] }
        const excelbuffer = XLSX.write(wb, { booktype: 'xlsx', type: 'array' })
        const dar = new Blob([excelbuffer], { type: filetype })
       /* file.saveAs(dar, 'asd.xlsx',)*/


            }
        
          
        });


    }
    const [txp, settxp] = useState()
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
    const [empdata, setempdata] = useState()
    function allemps(val) {
        var t=val.split('eiuka')
        setuserdata([])
        setcname(t[0])
        setclientid(t[2])
        console.log(t[2])
        setmarkupcuee(parseFloat(t[1]))
        empdata.forEach((element,index) => {
            if(t[0]===element.client){
             
                setuserdata(userdata => [...userdata, {
                    name: element.name,
                    skill: element.skill,
                    payrate: element.payrate,
                    otpayrate: element.otpayrate,
                    nc: element.nc,
                    taxes: element.taxes,
                    userid:element._id
                    
        
        
        
                }])

            }
            
            
            
        });
        

    }
    useEffect(() => {
        axios.get(`${tz}/siteuser/getall`).then(res=>{
            console.log(res)
            setempdata(res.data.Siteuserd)
          })
        axios.get(`${tz}/jobsite/getall`).then(res => {
            console.log(res)
            setdata(res.data.Jobsite)
        })

        return () => {

        }
    }, [])

    function req() {
        axios.post(`${tz}/jobsite/add`, {
            clientid:clientid,
            clientname: cname,
            status: 'Active',
            sitename: sname,
            markup:markupcuee,
            user: userdata,
            no:pno,
            address:address
        }).then(res => {
            axios.get(`${tz}/jobsite/getall`).then(res => {
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
const [mx, setmx] = useState(0)
const [currproject, setcurrproject] = useState()
function setms(val) {
    setcurrproject(val)
    if(mx===0){
        setmx(1)
    }else{
        setmx(0)
    }
    
}
function setnameq(val) {
    empdata.forEach(element => {
        if(element._id===val){
            
    setname(element.name)
    setskill(element.skill)
    setpayrate(element.payrate)
    setotpayrate(element.otpayrate)
    setnc(val.nc)
    settaxas(val.taxes)
    
        }
        
    });

    
    
}
const [clients, setclients] = useState()
useEffect(() => {
    axios.get(`${tz}/client/getall`).then(res=>{
        console.log(res)
        setclients(res.data.Client)
    })

  return () => {
    
  }
}, [])
const [clientid, setclientid] = useState('')
function skipthis(element) {

    var y=preparedata
    setpreparedata([])
    y.forEach((elemen,index) => {
        if(index===element){

        }
        else{
            setpreparedata(pre=>[...pre,elemen])
        }

        
    });
}
const [deleteids, setdeleteids] = useState([])
function deletedata() {
    console.log(ind)
    var r=[]
    data.forEach((element,index) => {
       if(index===data.length-1){
        
        if(ind.search(' '+index.toString()+' ')>=0){
            r.push(element._id)
            


        }
        axios.post(`${tz}/jobsite/delete`,{
            ids:r
      
      
      
          }).then(res=>{  
              console.log(res)
              setdeleteids([])
              axios.get(`${tz}/jobsite/getall`).then(res2=>{
                  console.log(res2)
                  setdata(res2.data.Jobsite)
                  setind('')
                })
          })
       }else{
        
        if(ind.search(' '+index.toString()+' ')>=0){
            setdeleteids(del=>[...del,element._id])
            r.push(element._id)
            


        }
       }

    });

    
}
const [nameskill, setnameskill] = useState([])
const [indue, setindue] = useState('')
function postclient() {
    var tx=[]
  
    txp.forEach((val,index) => {
        tx.push({
            empname:val["NAME"],
            hrs:val["REG HRS"],
            date:val["WEEKEND"],
           payrate:val["REG RTE"],
            othrs:val["OT HRS"],
            otpayrate:val["OT RTE"],
            total:val ["TOTAL"],
            skill:val["SKILL"],



        })
        if(preparedata.length-1===index){
            axios.post(`${tz}/client/update`,{
               _id:currid,
               date:indate,
               no:inno,
               due:indue,
               total:Number(totalall).toFixed(2).toLocaleString('en'),
               paid:0,
               balance:Number(totalall).toFixed(2).toLocaleString('en'),
               status:'pending',


               data:tx
               
        
        
        
            }).then(res=>{  
                console.log(res)
                alert('Updated')
           {/*     axios.post(`${tz}/noti/add`, {
                    message:`Company Sent an invoice of ${totalall}`,
                    idp:project.clientid,
                    time:dateput[1],
                    status:'att',
                }).then(resp => {
                    console.log(resp)
              
                    
    
    
                })
            */}


            })
        }
    
      
    });
    
}
const [indate, setindate] = useState('')
const [inno, setinno] = useState('')
const [inname, setinname] = useState('')
const [innum, setinnum] = useState('')
const [inadd, setinadd] = useState('')
function updateaccount(){
    console.log(preparedata)
    axios.post(`${tz}/siteuser/updatebulk`,{
     preparedata:preparedata
 
 
 
     }).then(res=>{  
         console.log(res)
         alert('Updated')
    {/*     axios.post(`${tz}/noti/add`, {
             message:`Company Sent an invoice of ${totalall}`,
             idp:project.clientid,
             time:dateput[1],
             status:'att',
         }).then(resp => {
             console.log(resp)
       
             


         })
     */}


     })
}
function setaduserl2(){
    setaduserl('adduser2')
    alert('Email sent!')
}
const componentRef = useRef();


const [compnay, setcompnay] = useState('City Force LLC')
const [add, setadd] = useState('1106 W CORNWALLIS RD, STE 105')
const [zpi, setzpi] = useState('Durham NC 27705')
const [mail, setmail] = useState('admin@cfl-solution.com')
const [aduserx, setaduserx] = useState('adduser2')
const [aduserl, setaduserl] = useState('adduser2')
function opm(){
    setaduserx('adduser')
}
    return (

        <>

        <div className={aduserl}>
            <div className="mainpage1" >
            <ReactToPrint
            
        trigger={() => <button className='ss33'>Export To pdf!</button>}
        content={() => componentRef.current}
      />
      <button className='ss333' onClick={e=>setaduserl('adduser2')}>Cancel</button>
      
      <button className='ss3333' onClick={e=>setaduserl2('adduser2')}>Send Email!</button>
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
<div className={aduserx}>
<div className="subadduser subadduserx2">

<>
    <div className="inputname">
        <h1>Company name</h1>
<input type="text"  onChange={e=>setcompnay(e.target.value)} value={compnay} />
    </div>

    <div className="inputname">
        <h1>Address</h1>
        <input type="text" 
        onChange={e=>setadd(e.target.value)} value={add} />
    </div>

    <div className="inputname">
        <h1>Zip code</h1>
<input type="text"  onChange={e=>setzpi(e.target.value)} value={zpi} />
    </div>

    <div className="inputname">
        <h1>Mail:</h1>
        <input type="text" onChange={e=>setmail(e.target.value)} value={mail} />
        
    </div>
    <div className="inputname">

    </div>
    <button onClick={e => setaduserx('adduser2')} className='btn1'>Update</button>
                                    <button onClick={e => setaduserx('adduser2')} className='btn2'>Cancel</button>
                                   
    

</>




</div>

                        
                        

    </div>        
        
        {tempjson&&
            
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
                                    
    
    <input type="text" onChange={e=>setnameq(e.target.value)} />
                                    </div>

                                    <div className="inputname">
                                        <h1>Skill</h1>
                                        <input value={skill} type="text" onChange={e => setskill(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>Pay rate (per/hr)</h1>
                                        <input value={payrate} type="text" onChange={e => setpayrate(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>OT Pay rate (per/hr)</h1>
                                        <input value={otpayrate} type="text" onChange={e => setotpayrate(e.target.value)} />

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
                                        <input onChange={e => setsname(e.target.value)} type="text" />

                                    </div>
                                    <div className="inputname">
                                        <h1>Project no:</h1>
                                        <input onChange={e => setpno(e.target.value)} type="text" />

                                    </div>
                                    <div className="inputname">
                                        <h1>Address</h1>
                                        <input onChange={e => setaddress(e.target.value)} type="text" />

                                    </div>
                                    <div className="inputname">
                                        <h1>Company</h1>

                                        <select name="cars" id="cars"  onChange={e=>allemps(e.target.value)}>

{
  clients&&clients.map(val=>(
      <option value={val.username+'eiuka'+val.markup+'eiuka'+val._id}>{val.username}</option>
  ))
}
</select>
                                    </div>

                                    <div className="tablerow trow">
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
                <div className="temphead tempheadr">
                    
                </div>
                <div className="prodiheader whitebg varyheight fixedheader">

                    <GiEnergyArrow className='ene' />
                    <h1>Jobsites</h1> 
                  

                    <h6  className="searchengine2">
                  
               
                  <>
                      <input onChange={e=>setsearchval(e.target.value)}  type="text" placeholder='Search here...' />

<select className='apply'  name="cars" id="cars" onChange={e=>setfilter(e.target.value)}>
<option >Filters</option>
<option value="jobsite">Jobsite</option>
<option value="company">Company</option>
</select>
                  </>

                  
             
          </h6>




                </div>
             {mx===0&&
             <>
                <div className="prodiheader iot prodih">


<div className="jk">{
    k===1&&
    
    <>
<button className=' adfp' onClick={e => backtop()}>Back</button>

<button className='addemp'  onClick={e => l===0?exports():l===1?exports3():exports2()}>Export</button>
{l===0&&

<button className='addemp2 addemp' onClick={e => updateaccount()}>Update Account</button>

}
{l===2&&

<button className='addemp2 addemp' onClick={e => postclient()}>Update Account</button>

}
</>
}
</div>{
    k===0&&
    <>
<div className="hh">
    
<button className='addemp' onClick={e => setadduser('adduser')} >+ Create Project</button>

<button className='addemp3 addemp' onClick={e => deletedata()}>Delete</button>
<button className='addemp' onClick={e => preparesheet(0)}>Export to excel</button>
<button className='addemp2 addemp' onClick={e => preparesheet(1)}>Enter Hours</button>
<button className='addemp3 addemp' onClick={e => preparesheet(2)}>Create invoice</button>
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

                            <h6>Company</h6>
                            <h3>Total Employees</h3>
                            <h3>Status</h3>
                            <h5>Action</h5>


                        </div>
                        {searchval.length>0&&filter==='jobsite'&&data && data.map((val, index) => (
                           val.sitename.toLowerCase().search(searchval.toLowerCase())>=0&&
                           <>
                           <div className="headertable">
                               <h2 className='sxx'> <input onClick={e=>addindex(index)} type="checkbox" checked={ind.search(' '+index.toString()+' ')>=0?true:false} /> </h2>
                               <h1>{val.sitename}</h1>

                               <h6>{val.clientname}</h6>
                               <h3>{val.user.length}</h3>
                               <h4>{val.status}</h4>
                               <h5 className='h5'><button onClick={e=>setms(val)} className='man'>Manage</button></h5>




                           </div>
                       </>
                        ))

                        }
                          {searchval.length>0&&filter==='company'&&data && data.map((val, index) => (
                           val.clientname.toLowerCase().search(searchval.toLowerCase())>=0&&
                           <>
                           <div className="headertable">
                               <h2 className='sxx'> <input onClick={e=>addindex(index)} type="checkbox" checked={ind.search(' '+index.toString()+' ')>=0?true:false} /> </h2>
                               <h1>{val.sitename}</h1>

                               <h6>{val.clientname}</h6>
                               <h3>{val.user.length}</h3>
                               <h4>{val.status}</h4>
                               <h5 className='h5'><button onClick={e=>setms(val)} className='man'>Manage</button></h5>




                           </div>
                       </>
                        ))

                        }
                         {searchval.length===0&&data && data.map((val, index) => (
                      
                           <>
                           <div className="headertable">
                               <h2 className='sxx'> <input onClick={e=>addindex(index)} type="checkbox" checked={ind.search(' '+index.toString()+' ')>=0?true:false} /> </h2>
                               <h1>{val.sitename}</h1>

                               <h6>{val.clientname}</h6>
                               <h3>{val.user.length}</h3>
                               <h4>{val.status}</h4>
                               <h5 className='h5'><button onClick={e=>setms(val)} className='man'>Manage</button></h5>




                           </div>
                       </>
                        ))

                        }
                    </div>
                </div>
             </>

             }
             {k==1&&l===2&&
             <div className='sssw' style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                          

                            <div className="subadduser subadduserx2">

                                <>
                                    <div className="inputname">
                                        <h1>Project name</h1>
                   <input type="text"  onChange={e=>setinname(e.target.value)} value={inname} />
                                    </div>

                                    <div className="inputname">
                                        <h1>Invoice #</h1>
                                        <input type="text" 
                                        onChange={e=>setinno(e.target.value)} value={inno} />
                                    </div>
                                
                                    <div className="inputname">
                                        <h1>Date</h1>
                   <input type="text"  onChange={e=>setindate(e.target.value)} value={indate} />
                                    </div>

                                    <div className="inputname">
                                        <h1>Project no:</h1>
                                        <input type="text" onChange={e=>setinnum(e.target.value)} value={innum} />
                                        
                                    </div>
                                    <div className="inputname">
                                        <h1>Address:</h1>
                                        <input type="text" onChange={e=>setinadd(e.target.value)} value={inadd}/>
                                        
                                    </div> <div className="inputname">
                                        <h1>Due date:</h1>
                                        <input type="text" onChange={e=>setindue(e.target.value)} value={indue}/>
                                        
                                    </div>
                                
                                </>




                            </div>
                            
                            <div className="subadduser subadduserx2 subadduserx3">

                                <>
                                        <h1>{compnay}</h1>
                                        <h1>{add}</h1>
                                        <h1>{zpi}</h1>
                                        <h1>{mail}</h1>
                                        <h3 onClick={e=>opm()}>Edit Company</h3>
                        

                                  
                                
                                </>




                            </div>

                        
             </div>

             }


             {k===1&&
             <>
                 <div className="tablerow">
                    <div className="subtable">
                        <div className="headertable clop">
                        <span className='sxx'> </span>
          
                            <h2 style={{width:'80px',marginBottom:'0px'}}>Taxes</h2>
                            <h1 style={{width:'180px'}}>Company</h1>

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
                                    
                        <span className='sxx'><AiFillDelete onClick={e=>skipthis(index)} /> </span>
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
                                    <h5 className='h5'><button  className='man' onClick={e=>showadd(index)}>Manage</button></h5>




                                </div>
                            </>
                        ))

                        }
                    </div>
                </div>
             </>

             }
             </>

             }
             {mx===1&&
             <>  <div className="projectview">
             <h4>     <span></span> <p>Active</p></h4>
         <h1>Company : <p>{currproject.clientname}</p></h1>
         <h1>Site : <p className='greenp'>{currproject.sitename}</p></h1>
         <h1 className='teamm'>Supervisor: </h1>
         <div className="teamates">
             <button>Alex Loop</button>
           
 
 
         </div>
         
         <h1 className='teamm'>Employees: </h1>
 
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
                                            {currproject && currproject.user.map(val => (
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
 
          </div>
             </>

             }

            </div></>
    )
}

export default Jobsite