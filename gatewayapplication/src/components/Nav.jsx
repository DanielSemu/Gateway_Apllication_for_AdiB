import React from 'react'
import './Nav.css'
import logo1 from '../assets/logo1.png'
const Nav = () => {
  return (
    <>
      <nav class="menu" tabindex="0">
	<div class="smartphone-menu-trigger"></div>
  <header class="avatar">
		<img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" />
    <h2>John D.</h2>
  </header>
	<ul>
    <li tabindex="0" class="icon-dashboard"><span>Dashboard</span></li>
    <li tabindex="0" class="icon-customers"><span>Customers</span></li>
    <li tabindex="0" class="icon-users"><span>Users</span></li>
    <li tabindex="0" class="icon-settings"><span>Settings</span></li>
  </ul>
</nav>
<nav className='navbar'>
        <div className="logo_container">
            <div className="logo">
                <img src={logo1} alt="" />
            </div>
            <div className="name">
                <h1>Addis International Bank S.c</h1>
            </div>
        </div>
        <div className="logo_title">
            <div className="login">
                <a href="" className="btn">Login</a>
            </div>
        </div>
    </nav>
<main>
  <div class="helper">
    RESIZE THE WINDOW
		<span>Breakpoints on 900px and 400px</span>
  </div>
</main>
    </>
  )
}

export default Nav
