import React from 'react'
import { Link } from 'react-router-dom';
import './lsidebar.css'
const L_Sidebar = () => {
  return (
    <aside className='aside'>
    <nav className="nav">
      <div className="nav_menu">
      <a href="#home" className="nav_logo">
        Application
      Categories
     </a>
     <hr/>
     <br/>
        <ul className="nav_list">
          <li className="nav_item">
            
            <Link to="/production1" className="nav_link">
                        Production
            </Link>
          </li>
          <li className="nav_item">
            <a href="#reporting" className="nav_link">
                Reporting
            </a>
          </li>
          <li className="nav_item">
            <a href="#communication" className="nav_link">
            Communication
            </a>
          </li>
          <li className="nav_item">
            <a href="#others" className="nav_link">
            Other
            </a>
          </li>
        </ul>
      </div>
    </nav>
</aside>
  )
}

export default L_Sidebar
