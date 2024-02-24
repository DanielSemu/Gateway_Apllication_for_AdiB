import React from 'react'
import '../production/production.css'
import contact from '../../assets/contact.png'
import AD from '../../assets/AD.jpg'
import RMS from '../../assets/RMS.jpg'
import webmail from '../../assets/webmail.png'

const data=[
  {
    id:1,
    image:AD,
    appname:"Adib AD Manager",
    description:"core banking application for cash and non chash transactions",
    address:"https://192.168.6.7:8383/"
  },
  {
    id:2,
    image:contact,
    appname:"Contact Directory",
    description:"core banking application for cash and non chash transactions",
    address:"http://contact.addisbanksc.local:4060/contact/"
  },
  {
    id:3,
    image:RMS,
    appname:"980 RMS",
    description:"core banking application for cash and non chash transactions",
    address:"http://980.addisbanksc.local:4060/980/"
  },
  {
    id:4,
    image:webmail,
    appname:"Adib Webmail",
    description:"core banking application for cash and non chash transactions",
    address:"https://addisbanksc.com:2096/cpsess5571465349/webmail/"
  }

]
const Communication = () => {
  return (
    <section className="pricing section container" id='communication'>
      <h2 className="section_title">Communication Applications</h2>
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

export default Communication
