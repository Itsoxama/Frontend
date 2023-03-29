import React, { useEffect } from 'react'
import { PieChart, Pie, Legend } from "recharts";
import { LineChart, Tooltip, Line, linearGradient, XAxis, CartesianGrid, Area, AreaChart, YAxis } from 'recharts'
import { MdOutlineDashboard, MdOutlineDateRange } from 'react-icons/md'
import as from '../../images/219983.png'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import axios from 'axios';
import ch from '../../images/ch.png'
import ws from '../../images/wh.png'
import e from '../../images/e.png'
import ppt from '../../images/ppt.png'
import a6 from '../../images/123/a2.png'
import a7 from '../../images/123/a4.png'
import a8 from '../../images/123/a3.png'
import a9 from '../../images/123/a7.png'
import a10 from '../../images/123/a10.png'
import { tz } from '../apis';
import { useState } from 'react';
const Dashboard = () => {
  const [data, setdata] = useState( [
    { name: "Group A", value: 30, fill: "#0C75F0"},
    { name: "Group B", value: 30, fill: "#78b7ff" },
    
    { name: "Group B", value: 30, fill: "rgb(132, 232, 177)" },
  ]);
  const data2 = [
    {
      "name": "Page A",
      "uv": 4000,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "amt": 2290
    },]
  var data3 = [
    {
      nam: "Usama",
      img: as,
      working: '8:51',
      productivitu: 71
    }, {
      nam: "Usama",
      img: as,
      working: '8:51',
      productivitu: 71
    }, {
      nam: "Usama",
      img: as,
      working: '8:51',
      productivitu: 71
    },
  ]
  const [latep, setlatep] = useState(0)
  const [presentp, setpresentp] = useState(0)
  const [leavep, setleavep] = useState(0)
  const [today, settoday] = useState()
  
  useEffect(() => {
    
  let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12:false
  },
  formatter = new Intl.DateTimeFormat([], options);

var t=formatter.format(new Date())
var r=t.split(', ')

var percemp=0;
var latepp=0
axios.get(`${tz}/user/getall`).then((res2)=>{
  
  axios.post(`${tz}/att/findcatt`,{
    date:r[0]
    
  }).then((res)=>{
    console.log(res)
    settoday(res.data.Attdata)
    res.data.Attdata.forEach((element,index) => {
      if(element.status==='present'){
        percemp=percemp+1
        console.log('hy')
        
      }
      else if(element.status==='leave'){
          latepp=latepp+1
       

      }
      if(index===res.data.Attdata.length-1){
        var percentpresent=(percemp/res2.data.User.length)*100
        var percentleave=(latepp/res2.data.User.length)*100
        var absentpercent=((res2.data.User.length-percemp-latepp)/res2.data.User.length)*100

        setpresentp(percentpresent)
        setlatep(absentpercent)
        setleavep(percentleave)


console.log(percentpresent)
console.log(latep)
       setdata( [
          { name: "Group A", value: percentpresent, fill: "rgb(121, 143, 251)" },
          { name: "Group B", value: absentpercent, fill: "rgb(248, 132, 96)" },
          
          { name: "Group B", value:percentleave , fill: "rgb(132, 232, 177)" },
        ]);
        
      }


      
    });

  })

})
    return () => {
      
    }
  }, [])
  
  
  return (
    <div className="dashboard2">
      <div className="top">
        <span className='name'><MdOutlineDashboard className='mdo' /> Dashboard</span>
        <div className="tdate">
          <MdOutlineDateRange className='mdo2' />
          Today
        </div>

      </div>
      <div className="secondtop">
        <div className="sc1">
          <div className="ta">

            <div className="lkj">
              <PieChart width={800} height={400} >

                <Pie
                  data={data}
                  cx={200}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {/* {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))} */}
                </Pie>
                {/* <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={0}
          endAngle={360}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          blendStroke
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> */}
              </PieChart>
            </div>
            <div className="attq">
              <div className="pres pres1">
                <p>Present</p>
                {presentp}%
              </div>
              <div className="pres pres2">
                <p>Absent</p>
                {latep}%
              </div>
              <div className="pres pres3">
                <p>Leave</p>
                {leavep}%
              </div>
            </div>
          </div>
          <div className="t3users">
            <h1><FaArrowUp className='far' /> Top 3 Users</h1>
            <div className="headrow">
              <p className='headrowp'>User</p>
              <p className='headrowc'>
                Working</p>
              <p className='headrowd'>productivity</p>
            </div>
            {
              data3.map(Val => (

                <>
                  <div className="spanrow">
                    <img src={as} className='as' alt="" />
                    <p className='headrowr'>{Val.nam}</p>
                    <p className='headrowc'>
                      {Val.working}</p>
                    <p className='headrowd'>{Val.productivitu}</p>
                  </div>
                </>
              ))
            }

          </div>
            <div className="t3users">
            <h1><FaArrowDown className='far2' /> Bottom 3 Users</h1>
            <div className="headrow">
              <p className='headrowp'>User</p>
              <p className='headrowc'>
                Working</p>
              <p className='headrowd'>productivity</p>
            </div>
            {
              data3.map(Val => (

                <>
                  <div className="spanrow">
                    <img src={as} className='as' alt="" />
                    <p className='headrowr'>{Val.nam}</p>
                    <p className='headrowc'>
                      {Val.working}</p>
                    <p className='headrowd'>
                      
                      {Val.productivitu}</p>
                  </div>
                </>
              ))
            }

          </div>

        </div>
        <div className="sc2">
          <div className="detail1">
            <LineChart width={730} height={250} data={data2}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis value='value' />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>


          </div>
         
          <div className="detail1">
          <h1>Latest Snapshots</h1>
          <div className="snaps">
            <img src={a6} alt="" />
            <img src={a8} alt="" />
            <img src={a9} alt="" />
            <img src={a10} alt="" />

          </div>

          </div>
          <div className="detail1">
            <h1>App Usage</h1>
            <div className="appo">
              <div className="app1">
                <img src={ws} alt="" />
                <div style={{width:'50%'}} className="colx1">

                </div>
                <p>50%</p>

              </div>
              <div className="app1">
                <img src={ch} alt="" />
                <div style={{width:'70%'}} className="colx2">

                </div>
                <p>70%</p>

              </div>
              <div className="app1">
                <img src={e} alt="" />
                <div style={{width:'60%'}} className="colx3">

                </div>
                <p>60%</p>

              </div>
              <div className="app1">
                <img src={ppt} alt="" />
                <div style={{width:'30%'}} className="colx4">

                </div>
                <p>30%</p>

              </div>
            </div>

          </div>
          <div className="detail1">
            <h1>Projects</h1>
            <div className="producheader">
                <span>
                    <div className="ricircle">
                        <div className="priconpar">
                            <RiLightbulbFlashLine className='pricon' />
                        </div>
                        <p className='sss'>44</p>
                    </div>
                    <h1>Total Projects</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon2">
                            <BiTime className='pricon ' />
                        </div>
                        <p>4</p>
                    </div>
                    <h1>Active Project</h1>

                </span>
                <span>
                    <div className="ricircle">
                        <div className="priconpar pricon3">
                            <MdSnooze className='pricon ' />
                        </div>
                        <p>42</p>
                    </div>
                    <h1>Completed Projects</h1>

                </span>
             

            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard