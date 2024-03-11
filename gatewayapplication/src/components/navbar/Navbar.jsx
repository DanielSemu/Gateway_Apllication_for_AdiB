import React, {useState} from 'react'
import logo1 from "../../assets/logo1.png"
import './navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setLoggin] = useState(false)
  // const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setShowPopup(true);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
    setUsername('');
    setPassword('');
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
        username: username,
        password: password
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            setLoggin(true)
            console.log('Login successful');
            navigate('/dashboard');
            // alert('Login successful');
            
            // Handle successful login, e.g., redirect to a new page
        } else {
          console.log('Login Failed');
          alert("Login Failed, Password or username is Incorrect")
         
        }
        
    } catch (error) {
        console.error('Error updating note:', error);
    }
    setShowPopup(false);
    setUsername('');
    setPassword('');
};
const handlelogout=()=>{
  setLoggin(false)
  navigate('/');
}

  

  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo1} alt="" />
        </div>
        <div className="name">
                <h1>Addis International Bank S.c</h1>
        </div>
        <div className="login-container">
          {isLoggedin ?
          <button className='login_button btn' onClick={handlelogout} >Logout</button>:<button className='login_button btn' onClick={handleLoginClick}>Sign in</button>
        }
       
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseClick}>&times;</span>
            <h2 className='login_title'>Login</h2>
            <form className='login_form' onSubmit={handleLogin}>
             <div className="inputs">
              <div className="username_container">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username...'
                required
              />
             </div>
             <div className="password_container">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password...'
                required
              />
              </div>
              </div>
              <input className='btn submit' type="submit" value="Login" />
            </form>
          </div>
        </div>
      )}
    </div>
        
    </nav>
   
 
  )
}

export default Navbar
