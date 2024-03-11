import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import L_Sidebar from './components/leftsidebar/L_Sidebar';
import { Route, Routes } from 'react-router-dom';
import Applications from './pages/applications/Applications';
import Admin from './pages/admin/Admin';



function App() {

    return (
      <>
      {/* <Nav/>  */}
      <Navbar/>
      
      
      <Routes>
          <Route path="/" element={<Applications/>}
          
          />
          <Route path="/dashboard" element={<Admin/>} />
          {/* <Route path="/dashboard" component={yy} /> */}
          {/* other routes */}
        </Routes>
    </>
    
    
  );
}

export default App;
