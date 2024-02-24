import React from 'react'
import './production.css'
import oracle from "../../assets/oracle.png"
import checkpoint from '../../assets/checkpoint.avif'
import omni from '../../assets/omni.png'
import mobilebanking from '../../assets/mobilebanking.jpg'
import digitalbanking from '../../assets/digitalbanking.jpg'
import kyc from '../../assets/kyc.jpg'
const data=[
  {
    id:1,
    image:oracle,
    appname:"Oracle FlexCube",
    description:"core banking application for cash and non chash transactions",
    address:"https://192.168.6.104:4102/FCJNeoWeb/LoginServlet"
  },
  {
    id:2,
    image:checkpoint,
    appname:"Checkpoint System(CTS).",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.23/login.aspx"
  },
  {
    id:3,
    image:omni,
    appname:"OMNI CBS",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.5:8080/omni/login.do"
  },
  {
    id:4,
    image:mobilebanking,
    appname:"Mobile Banking",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.204/ADIB_MOBILE_BANKING/backend/web/index.php?r=user-management%2Fauth%2Flogin"
  },
  {
    id:5,
    image:digitalbanking,
    appname:"Adib Digital Banking",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.204/adib_digital/"
  },
  {
    id:6,
    image:kyc,
    appname:"KYC System",
    description:"core banking application for cash and non chash transactions",
    address:"http://192.168.6.63/Account/Login?ReturnUrl=%2F"
  }
]
const Production = () => {
  return (

    <section className="production section container" id='production'>
      <h2 className="section_title">Production Applications</h2>
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

export default Production
