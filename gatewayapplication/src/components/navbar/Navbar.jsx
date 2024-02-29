import React from 'react'
import logo1 from "../../assets/logo1.png"
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo1} alt="" />
        </div>
        <div className="name">
                <h1>Addis International Bank S.c</h1>
        </div>
        <div className="login">
              <a href="http://127.0.0.1:8000/admin/login/?next=/admin/" className="btn">Login</a>
        </div>
    </nav>
   
 
  )
}

export default Navbar
