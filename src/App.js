
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import React from 'react';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import Emp from './Components/Employee/Emp';
import Login from './Login';
import Client from './Components/Client/Client';
import Wer from './Components/Client/Wer';
import ClientLogin from './Components/Clientlogin';
import Siteuser from './Components/Siteuser/Siteuser';
import Siteuserlogin from './Components/Siteuserlogin';
import Register from './Components/Register/Register';
import Supervisor from './Components/Siteuser/Supervisor';
function App() {
  const [footer, setfooter] = useState("footer")


  return (
    <>




<BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/user' element={<Emp />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/client' element={<Client />} />
          <Route exact path='/client-login' element={<ClientLogin />} />
          <Route exact path='/siteuser' element={<Siteuser />} />
          <Route exact path='/userlogin' element={<Siteuserlogin />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/supervisor' element={<Supervisor />} />

        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;
