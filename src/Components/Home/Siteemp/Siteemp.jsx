import React, { useState } from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import axios from 'axios'
import { useEffect } from 'react'
import { tz } from '../../apis'

import { AiFillDelete } from 'react-icons/ai'
import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';
import * as file from 'file-saver'
const Siteemp = () => {

    const [adduser, setadduser] = useState('adduser2 fixedarea')
    const [i, seti] = useState(0)
    const [taxes, settaxes] = useState('taxes')
    const [circle, setcircle] = useState('circle')
    const [is, setis] = useState(0)


    const [taxes2, settaxes2] = useState('taxes')
    const [circle2, setcircle2] = useState('circle')
    const [is2, setis2] = useState(0)


    const [taxes3, settaxes3] = useState('taxes')
    const [circle3, setcircle3] = useState('circle')
    const [is3, setis3] = useState(0)



    const [data, setdata] = useState()

    const [itin, setitin] = useState('')
    const [address, setaddress] = useState('')
    const [status, setstatus] = useState('Active')
    const [phone, setphone] = useState('')
    const [client, setclient] = useState('')
    const [skildata, setskildata] = useState()
    const [supervisors, setsupervisors] = useState()
    useEffect(() => {
        axios.get(`${tz}/siteuser/getall`).then(res => {
            console.log(res)
            setdata(res.data.Siteuserd)
        })
        axios.get(`${tz}/super/getall`).then(res => {
            console.log(res)
            setsupervisors(res.data.Supervisor)
        })
        axios.get(`${tz}/skills/getall`).then(res => {
            console.log(res)
            setskildata(res.data.Skillsdata)
        })

        return () => {

        }
    }, [])

    var cstyl2 =
    {
        border: {
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
            sz: 10
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },
        numFmt: "$#,###.00"
    };
    const [email, setemail] = useState('')
    function req() {
        setids('')

        if (actiontype === 'update') {
            axios.post(`${tz}/siteuser/update`, {
                name: name,
                nc: nc,
                taxas: taxas,
                skill: skill,
                pr: pr,
                otpr: parseFloat(pr) + parseFloat(pr) / 2,
                jobn: jobn,
                phone: phone,
                address: address,
                itin: itin,
                status: status,
                client: client,
                _id: idb,
                idno: idno,
                email: email,
                password: password





            }).then(res => {
                axios.get(`${tz}/siteuser/getall`).then(res => {
                    console.log(res)
                    setdata(res.data.Siteuserd)
                    setadduser('adduser2')
                    setactiontype('edit')

                    setname('')
                    setclient('')
                    setskill('')
                    setpr('')
                    setaddress('')
                    setphone('')
                    setitin('')
                    setstatus('')
                    setidb('')
                    setnc('')
                    settaxas('')
                    setemail('')
                    setpassword('')
                })
            })
        }
        else {
            axios.post(`${tz}/siteuser/add`, {
                name: name,
                nc: nc,
                taxes: taxas,
                skill: skill,
                payrate: pr,
                otpayrate: parseFloat(pr) + parseFloat(pr) / 2,
                jobn: jobn,
                phone: phone,
                address: address,
                itin: itin,
                status: status,
                client: client,
                idno: idno,
                email:email,
              password:password


            }).then(res => {
                axios.get(`${tz}/siteuser/getall`).then(res => {
                    console.log(res)
                    setdata(res.data.Siteuserd)
                    setadduser('adduser2')
                })
            })


        }
    }
    const [sname, setsname] = useState('')
    const [sid, setsid] = useState('')
    const [supername, setsupername] = useState('')
    const [sstatus, setsstatus] = useState('')
    const [sadd, setsadd] = useState('')
    const [sphone, setsphone] = useState('')


    function reqx() {

        setids('')

        if (actiontype === 'update') {
            axios.post(`${tz}/super/update`, {
                name: supername,
                siteid: sid,
                sitename: sname,
                phone: sphone,
                address: sadd,
                status: sstatus,
                _id: csr


            }).then(res => {
                axios.get(`${tz}/super/getall`).then(res => {
                    console.log(res)
                    setsupervisors(res.data.Supervisor)
                    setadduser('adduser2')
                })
            })
        }
        else {
            axios.post(`${tz}/super/add`, {
                name: supername,
                siteid: sid,
                sitename: sname,
                phone: sphone,
                address: sadd,
                status: sstatus,


            }).then(res => {
                axios.get(`${tz}/super/getall`).then(res => {
                    console.log(res)
                    setsupervisors(res.data.Supervisor)
                    setadduser('adduser2')
                })
            })


        }
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
    function turnon3() {
        if (is3 === 0) {
            alert('active')
            setstatus('Active')

            setcircle3('circle2')
            settaxes3('taxes2')
            setis3(1)
        }
        else {

            alert('inactivecall')
            setcircle3('circle')
            settaxes3('taxes')
            setis3(0)

            setstatus('Inactive')
        }

    }

    const [name, setname] = useState('')
    const [skill, setskill] = useState('')
    const [jobn, setjobn] = useState('')
    const [nc, setnc] = useState('')
    const [taxas, settaxas] = useState('')
    const [pr, setpr] = useState('')
    const [otpr, setotpr] = useState('')
    const [ids, setids] = useState('')
    const [sites, setsites] = useState()
    function deleteuser() {
        if (showusers == 'users') {
            console.log(ids)
            var r = ids.split('4sd')
            r[r.length - 1] = r[r.length - 2]
            setdata()
            axios.post(`${tz}/siteuser/delete`, {
                ids: r



            }).then(res => {
                console.log(res)
                setids('')
                axios.get(`${tz}/siteuser/getall`).then(res2 => {
                    console.log(res2)
                    setdata(res2.data.Siteuserd)
                    setadduser('adduser2')
                    setids('')
                })
            })
        }
        else {
            console.log(ids)
            var r = ids.split('4sd')
            r[r.length - 1] = r[r.length - 2]
            setsupervisors()
            axios.post(`${tz}/super/deletedata`, {
                ids: r



            }).then(res => {
                console.log(res)
                setids('')
                axios.get(`${tz}/super/getall`).then(res2 => {
                    console.log(res2)
                    setsupervisors(res2.data.Supervisor)
                    setadduser('adduser2')
                    setids('')
                })
            })
        }

    }
    const [actiontype, setactiontype] = useState('edit')
    const [clients, setclients] = useState()
    useEffect(() => {
        axios.get(`${tz}/client/getall`).then(res => {
            console.log(res)
            setclients(res.data.Client)
        })
        axios.get(`${tz}/jobsite/getall`).then(res => {
            console.log(res)
            setsites(res.data.Jobsite)
        })

        return () => {

        }
    }, [])
    const [csr, setcsr] = useState('')
    function updateuser() {
        if (showusers === 'users') {
            setactiontype('update')
            setadduser('adduser fixedarea')
            var idx = ids.split('4sd')
            data.forEach(val => {
                if (val._id === idx[0]) {
                    setname(val.name)
                    setidno(val.idno)
                    setclient(val.client)
                    setskill(val.skill)
                    setpr(val.payrate)
                    setaddress(val.address)
                    setphone(val.phone)
                    setitin(val.itin)
                    setstatus(val.status)
                    setidb(val._id)
                    setnc(val.nc)
                    settaxas(val.taxes)
                    setemail(val.email)
                    setpassword(val.password)
                    if (val.nc === '4') {
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
                    if (val.taxes === 'yes') {
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

            });
        }
        else {
            setactiontype('update')
            setadduser('adduser fixedarea')
            setusertype('supervisor')
            var idx = ids.split('4sd')
            supervisors.forEach(val => {
                if (val._id === idx[0]) {
                    setsupername(val.name)
                    setsname(val.sitename)
                    setsid(val.siteid)
                    setsadd(val.address)
                    setsphone(val.phone)
                    setsstatus(val.status)
                    setcsr(val._id)


                }

            });
        }


    }
    var styl1 =
    {
        border: {
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
            sz: 10
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
    var styl2 =
    {
        border: {
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
            sz: 10
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },
    };
    const [prdata, setprdata] = useState([])

    const [arr, setarr] = useState([])
    function prepare() {
        setarr([])
        data.forEach((val, index) => {

            console.log(arr)
            if (ids.search(val._id) >= 0) {
                setarr(arrr => [...arrr, {
                    name: val.name,
                    nc: val.nc,
                    taxes: val.taxes,
                    skill: val.skill,
                    payrate: val.payrate,
                    otpayrate: val.otpayrate,
                    phone: val.phone,
                    address: val.address,
                    itin: val.itin,
                    status: val.status,
                    client: val.client

                }])
            }

        })
        alert('Report prepared please generate...')

    }

    function exports() {

        console.log(arr)
        const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        var ext = '.xlsx'


        const myHeader = ["name", "client", "skill", 'address', 'phone', 'payrate', 'otpayrate', 'nc', 'taxes', 'itin', 'status'];

        const ws = XLSX.utils.json_to_sheet(arr, { header: myHeader })

        var wscols = [
            { wch: 15 },
            { wch: 25 },
            { wch: 20 },
            { wch: 20 },
            { wch: 15 },
            { wch: 7 },
            { wch: 8 },
            { wch: 10 },
            { wch: 7 },
            { wch: 8 },
            { wch: 12 },
        ];
        for (var k = 0; k < arr.length + 1; k++) {
            if (k === 0) {

                ws[`B${k + 1}`].s = styl1
                ws[`A${k + 1}`].s = styl1
                ws[`C${k + 1}`].s = styl1
                ws[`D${k + 1}`].s = styl1
                ws[`E${k + 1}`].s = styl1
                ws[`F${k + 1}`].s = styl1
                ws[`G${k + 1}`].s = styl1
                ws[`H${k + 1}`].s = styl1
                ws[`I${k + 1}`].s = styl1
                ws[`J${k + 1}`].s = styl1
                ws[`K${k + 1}`].s = styl1
            }
            else {

                ws[`B${k + 1}`].s = styl2
                ws[`A${k + 1}`].s = styl2
                ws[`C${k + 1}`].s = styl2
                ws[`D${k + 1}`].s = styl2
                ws[`E${k + 1}`].s = styl2
                ws[`F${k + 1}`].s = cstyl2
                ws[`G${k + 1}`].s = styl2
                ws[`H${k + 1}`].s = cstyl2
                ws[`I${k + 1}`].s = styl2
                ws[`J${k + 1}`].s = styl2
                ws[`K${k + 1}`].s = styl2

            }
        }




        ws['!cols'] = wscols;
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelbuffer = XLSX.write(wb, { booktype: 'xlsx', type: 'array' })
        const dar = new Blob([excelbuffer], { type: filetype })
        file.saveAs(dar, 'asd.xlsx',)
        setarr([])



    }
    const [password, setpassword] = useState('')
    const [idb, setidb] = useState('')
    function closewin() {
        setadduser('adduser2')
        setactiontype('edit')

    }
    const [o, seto] = useState(0)
    function addskills() {
        axios.post(`${tz}/skills/add`, {
            name: skillname,



        }).then(res => {
            axios.get(`${tz}/skills/getall`).then(res => {
                setskildata(res.data.Skillsdata)
            })
        })

    }
    function setshowusersx(val) {
        if (val === 'users') {
            setshowusers(val)
            setusertype('user')
            setids('')
        }
        else {
            setusertype('supervisor')
            setshowusers(val)
            setids('')
        }
    }

    const [filter, setfilter] = useState('name')
    const [searchval, setsearchval] = useState('')
    function fillall() {
        console.log(ids)
        if (o === 0) {
            setarr([])
            seto(1)
            setids('')
            data&&data.forEach(elem => {
                setids(ids => ids + elem._id + '4sd')
                setarr(arrr => [...arrr, {
                    name: elem.name,
                    nc: elem.nc,
                    taxes: elem.taxes,
                    skill: elem.skill,
                    payrate: elem.payrate,
                    otpayrate: elem.otpayrate,
                    phone: elem.phone,
                    address: elem.address,
                    itin: elem.itin,
                    status: elem.status,
                    client: elem.client,
                    email:elem.email,
                    password:elem.password

                }])
            });
        }
        else {
            setarr([])
            setids('')
            seto(0)

        }

    }
    function generateid() {
        var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

        setidno('CF' + seq)


    }
    function clientx(val) {
        var t = val.split('xcv4')
        setsid(t[1])
        setsname(t[0])

    }
    const [idno, setidno] = useState('')
    const [aduser, setaduser] = useState('adduser2')
    const [skillname, setskillname] = useState('')
    function deleteskill(val) {
        axios.post(`${tz}/skills/delete`, {
            id: val,



        }).then(res => {
            axios.get(`${tz}/skills/getall`).then(res => {
                setskildata(res.data.Skillsdata)
            })
        })
    }
    const [showusers, setshowusers] = useState('users')
    function openskil() {
        setaduser('adduser')
    }
    const [usertype, setusertype] = useState('user')

    return (
        <>
            {i === 0 &&
                <>
                    <div className={aduser}>
                        <div className="subadduser">
                            <div className="addskill">

                                <div className="inputname">
                                    <input onChange={e => setskillname(e.target.value)} type="text" />

                                </div>
                                <button className='man' onClick={e => addskills()}>
                                    Add Skill
                                </button>

                                <button className='manb man' onClick={e => setaduser('adduser2')}>
                                    Cancel
                                </button>



                            </div>
                            <div className="ptabled">
                                <div className="tabled">
                                    <div className="headerd">
                                        Skills

                                    </div>
                                    <div className="headerr">
                                        {skildata && skildata.map((val) => (
                                            <h1>{val.name} <AiFillDelete onClick={e => deleteskill(val._id)} className='deletebin' /> </h1>
                                        ))

                                        }
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={adduser}>
                        <div className="subadduser">
                            {/*      <div className="inputname">
                    <h1>User type</h1>
                  <div  className="subrad">
                  <input onClick={e=>setusertype('user')}  checked={usertype==='user'}  type="radio" />
<p onClick={e=>setusertype('user')}>Site user</p>
<input onClick={e=>setusertype('supervisor')}  checked={usertype==='supervisor'}  type="radio" />
<p onClick={e=>setusertype('supervisor')}>Site Supervisor</p>
                  </div>
                </div>
    */}

                            {usertype === 'user' &&
                                <>
                                    <div className="inputname">
                                        <h1>Name</h1>
                                        <input value={name} onBlur={e => generateid()} onChange={e => setname(e.target.value)} type="text" />

                                    </div>

                                    <div className="inputname">
                                        <h1>Id no.</h1>
                                        <input value={idno} type="text" />

                                    </div>
                                    <div className="inputname">
                                        <h1>Email</h1>
                                        <input value={email} type="text" onChange={e => setemail(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>Password</h1>
                                        <input value={password} type="text" onChange={e => setpassword(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>Company</h1>



                                        {
                                            actiontype === 'update' ?

                                                <select name="cars" id="cars" value={client} onChange={e => setclient(e.target.value)}>
                                                    <>
                                                        <option value={client}>{client}</option>
                                                        {
                                                            clients && clients.map(val => (
                                                                val.username !== client &&
                                                                <option value={val.username}>{val.username}</option>
                                                            ))
                                                        }
                                                    </>
                                                </select>
                                                :

                                                <select name="cars" id="cars" value={client} onChange={e => setclient(e.target.value)}>

                                                    {
                                                        clients && clients.map(val => (

                                                            <option value={val.username}>{val.username}</option>
                                                        ))
                                                    }
                                                </select>
                                        }



                                    </div>
                                    <div className="inputname">
                                        <h1>Skill</h1>

                                        <select name="cars" id="cars" value={skill} onChange={e => setskill(e.target.value)}>

                                            {
                                                skildata && skildata.map(val => (
                                                    <>

                                                        <option value={val.name}>{val.name}</option>
                                                    </>
                                                ))
                                            }
                                        </select>



                                    </div> <div className="inputname">
                                        <h1>Status</h1>

                                        <select name="cars" id="cars" value={status} onChange={e => setstatus(e.target.value)}>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>



                                    </div>
                                    <div className="inputname">
                                        <h1>Pay rate (per/hr)</h1>
                                        <input value={pr} type="number" onChange={e => setpr(e.target.value)} />

                                    </div>

                                    <div className="inputname">
                                        <h1>OT Pay rate (per/hr)</h1>
                                        <input value={pr && parseFloat(pr) + parseFloat(pr) / 2} type="number" onChange={e => setotpr(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>Address</h1>
                                        <input value={address} type="text" onChange={e => setaddress(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>Phone:</h1>
                                        <input value={phone} type="text" onChange={e => setphone(e.target.value)} />

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

                                    <div className="inputname"></div>
                                    
                                    <div className="inputname"></div>
                                    <button onClick={e => req()} className='btn1'>Submit</button>
                                    <button onClick={e => closewin()} className='btn2'>Cancel</button>

                                </>

                            }

                            {usertype === 'supervisor' &&
                                <>
                                    <div className="inputname">
                                        <h1>Name</h1>
                                        <input value={supername} onChange={e => setsupername(e.target.value)} type="text" />

                                    </div>


                                    <div className="inputname">
                                        <h1>Jobsite</h1>




                                        <select name="cars" id="cars" onChange={e => clientx(e.target.value)}>

                                            <option value=''>Choose jobsite</option>
                                            {
                                                sites && sites.map(val => (
                                                    <option value={val.sitename + 'xcv4' + val._id}>{val.sitename}</option>
                                                ))
                                            }
                                        </select>



                                    </div>
                                    <div className="inputname">
                                        <h1>Status</h1>

                                        <select name="cars" id="cars" value={sstatus} onChange={e => setsstatus(e.target.value)}>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>



                                    </div>

                                    <div className="inputname">
                                        <h1>Address</h1>
                                        <input value={sadd} type="text" onChange={e => setsadd(e.target.value)} />

                                    </div>
                                    <div className="inputname">
                                        <h1>Phone:</h1>
                                        <input value={sphone} type="text" onChange={e => setsphone(e.target.value)} />

                                    </div>

                                    <div className="inputname"></div>
                                    <div className="inputname"></div>
                                    <button onClick={e => reqx()} className='btn1'>Submit</button>
                                    <button onClick={e => closewin()} className='btn2'>Cancel</button>

                                </>

                            }



                        </div>

                    </div>
                </>

            }
            <div className="sitemap">
                <div className="temphead tempheadstaff">

                </div>
                <div className=" fixedheader varyheight whitebg prodiheader">

                    <GiEnergyArrow className='ene' />
                    <h1>Site Staff</h1>

                    <h6 className="searchengine2">


                        <>
                            <input onChange={e => setsearchval(e.target.value)} type="text" placeholder='Search here...' />

                            <select className='apply' name="cars" id="cars" onChange={e => setfilter(e.target.value)}>
                                <option >Filters</option>
                                <option value="name">Name</option>
                                <option value="skill">Skill</option>
                            </select>
                        </>



                    </h6>
                    <div className="endbuttons" >
                        {ids && ids.split('4sd').length <= 2 &&

                            <button className='addemp  addemp2' onClick={e => updateuser()} >Update</button>

                        }

                        <button className='addemp addemp3' onClick={e => deleteuser()} >Delete</button>
                    </div>




                </div>

                <div className="hhx hhx2">

                    <button className='addemp' onClick={e => setadduser('adduser fixedarea')} >+ Add Staff</button>

                    <button className='addemp' onClick={e => exports()} >Generate Report</button>
                    <button className='addemp' onClick={e => prepare()} >Prepare Report</button>
                    <button className='addemp' onClick={e => openskil()} >+ Add Skills</button>

                </div>
                <div className="inputname">
                    <h1>User type</h1>
                    <div className="subrad">
                        <input onClick={e => setshowusersx('users')} checked={showusers === 'users'} type="radio" />
                        <p onClick={e => setshowusersx('users')}>Site user</p>
                        <input onClick={e => setshowusersx('supervisors')} checked={showusers === 'supervisors'} type="radio" />
                        <p onClick={e => setshowusersx('supervisors')}>Site Supervisors</p>
                    </div>
                </div>


                {showusers === 'users' &&

                    <div className="tablerow">
                        <div className="subtable">
                            <div className="headertable clop">
                                <span className='sxx'><input type="checkbox" checked={o === 1} onClick={e => fillall()} /> </span>

                                <h4 style={{ width: "80px" }}>No.</h4>


                                <h2 style={{ paddingLeft: '5px' }}>Staff</h2>
                                <h1>Address</h1>

                                <h6>Skill</h6>

                                <h6>Company</h6>
                                <h3 style={{ width: "70px" }}>Taxes</h3>
                                <h4 style={{ width: "70px" }}>Pay rate</h4>
                                <h5 style={{ width: "100px" }}>OT Pay rate</h5>


                                <h4 style={{ width: "70px" }}>Status</h4>
                                <h6>Phone</h6>
                                <h6>Email</h6>
                                <h6>Password</h6>
                                <h5 style={{ width: "70px" }}>NC(%)</h5>


                            </div>
                            {searchval.length > 0 && filter === 'name' && data && data.map(val => (
                                val.name.toLowerCase().search(searchval.toLowerCase()) >= 0 &&
                                <>
                                    <div className="headertable">
                                        <span className='sxx'> <input type="checkbox" checked={ids.search(val._id) >= 0} onClick={e => ids.search(val._id) >= 0 ? setids(ids.replace(val._id + '4sd', '')) : setids(ids + val._id + '4sd')} /> </span>

                                        <h4 style={{ width: "80px" }}>{val.idno}</h4>
                                        {ids.search(val._id) >= 0 ?


                                            <h2 className='blackmark' style={{ marginLeft: '5px' }}>{val.name}</h2>
                                            :

                                            <h2 style={{ marginLeft: '5px' }}>{val.name}</h2>

                                        }
                                        <h1> {val.address}</h1>

                                        <h6 ><div className="tinvoice">{val.skill}</div></h6>

                                        <h6>{val.client}</h6>
                                        <h3 style={{ width: "70px" }} >{val.taxes}</h3>
                                        <h4 style={{ width: "70px" }} >{val.payrate}</h4>
                                        <h5 style={{ width: "100px" }} >{val.otpayrate}</h5>

                                        <h4 style={{ width: "70px" }}>{val.status}</h4>
                                        <h6>{val.phone}</h6>
                                        <h6>{val.email}</h6>
                                        <h6>{val.password}</h6>
                                        {
                                            val.nc !== 'no' ?

                                                <h5 style={{ width: "70px" }}>{val.nc}%</h5>
                                                :

                                                <h5 style={{ width: "70px" }}>NO</h5>
                                        }


                                    </div>
                                </>
                            ))

                            }
                            {searchval.length > 0 && filter === 'skill' && data && data.map(val => (
                                val.skill.toLowerCase().search(searchval.toLowerCase()) >= 0 &&
                                <>
                                    <div className="headertable">
                                        <span className='sxx'> <input type="checkbox" checked={ids.search(val._id) >= 0} onClick={e => ids.search(val._id) >= 0 ? setids(ids.replace(val._id + '4sd', '')) : setids(ids + val._id + '4sd')} /> </span>

                                        <h4 style={{ width: "80px" }}>{val.idno}</h4>
                                        {ids.search(val._id) >= 0 ?


                                            <h2 className='blackmark' style={{ marginLeft: '5px' }}>{val.name}</h2>
                                            :

                                            <h2 style={{ marginLeft: '5px' }}>{val.name}</h2>

                                        }
                                        <h1> {val.address}</h1>

                                        <h6 ><div className="tinvoice">{val.skill}</div></h6>

                                        <h6>{val.client}</h6>
                                        <h3 style={{ width: "70px" }} >{val.taxes}</h3>
                                        <h4 style={{ width: "70px" }} >{val.payrate}</h4>
                                        <h5 style={{ width: "100px" }} >{val.otpayrate}</h5>

                                        <h4 style={{ width: "70px" }}>{val.status}</h4>
                                        <h6>{val.phone}</h6>
                                        <h6>{val.email}</h6>
                                        <h6>{val.password}</h6>
                                        {
                                            val.nc !== 'no' ?

                                                <h5 style={{ width: "70px" }}>{val.nc}%</h5>
                                                :

                                                <h5 style={{ width: "70px" }}>NO</h5>
                                        }


                                    </div>
                                </>
                            ))

                            }
                            {searchval.length === 0 && data && data.map(val => (

                                <>
                                    <div className="headertable">
                                        <span className='sxx'> <input type="checkbox" checked={ids.search(val._id) >= 0} onClick={e => ids.search(val._id) >= 0 ? setids(ids.replace(val._id + '4sd', '')) : setids(ids + val._id + '4sd')} /> </span>

                                        <h4 style={{ width: "80px" }}>{val.idno}</h4>
                                        {ids.search(val._id) >= 0 ?


                                            <h2 className='blackmark' style={{ marginLeft: '5px' }}>{val.name}</h2>
                                            :

                                            <h2 style={{ marginLeft: '5px' }}>{val.name}</h2>

                                        }
                                        <h1> {val.address}</h1>

                                        <h6 ><div className="tinvoice">{val.skill}</div></h6>

                                        <h6>{val.client}</h6>
                                        <h3 style={{ width: "70px" }} >{val.taxes}</h3>
                                        <h4 style={{ width: "70px" }} >{val.payrate}</h4>
                                        <h5 style={{ width: "100px" }} >{val.otpayrate}</h5>

                                        <h4 style={{ width: "70px" }}>{val.status}</h4>
                                        <h6>{val.phone}</h6>
                                        <h6>{val.email}</h6>
                                        <h6>{val.password}</h6>
                                        {
                                            val.nc !== 'no' ?

                                                <h5 style={{ width: "70px" }}>{val.nc}%</h5>
                                                :

                                                <h5 style={{ width: "70px" }}>NO</h5>
                                        }


                                    </div>
                                </>
                            ))

                            }
                        </div>
                    </div>

                }
                {showusers === 'supervisors' &&

                    <div className="tablerow">
                        <div className="subtable">
                            <div className="headertable clop">
                                <span className='sxx'><input type="checkbox" checked={o === 1} onClick={e => fillall()} /> </span>

                                <h4 style={{ width: "40px" }}>No.</h4>


                                <h2 style={{ paddingLeft: '5px' }}>Name</h2>
                                <h1>Jobsite</h1>

                                <h6>Adress</h6>

                                <h6>Phone</h6>
                                <h3 style={{ width: "70px" }}>Status</h3>


                            </div>
                            {supervisors && supervisors.map((val, index) => (
                                <>
                                    <div className="headertable">
                                        <span className='sxx'> <input type="checkbox" checked={ids.search(val._id) >= 0} onClick={e => ids.search(val._id) >= 0 ? setids(ids.replace(val._id + '4sd', '')) : setids(ids + val._id + '4sd')} /> </span>

                                        <h4 style={{ width: "40px" }}>{index + 1}</h4>
                                        <h2 style={{ marginLeft: '5px' }}>{val.name}</h2>
                                        <h1> {val.sitename}</h1>

                                        <h6 >{val.address}</h6>

                                        <h6>{val.phone}</h6>
                                        <h3 style={{ width: "70px" }} >{val.status}</h3>



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

export default Siteemp