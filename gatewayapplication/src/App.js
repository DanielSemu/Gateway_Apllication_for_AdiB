
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Home from './components/homepage/Home';
import L_Sidebar from './components/leftsidebar/L_Sidebar';
import Production from './components/production/Production';
import Reporting from './components/reporting/Reporting';
import Communication from './components/communication/Communication';
import Others from './components/others/Others';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, useRef} from 'react';
function App() {
  let [apllications, setApllications]=useState([])
  const myRef = useRef(); 
try {
    useEffect(()=>{
        getApllications() 
    },[])
    
      let getApllications = async ()=>{
       let response = await fetch('http://127.0.0.1:8000/api/applications/')
       let data = await response.json()
       setApllications(data)
    }
    } catch (error) {
      
    }
    
    const production = apllications.filter(app => app.app_category === "Production");
    let reporting = apllications.filter(app => app.app_category === "Reporting");
    // reporting=[]
    const communication = apllications.filter(app => app.app_category === "Communication");
    const others = apllications.filter(app => app.app_category === "Others");
    return (
    <>
    {/* <Nav/>  */}
    <Navbar/>
    <L_Sidebar/>
    <main className='main'>
        <Routes>
        <Route
        path="/production1"
        element={production && production.length > 0 && <Production applications={production} />}
                    />
    {production && production.length > 0 && <Production applications={production} />}
    {reporting && reporting.length > 0 && <Reporting applications={reporting} />}
    {communication && communication.length > 0 && <Communication applications={communication} />}
    {others && others.length > 0 && <Others applications={others} />} 
    </Routes>
</main>

    </>
    
  );
}

export default App;
