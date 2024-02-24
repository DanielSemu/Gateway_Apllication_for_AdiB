import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Home from './components/homepage/Home';
import L_Sidebar from './components/leftsidebar/L_Sidebar';
import Noties from './components/notices/Noties';
import Production from './components/production/Production';
import Reporting from './components/reporting/Reporting';
import Communication from './components/communication/Communication';
import Others from './components/others/Others';
import Nav from './components/Nav';

function App() {
  return (
    <>
    {/* <Nav/>  */}
    <Navbar/>
    <L_Sidebar/>
    <main className='main'>
    <Production/>
    <Reporting/>
    <Communication/>
    <Others/>
   </main> 
    </>
    
  );
}

export default App;
