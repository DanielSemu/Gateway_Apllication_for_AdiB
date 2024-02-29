import React from 'react'
import '../production/production.css'

const Others = ({applications}) => {
  return (
    <section className="pricing section container" id='others'>
    <h2 className="section_title">Others</h2>
    <div class="card-container">
    {
          applications.map((item)=>{
            return(
          <div class="card">
              <div class="content">
                <div className="description">
                  <img src={item.image} alt="" className="app_image" />
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
export default Others
