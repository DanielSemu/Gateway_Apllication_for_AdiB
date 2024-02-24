import React from 'react'
import '../production/production.css'
import oracle_analytics from '../../assets/Oracle-Analytics-Cloud-Updates.jpg'
import reports from '../../assets/reports.jpg'
import journal from '../../assets/journal.jpg'
const data=[
  {
    id:1,
    image:oracle_analytics,
    appname:"Oracle Analytics",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.20:9602/xmlpserver/login.jsp"
  },
  {
    id:2,
    image:reports,
    appname:"Daily Report",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.16:811/"
  },
  {
    id:3,
    image:journal,
    appname:"EJ FTP journal",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.10/"
  }
]
const Reporting = () => {
  return (
    
    <section className="pricing section container" id='reporting'>
      <h2 className="section_title">Reporting Applications</h2>
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

export default Reporting
