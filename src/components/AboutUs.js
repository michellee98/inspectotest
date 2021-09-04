import React, { useState } from 'react'
import croppped from './croppped.gif';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
//import AddRecord from './AddRecord';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { SidebarData } from './SidebarData';
//import { AddRecord } from './components/AddRecord';
import { IconContext } from 'react-icons';
import Hero from '../Hero';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import bla from '../bla.png';
import user from '../user.png';
import Modal from './Modal';

const AboutUs = () => {

    const [sidebar, setSidebar] = useState (false)

    const showSidebar = () => setSidebar(!sidebar)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <div>
            {/* <img src={croppped} className="mister" /> */}
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
            </nav><br/>

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
            <Container><Row><Col><nav className="hhh"><h1>About Us</h1></nav></Col></Row></Container>
                    <Container>
                        <Row><Col><br/><br/><br/>
                        <h3><p>Hello and thank you for choosing Inspecto™ - A great web application that helps you store, detect and 
                            recognize criminals both in real time and through pictures. Not only that, but we also provide our users with 
                            the cyber security that they need. Fret not, for your details are safe with us! </p></h3></Col>
                            </Row>
                            <br/><br/>
                            <Row><Col><h1 className="ugh"><b>Who We Are</b></h1></Col></Row>
                            <Row><Col><h3><p>Just two students who are trying to help our police capture and recognize people
                            that have acted against the law. Drop a hi to Ifrah Asif and Michelle Rehman - the developers behind this app, on the links given below.</p></h3>
                            </Col></Row>
                            
                            <br/><br/>
                            <Row><Col><h1 className="ugh"><b>Where To Find Us</b></h1></Col></Row>
                            <Row><Col><h3><p>If you're interested in our work and want to know more about our projects and assigned tasks, you 
                                can find us on the following social media applications:</p></h3>
                            </Col></Row>
                            <br/><br/>
                            <Row><Col className="huge">
                              <FiIcons.FiFacebook className="huge" />
                              <FiIcons.FiInstagram className="huge" />
                              <FiIcons.FiTwitter className="huge" />
                              <FiIcons.FiLinkedin className="huge" />
                            </Col></Row>
                    </Container>
           
            </div>
    )
}

export default AboutUs;
