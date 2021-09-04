import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bla from '../bla.png';
import user from '../user.png';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import ImageInput from './ImageInput';
import VideoInput from './VideoInput';
import croppped from '../croppped.gif';
import Hero from '../Hero';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Display from '../components/Display';
import { Container, Row, Col } from 'react-bootstrap';
//import './Home.css';
import Modal from '../components/Modal';


export default class Home extends Component {
  render() {
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
        <Container>
        
        <br/><br/><br/><br/><br/><br/><br/><h1 className="gigi"><b>Please Select Your Mode of Detection:</b></h1>
        {/* <li>
        <Link to="/ImageInput" className="siz">Through Picture</Link>
        </li>
        <li>
          <Link to="/VideoInput" className="siz">Through Video Camera</Link>
        </li> */}
         <div class="riwww">
         <Link to="/ImageInput">
  <div class="cilumnnn">
    <div class="cardi">
    <FcIcons.FcPicture className="cardib"/>
      <p>Through Pictures</p>
      
    </div>
  </div>
  </Link>

  <Link to="/VideoInput">
  <div class="ciulumnnn">
    <div class="cardi">
    <FcIcons.FcCameraIdentification className="cardib"/>
      <p>Through Video Camera</p>
    </div>
  </div>
  </Link>
  </div>
        </Container>
      </div>
    );
  }
}
