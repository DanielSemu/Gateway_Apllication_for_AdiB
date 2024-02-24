import React from 'react'
import '../production/production.css'
import documentauthorization from '../../assets/documentauthorization.png'
import CRB from '../../assets/CRB.png'
import networkmonitor from '../../assets/networkmonitor.png'
import DMS from '../../assets/DMS.png'
import employeeID from '../../assets/employeeID.png'
import PSSA from '../../assets/PSSSA.jpg'
const data=[
  {
    id:1,
    image:documentauthorization,
    appname:"Document Authorization",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.81.100/Account/Login"
  },
  {
    id:2,
    image:CRB,
    appname:"CRB",
    description:"core banking application for cash and non chash transactions",
    address:"https://10.5.3.100/"
  },
  {
    id:3,
    image:networkmonitor,
    appname:"Networking Monitor",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.200.100:8787/Orion/Login.aspx?ReturnUrl=%2f"
  },
  {
    id:4,
    image:DMS,
    appname:"Adib DMS System",
    description:"core banking application for cash and non chash transactions",
    address:"http://dms.addisbanksc.local:4060/dms/faces/AllPages/loginPage.xhtml"
  },
  {
    id:5,
    image:employeeID,
    appname:"Employe ID Issue System",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.16:108/"
  },
  {
    id:6,
    image:PSSA,
    appname:"PSSSA Specimen Signature",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.16:97/"
  }
]
const Others = () => {
  return (
    <section className="pricing section container" id='others'>
    <h2 className="section_title">Others</h2>
    <div class="card-container">
        {
          data.map((item)=>{
            return(
          <div class="card">
              <div class="content">
                <div className="description">
                  <img src={item.image} alt="" className="app_image" />
                  <h3 className="app_name">{item.appname}</h3>
                  <p className="appdescription">{item.description}</p>
                  </div>
                  <div className='button'>
                  <a href={item.address} rel="noreferrer" className="btn" target='_blank'>Get Started</a>
                  </div>
              </div>
          </div>
            )
          })
        }
      </div>
  </section>   

  )
}
export default Others
