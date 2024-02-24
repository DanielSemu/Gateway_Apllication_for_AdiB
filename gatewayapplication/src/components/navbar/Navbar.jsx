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
                <button href="#" className="btn">Login</button>
        </div>
    </nav>
   
 
  )
}

export default Navbar
