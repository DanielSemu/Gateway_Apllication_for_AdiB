import React from 'react'
import '../production/production.css'

const Communication = ({applications}) => {
  return (
    <section className="production section container" id='communication'>
    <h2 className="section_title">Communication Applications</h2>
    <div className="card-container">
      {
        applications.map((item)=>{
          return(
        <div key={item.id} className="card">
            <div className="content">
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

export default Communication
