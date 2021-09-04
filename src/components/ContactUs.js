import React, { useState } from 'react'
import croppped from './croppped.gif';
import './ContactUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
//import AddRecord from './AddRecord';
import { SidebarData } from './SidebarData';
//import { AddRecord } from './components/AddRecord';
import { IconContext } from 'react-icons';
import Button from 'react-bootstrap/Button';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import Hero from '../Hero';
import Home from '../views/Home';
import Display from './Display';
import AboutUs from './AboutUs'; 
import fire from "../fire";
import user from '../user.png';
import bla from '../bla.png';
import Modal from './Modal';


const ContactUs = () => {

    const [sidebar, setSidebar] = useState (false)

    const showSidebar = () => setSidebar(!sidebar)
    //const Hero handleLogout={handleLogout};

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    fire.firestore().collection('contacts').add({
        name: name,
        email: email,
        message: message,
    })
    .then(() => {
        alert("Thanks! We'll get back to you soon!");
    })
    .catch(error => {
        alert(error.message);
    })
    setName("");
    setEmail("");
    setMessage("");
};

    return (
        <div>
            <nav className="bashi">
            <img src={bla} className="blag" alt="" /> 
            <Link to="/Hero"><AiIcons.AiOutlineHome className="bugg" title= "Home"/></Link>
  <Link to="/AboutUs"><BsIcons.BsPeopleFill className="bugg" title="About Us"/></Link>
  <Link to="/Display"><RiIcons.RiBook3Line className="bugg" title="Records"/></Link>
  <Link to="/Home"><GiIcons.GiMagnifyingGlass className="bugg" title="Detect"/></Link>
  <Link to="/ContactUs"><RiIcons.RiContactsBook2Line className="bugg" title="Contact Us"/></Link>
  <div class = "dropdown">
  <img src={user} className="boaty" title="You"/>
  <div class="dropdown-content">
    <a href="/Modal"><AiIcons.AiOutlineEdit className="boatyy"/>Profile</a>
    {/* <hr/> */}
    <a href="#"><GiIcons.GiPowerButton className="boatyy"/>Logout</a>
  </div>
  </div>
            </nav>
            <IconContext.Provider value ={{color: '3e9e91'}}>            
            <div className="navbar">
             <Link to ="#" className="menu-bars">   
                 <FaIcons.FaBars onClick={showSidebar} />
             </Link>  
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to ="#" className="menu-bars">   
                        <AiIcons.AiOutlineClose/>
                        </Link>  
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
            
        <form className="form" onSubmit = {handleSubmit}>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><h1 className="oompa">Stuck Somewhere? Contact Us!</h1><br/><br/>
             <input 
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
                    
            <input placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />

            
            <textarea placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}>
            </textarea>

                    <button type="submit">Submit</button>
        </form>
        
{/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
           
            </div>
    )
}

export default ContactUs;
