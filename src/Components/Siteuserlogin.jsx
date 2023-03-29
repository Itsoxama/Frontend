import React from 'react'
import { useState } from 'react'
import ss from '.././images/ss.png'
import axios from 'axios'
import { tz } from './apis'
import { useEffect } from 'react'
const Siteuserlogin = () => {
    const [email, setemail] = useState('')
    const [hidden, sethidden] = useState(true)
    const [pass, setpass] = useState('')
    const [showusers, setshowusers] = useState('users')
    useEffect(() => {
        var uu = localStorage.getItem('siteuserapi')
        var uu2 = localStorage.getItem('siteuserid')

        var utype = localStorage.getItem('siteusertype')
        if (uu && uu2 && uu2.length > 2 && uu === '^%$234' && utype === 'user') {

            window.location.pathname = 'siteuser'
        }
        else if (uu && uu2 && uu2.length > 2 && uu === '^%$234' && utype === 'supervisor') {

            window.location.pathname = 'supervisor'
        }
        else {
        }
        return () => {

        }
    }, [])

    function login(e) {
        e.preventDefault()
    alert('hy')
    }

    function login(e) {
        e.preventDefault()
        if (showusers === 'users') {
            axios.post(`${tz}/siteuser/login`, {
                email: email,
                password:pass,
            }).then((res) => {
                console.log(res)
                if (res.data === 'error') {
                    alert('Invalid Credentials')
                }
                else {
                        if (res.data.Siteuserd.length === 0) {
                            alert('User not found')
                        }
                        else {

                            localStorage.setItem('siteuserid', res.data.Siteuserd[0]._id)
                            localStorage.setItem('siteusername', res.data.Siteuserd[0].name)
                            localStorage.setItem('siteuserapi', '^%$234')

                            localStorage.setItem('siteusertype', 'user')
                            axios.post(`${tz}/siteuser/updatestatus`, {
                                login: 'yes',
                                _id: res.data.Siteuserd[0]._id
                            }).then((resa) => {

                                window.location.pathname = 'siteuser'
                            })

                        }
                 
                   
                }

            })
        }
        else {
            axios.post(`${tz}/super/findbyname`, {
                name: email,
            }).then((res) => {
                console.log(res)
                if (res.data === 'error') {
                    alert('Invalid Credentials')
                }
                else {
                    if (pass === '123456') {

                        if (res.data.Supervisor.length === 0) {
                            alert('Type Correct credentials')
                        }
                        else {

                            localStorage.setItem('siteuserid', res.data.Supervisor[0]._id)
                            localStorage.setItem('siteuserapi', '^%$234')
                            localStorage.setItem('siteusertype', 'supervisor')
                            window.location.pathname = 'supervisor'

                        }
                    }
                    else {
                        alert('Type Correct credentials')

                    }
                }

            })
        }

    }
    const [resetmail, setresetmail] = useState('')
    const [reset, setreset] = useState(false)
    const [steps, setsteps] = useState(0)
const [otp, setotp] = useState('')    
function  resetmail2() {
    setsending(<true></true>)
    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
setotp(`45${seq}`)
    axios.post(`${tz}/siteuser/reset`, {
        email: resetmail,
        otp:`45${seq}`

    }).then((res) => {
console.log(res)
if(res.data.Siteuserd==='emailok'){
    setsteps(1)
}
else{
    setsending(false)
    alert('Email is incorrect')
}

    })

    
    
}
function validateotp(){
    if(otp2===otp){
        setsteps(2)
    }
    else{
        alert("Otp is incorrect")
    }
}
const [npass, setnpass] = useState('')
function apipass() {
    axios.post(`${tz}/siteuser/pass`, {
        email: resetmail,
        password:npass

    }).then((res) => {
        console.log(res)
        alert('Password changed')
        window.location.reload()


    })
}
const [sending, setsending] = useState(false)
const [otp2, setotp2] = useState('')
    return (
        <div className="login">
        {!reset&&
            <form onSubmit={login} className="sublogin">
            <img src={ss} alt="" />
            <h1 >WELCOME</h1>
            <div className="inputname initname">
                <h1>User type</h1>
                <div className="subrad">
                    <input onClick={e => setshowusers('users')} checked={showusers === 'users'} type="radio" />
                    <p onClick={e => setshowusers('users')}>Site user</p>
                    <input onClick={e => setshowusers('supervisors')} checked={showusers === 'supervisors'} type="radio" />
                    <p onClick={e => setshowusers('supervisors')}>Site Supervisors</p>
                </div>
            </div>
            <h2>
                Email
            </h2>
            <input onChange={e => setemail(e.target.value)} type="text" />
            <h2>Password</h2>
            <input type={hidden ? "password" : "text"} onChange={e => setpass(e.target.value)} />
            <h3 onClick={e=>setreset(true)} >Reset Password</h3>
            <h2 style={{ cursor: 'pointer' }} onClick={e => hidden ? sethidden(false) : sethidden(true)}><input type="checkbox" checked={!hidden} /> Show password </h2>
            <button type='submit'>Login</button>

        </form>

        }
        {reset&&steps===0&&

              <div  className="sublogin">
            <img src={ss} alt="" />
            <h1 >Password Reset</h1>
            <div className="inputname initname">
                <h1>Enter your email to reset password</h1>
              
            </div>
            <h2>
                Email
            </h2>
            <input onChange={e => setresetmail(e.target.value)} type="text" />
            
            <h2 style={{ cursor: 'pointer' }} onClick={e => hidden ? sethidden(false) : sethidden(true)}>  </h2>
            <button onClick={e=>resetmail2()} >{!sending?"Next":"Sending..."}</button>

        </div>
        }

{reset&&steps===1&&

<div  className="sublogin">
<img src={ss} alt="" />
<h1 >Password Reset</h1>
<div className="inputname initname">
  <h1>Enter 6 digit otp that has been sent to {resetmail} </h1>

</div>
<h2>
  Enter OTP
</h2>
<input onChange={e => setotp2(e.target.value)} type="text" />

<h2 style={{ cursor: 'pointer' }} onClick={e => hidden ? sethidden(false) : sethidden(true)}>  </h2>
<button onClick={e=>validateotp()} >Next</button>

</div>
}

{reset&&steps===2&&

<div  className="sublogin">
<img src={ss} alt="" />
<h1 >Password Reset</h1>
<div className="inputname initname">
  <h1>Enter new password </h1>

</div>
<h2>
  New Password
</h2>
<input onChange={e => setnpass(e.target.value)} type="text" />

<h2 style={{ cursor: 'pointer' }} onClick={e => hidden ? sethidden(false) : sethidden(true)}>  </h2>
<button onClick={e=>apipass()}  >Submit</button>

</div>
}



        </div>
    )
}

export default Siteuserlogin