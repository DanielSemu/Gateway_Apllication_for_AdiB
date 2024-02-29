import React from 'react'
import './production.css'
import logo from '../../assets/logo1.png'
const Production = ({applications}) => {
  return (

    <section className="production section container" id='production'>
      <h2 className="section_title">Production Applications</h2>
      <div class="card-container">
        {
          applications.map((item)=>{
            return(
          <div class="card">
              <div class="content">
                <div className="description">
                  <img src={item.image} alt="" className="app_image" 
                  />
                  <h3 className="app_name">{item.app_name}</h3>
                  <p className="appdescription">{item.description}</p>
                  </div>
                  <div className='button'>
                  <a href={item.url} rel="noreferrer" className="btn" target='_blank'>Get Started</a>
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
