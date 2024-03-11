import React, {useState, useEffect} from 'react'
import './adminPage.css'
const AdminPage = () => {
    let [apllications, setApllications]=useState([])
 
    try {
        useEffect(()=>{
            getApllications() 
        },[])
        
          let getApllications = async ()=>{
           let response = await fetch('http://127.0.0.1:8000/api/applications/')
           let data = await response.json()
           setApllications(data)
        }
        } catch (error) {
          
        }
  return (
    <div className='admin_page section container'>
    <div className="head">
        <h1>Wellcome to Admin Page</h1>
        <button className='btn add_new'>New Application</button>
    </div>
      
      <table>
      <thead>
        <tr>
          <th>Application Name</th>
          <th>Application Category</th>
          <th>Application URL</th>
          <th>Application Image</th>
          <th>Application Description</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {apllications.map((item) => (
          <tr key={item.id}>
            <td>{item.app_name}</td>
            <td>{item.app_category}</td>
            <td><a href={item.url} target='_blank'>Application Address</a></td>
            <td><a href={`http://127.0.0.1:8000/${item.image}`} target='_blank'>{item.app_name} Image</a></td>
            <td>{item.description}</td>
            <td className='operation'><button className='btn edit'>Edit</button>
            <button className='btn delete'>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default AdminPage
