import React, { useState } from 'react'
import Siteemp from '../Siteemp/Siteemp'
import Userdata from '../Userdata/Userdata'

const Emp = () => {
const [i, seti] = useState(0)

  return (
    <>
    {i===1&&
        <Userdata />

        }
        {i===2&&
        <Siteemp />

        }
    {i===0&&
<div className="empt">
    
        <>
        <div className="emp1" onClick={e=>seti(2)}>
            <p>Onsite <br /> Staff</p>

        </div>
        <div className="emp2" onClick={e=>seti(1)}>
<p>Office <br /> Monitor</p>
        </div>
        </>

       
        
        
            </div> }
    </>


  )
}

export default Emp