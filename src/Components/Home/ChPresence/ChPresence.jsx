import React, { useState } from 'react'
import Presence from '../Presence/Presence'

import Userdata from '../Userdata/Userdata'
import Sitepresence from './Sitepresence'

const ChPresence = () => {
const [i, seti] = useState(0)

  return (
    <>
    {i===1&&
        <Presence />

        }
        {i===2&&
        <Sitepresence />

        }
    {i===0&&
<div className="empt">
    
        <>
        <div className="emp1" onClick={e=>seti(2)}>
            <p>Onsite <br /> Presence</p>

        </div>
        <div className="emp2" onClick={e=>seti(1)}>
<p>Online <br /> Presence</p>
        </div>
        </>

       
        
        
            </div> }
    </>


  )
}

export default ChPresence