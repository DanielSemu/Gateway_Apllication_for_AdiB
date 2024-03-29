import React, { useState, useEffect, } from 'react';
import Production from '../../components/production/Production';
import Reporting from '../../components/reporting/Reporting';
import Communication from '../../components/communication/Communication';
import Others from '../../components/others/Others';
import L_Sidebar from '../../components/leftsidebar/L_Sidebar';

const Applications = () => {
    let [apllications, setApllications]=useState([])
 
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
        <L_Sidebar/>
       <main className='main'>
        
        {production && production.length > 0 && <Production applications={production} />}
        {reporting && reporting.length > 0 && <Reporting applications={reporting} />}
        {communication && communication.length > 0 && <Communication applications={communication} />}
        {others && others.length > 0 && <Others applications={others} />} 
      </main>
    </>
  )
}

export default Applications
