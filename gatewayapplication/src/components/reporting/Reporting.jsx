import React from 'react'
import '../production/production.css'

const Reporting = ({applications}) => {
  return (
    
    <section className="production section container" id='reporting'>
    <h2 className="section_title">Reporting Applications</h2>
    <div class="card-container">
      {
        applications.map((item)=>{
          return(
        <div class="card">
            <div class="content">
              <div className="description">
                <img src={'http://127.0.0.1:8000/' + item.image} alt="reporting application" className="app_image" 
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

export default Reporting
