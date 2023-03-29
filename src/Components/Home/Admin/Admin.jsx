import React, { useState } from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import axios from 'axios'
import { useEffect } from 'react'
import { tz } from '../../apis'

import {AiFillDelete} from 'react-icons/ai'
import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';
import * as file from 'file-saver'
const Admin = () => {

const [adduser, setadduser] = useState('adduser2')
const [i, seti] = useState(0)
const [taxes, settaxes] = useState('taxes')
const [circle, setcircle] = useState('circle')
const [is, setis] = useState(0)




const [data, setdata] = useState()

useEffect(() => {
  axios.get(`${tz}/admin/getall`).then(res=>{
    console.log(res)
    setdata(res.data.Admin)
  })

  return () => {
    
  }
}, [])



const [actiontype, setactiontype] = useState('edit')


  function addadmin(){
    if(email&&password){

    }
    else{
        alert('Please Complete All Fields')
    }
  }

const [idb, setidb] = useState('')
function closewin() {
    setadduser('adduser2')
    setactiontype('edit')
    
}
const [o, seto] = useState(0)

const [idno, setidno] = useState('')
const [aduser, setaduser] = useState('adduser2')
const [skillname, setskillname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [streamaccess, setstreamaccess] = useState('Allowed')
const [presenceaccess, setpresenceaccess] = useState('Allowed')
const [staffaccess, setstaffaccess] = useState('Allowed')
const [prodaccess, setprodaccess] = useState('Allowed')
const [siteaccess, setsiteaccess] = useState('Allowed')
const [companyaccess, setcompanyaccess] = useState('Allowed')
const [appsaccess, setappsaccess] = useState('Allowed')
const [snapaccess, setsnapaccess] = useState('Allowed')
const [gpsaccess, setgpsaccess] = useState('Allowed')
const [leaveaccess, setleaveaccess] = useState('Allowed')
const [notesaccess, setnotesaccess] = useState('Allowed')
const [reportsaccess, setreportsaccess] = useState('Allowed')
const [adminccess, setadminccess] = useState('Allowed')
const [projectsaccess, setprojectsaccess] = useState('Allowed')
const [admin, setadmin] = useState()
const [ids, setids] = useState('')
function deleteuser() {
    console.log(ids)
    var r=ids.split('4sd')
    r[r.length-1]= r[r.length-2]
 
    axios.post(`${tz}/admin/deletedata`,{
      ids:r



    }).then(res=>{  
        console.log(res)
        setids('')
        axios.get(`${tz}/admin/getall`).then(res2=>{
           
            setdata(res2.data.Admin)
            setadduser('adduser2')
          })
    })
    
}
const [idcr, setidcr] = useState('')
const [arr, setarr] = useState([])
function updateuser() {
    setactiontype('update')
    setadduser('adduser')
    var idx=ids.split('4sd')
    data.forEach(val => {
        if(val._id===idx[0]){
            setemail(val.email)
            setpassword(val.password)
            setstreamaccess(val.stream)
            setpresenceaccess(val.presence)
            setprodaccess(val.productivity)
            setsiteaccess(val.site)
            setstaffaccess(val.staff)
            setcompanyaccess(val.company)
            setsnapaccess(val.snaps)
            setappsaccess(val.apps)
            setgpsaccess(val.gps) 
            setleaveaccess(val.leave)
            setreportsaccess(val.reports)
            setadminccess(val.admin)
            setidcr(val._id)
        
          
        }
        
    });

    
}
const [role, setrole] = useState('')
function fillall(){
    console.log(ids)
    if(o===0){
        setarr([])
        seto(1)
        setids('')
        data.forEach(elem => {
            setids(ids=>ids+elem._id+'4sd')
           {/*} setarr(arrr=>[...arrr,{    
                name:elem.name,
                nc:elem.nc,
                taxes:elem.taxes,
                skill:elem.skill,
                payrate:elem.payrate,
                otpayrate:elem.otpayrate,
                phone:elem.phone,
                address:elem.address,
                itin:elem.itin,
                status:elem.status,
                client:elem.client
                
            }])*/}
        });
    }
    else{
        setarr([])
        setids('')
        seto(0)

    }

}
function addadmin2(){
    setactiontype('edit')
    setadduser('adduser')

}
function addadmin(){
  if(actiontype==='edit'){
    if(email&&password){
        axios.post(`${tz}/admin/add`,{
           email: email,
           password:password,
           site:siteaccess,
           stream:streamaccess,
           presence:presenceaccess,
           productivity:prodaccess,
           staff:staffaccess,
           company:companyaccess,
           snaps:snapaccess,
           apps:appsaccess,
           gps:gpsaccess,
           leave:leaveaccess,
           note:notesaccess,
           reports:reportsaccess,
           admin:adminccess,
   
           role1:role
   
   
       }).then(res2=>{  
           if(res2.data.Admin==='exist'){
               alert('User already exist')
           }
          else{
   
           console.log(res2)
           axios.get(`${tz}/admin/getall`).then(res=>{
               console.log(res)
               setdata(res.data.Admin)
               setadduser('adduser2')
             })
          }
       })
       
      }
      else{
       alert("Please fill all required fields")
      }
  }
  else{
    axios.post(`${tz}/admin/update`,{
_id:idcr,
        email: email,
        password:password,
        site:siteaccess,
        stream:streamaccess,
        presence:presenceaccess,
        productivity:prodaccess,
        staff:staffaccess,
        company:companyaccess,
        snaps:snapaccess,
        apps:appsaccess,
        gps:gpsaccess,
        leave:leaveaccess,
        note:notesaccess,
        reports:reportsaccess,
        admin:adminccess,
        role:role



    }).then(res2=>{  
      
    

        console.log(res2)
        axios.get(`${tz}/admin/getall`).then(res=>{
            console.log(res)
            setdata(res.data.Admin)
            setadduser('adduser2')
          })
       
    })
    
  }
}

  return (
    <>
    {i===0&&
<>
<div className={adduser}>
            <div className="subadduser">
              
              <>
                <div className="inputname">
                    <h1>Email</h1>
                    <input value={email} onChange={e=>setemail(e.target.value)}  type="text" />

                </div>
                
                <div className="inputname">
                    <h1>Password</h1>
                    <input value={password} onChange={e=>setpassword(e.target.value)}   type="text" />

                </div>
                <div className="inputname">
                    <h1>Role</h1>
                    <input value={role} onChange={e=>setrole(e.target.value)} placeholder='e.g Admin'   type="text" />

                </div>

                <div className="inputname">
                    <h1>Stream Access</h1>
                    



<select name="cars" id="cars"   value={streamaccess} onChange={e=>setstreamaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
                <div className="inputname">
                    <h1>Presence Access</h1>
                    



<select name="cars" id="cars"  value={presenceaccess}  onChange={e=>setpresenceaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>

                
                <div className="inputname">
                    <h1>Productivity Access</h1>
                    



<select name="cars" id="cars"  value={prodaccess}  onChange={e=>setprodaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
                <div className="inputname">
                    <h1>Staff Access</h1>
                    



<select name="cars" id="cars"  value={staffaccess}  onChange={e=>setstaffaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>

                
                <div className="inputname">
                    <h1>Jobsite Access</h1>
                    



<select name="cars" id="cars"  value={siteaccess}  onChange={e=>setsiteaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
               
                
                <div className="inputname">
                    <h1>Snapshot  Access</h1>
                    



<select name="cars" id="cars"   value={snapaccess}  onChange={e=>setsnapaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
                <div className="inputname">
                    <h1>Apps Access</h1>
                    



<select name="cars" id="cars"  value={appsaccess}  onChange={e=>setappsaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
                
                <div className="inputname">
                    <h1>GPS Access</h1>
                    



<select name="cars" id="cars"  value={gpsaccess}  onChange={e=>setgpsaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
                <div className="inputname">
                    <h1>Leave Access</h1>
                    



<select name="cars" id="cars"  value={leaveaccess}  onChange={e=>setleaveaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
                
            
                <div className="inputname">
                    <h1>Reports Access</h1>
                    



<select name="cars" id="cars"  value={reportsaccess}  onChange={e=>setreportsaccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
                
                <div className="inputname">
                    <h1>Admin Management</h1>
                    



<select name="cars" id="cars"  value={adminccess}  onChange={e=>setadminccess(e.target.value)}>

        <option value='Allowed'>Allowed</option>
        <option value='Not Allowed'>Not Allowed</option>
   
</select>



                </div>
               
                <div className="inputname" style={{paddingBottom:'20px'}}></div>
                <button onClick={e=>addadmin()}  className='btn1'>Submit</button>
                <button onClick={e=>closewin()}  className='btn2'>Cancel</button>

              </>

              


            </div>

        </div>
</>

}
    <div className="sitemap">
        <div className="temphead"></div>
         <div className="prodiheader whitebg fixedheader">

<GiEnergyArrow className='ene' />
<h1>Admin Control</h1>
<button className='addemp' onClick={e=>addadmin2()} >+ Add Admin</button>
{ids&&ids.split('4sd').length<=2&&
    
    <button className='addemp  addemp2' onClick={e=>updateuser()} >Update</button>
    
        }
<button className='addemp addemp3' onClick={e=>deleteuser()} >Delete</button>





</div>
<div className="tablerow">
              <div className="subtable">
              <div className="headertable clop">
                <span className='sxx'><input type="checkbox"  checked={o===1} onClick={e=>fillall() } /> </span>
                
                <h4 style={{width:"40px"}}>No.</h4>
              
              
            
                <h3 style={{width:"140px"}}>Email</h3>
                
                <h3 style={{width:"90px"}}>Password</h3>
                    
                    <h6>Stream</h6>
                    
                    <h6>Presence</h6>
                    <h3 style={{width:"90px"}}>Productivity</h3>
                    <h4 style={{width:"90px"}}>Staff</h4>

                    <h4 style={{width:"90px"}}>Jobsite</h4>
                    
                    <h4 style={{width:"90px"}}>Company</h4>
                    
                    <h4 style={{width:"90px"}}>Snapshot</h4>
                    
                    <h4 style={{width:"90px"}}>Apps</h4>
                    
                    <h4 style={{width:"90px"}}>GPS</h4>
                    
                    <h4 style={{width:"90px"}}>Leaves</h4>
                    
                    <h4 style={{width:"90px"}}>Reports</h4>
                    
                    <h4 style={{width:"90px"}}>Admin</h4>
                  


                </div>
                {data&&data.map((val,index)=>(
                    <>
                     <div className="headertable">
                     <span className='sxx'> <input type="checkbox"  checked={ids.search(val._id)>=0} onClick={e=>ids.search(val._id)>=0?setids(ids.replace(val._id+'4sd','')):setids(ids+val._id+'4sd')} /> </span>
        
                <h4 style={{width:"40px"}}>{index}</h4>
                  
                <h3 style={{width:"140px"}}>{val.email}</h3>
                  
                    <h3 style={{width:"90px"}}>{val.password}</h3>
                    <h6> {val.stream}</h6>
                    
                    <h6 >{val.presence}</h6>
                    
                    <h3 style={{width:"90px"}}>{val.productivity}</h3>
                    <h4 style={{width:"90px"}} >{val.staff}</h4>
                    <h4 style={{width:"90px"}} >{val.site}</h4>
                                        <h4 style={{width:"90px"}} >{val.company}</h4>
                    
                    <h4 style={{width:"90px"}} >{val.snaps}</h4>
                    <h4 style={{width:"90px"}} >{val.apps}</h4>
                    
                    <h4 style={{width:"90px"}} >{val.gps}</h4>
                    
                    <h4 style={{width:"90px"}} >{val.leave}</h4>
                    
                    <h4 style={{width:"90px"}} >{val.reports}</h4>
                    
                    <h4 style={{width:"90px"}} >{val.admin}</h4>
                  

                </div>
                    </>
                ))

                }
              </div>
            </div>

    </div></>
  )
}

export default Admin