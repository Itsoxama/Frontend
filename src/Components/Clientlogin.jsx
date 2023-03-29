import React from 'react'
import { useState } from 'react'
import ss from '.././images/ss.png'
import axios from 'axios'
import { tz } from './apis'
const ClientLogin = () => {
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    
    const [hidden, sethidden] = useState(true)
    function login(e) {
        e.preventDefault()
        axios.post(`${tz}/client/findbyname`,{
            name:email,
        }).then((res)=>{
            console.log(res)
            if(res.data==='error'){
                alert('Invalid Credentials')
            }
            else{
                if(pass==='123456'&&res.data.Client.length>0){
                    
                localStorage.setItem('companyname',email)
                
                localStorage.setItem('companyid',res.data.Client[0]._id)
                    window.location.pathname='/client'
                }
                else{
                    alert('Please type correct credentials')

                }
            }
          
        })
        
    }
  return (
    <div className="login">
        <form onSubmit={login} className="sublogin">
            <img src={ss} alt="" />
            <h1>WELCOME</h1>
            <h2>
                Company name
            </h2>
            <input onChange={e=>setemail(e.target.value)} type="text"  />
            <h2>Password</h2>
            <input   type={hidden?"password":"text"}  onChange={e=>setpass(e.target.value)} />
            
            <h2 style={{cursor:'pointer'}} onClick={e=>hidden?sethidden(false):sethidden(true)}><input type="checkbox" checked={!hidden}   /> Show password </h2>
<button type='submit' >Login</button>

        </form>
    </div>
  )
}

export default ClientLogin