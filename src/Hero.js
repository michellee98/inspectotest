import React, {Component, useState, useEffect } from 'react';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bla from './bla.png';
import user from './user.png';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
//import AddRecord from './AddRecord';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { SidebarData } from './components/SidebarData';
//import { AddRecord } from './components/AddRecord';
import AddRecord from './AddRecord';
import AboutUs from './components/AboutUs';
import Home from './views/Home.js';
import ContactUs from './components/ContactUs';
import { IconContext } from 'react-icons';
import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import TodoList from './components/TodoList';
import Demo from './Demo';
//import ProfilePage from './components/ProfilePage';
import Charts from './Charts';
import Cards from './Cards';
import { Modal } from './components/Modal';
import ChartsTwo from './ChartsTwo';
import { GlobalStyle } from './components/globalStyles';
//import './components/Todoo.css';
const Hero = ({ handleLogout }) => {

const [sidebar, setSidebar] = useState (false)

const showSidebar = () => setSidebar(!sidebar)
/*
function bla(props){
    this.state={
        items:[],
        currentItems:{
            text:'',
            key:''
        }
    }
}

const handleInput = ({handleInput(e)})=>{
    this.setState({
      currentItem:{
          text: e.target.value,
          key: Date.now()
      }
    })
}

const addItem = ({addItem(e)})=>{
    e.preventDefault();
}
*/


const [showModal, setShowModal] = useState(false);
const openModal = () => {
    setShowModal(prev => !prev);
};

    return(
        <section className = "hero">
            <nav>
            <img src={bla} className="bla" alt="" /> 
            {/* <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>   */}
  <Link to="#"><AiIcons.AiOutlineHome className="bug" title= "Home"/></Link>
  <Link to="/AboutUs"><BsIcons.BsPeopleFill className="bug" title="About Us"/></Link>
  <Link to="/Display"><RiIcons.RiBook3Line className="bug" title="Records"/></Link>
  <Link to="/Home"><GiIcons.GiMagnifyingGlass className="bug" title="Detect"/></Link>
  <Link to="/ContactUs"><RiIcons.RiContactsBook2Line className="bug" title="Contact Us"/></Link>
 <div class = "dropdown">
  <img src={user} className="blat" title="You"/>
  <div class="dropdown-content">
    <a href='/Modal'><AiIcons.AiOutlineEdit className="boat"/>Profile</a>
    {/* <hr/> */}
    {/* <a onClick={handleLogout}></a> */}
    <a onClick={handleLogout}><GiIcons.GiPowerButton className="boat"/>Logout</a>
  </div>
  </div>
            {/* <button onClick={handleLogout}>Logout</button> */}
            </nav>
            <br/>
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
            <Link to="/AddRecord"><IoIcons.IoIosAddCircle className="jumbo" title="Add Record"/></Link>
            <Cards /> <br/>
            <div class="skill-bars">
    <div class="bar">
      <div class="info">
        <span>Unknowns</span>
      </div>
      <div class="progress-line html">
        <span></span>
      </div>
    </div></div>
            <Charts />
            {/* <Container className="fer">
            <h1><b>Tasks For Today:</b></h1>
                   <Container className="humble">
                       
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1" className="wot">Update Record ID 55555's status to "released"</label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                        <label for="vehicle2" className="wot">Enter new criminal to the databse. Find more details through employee 23</label><br/>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                        <label for="vehicle3" className="wot">Update Record ID 34233's "Person To Contact" details</label><br/>
                        </Container>   
                    
            </Container> */}


            {/* <header>
                <form id="to-do-form" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter Text" className="eww" value={this.state.currentItem.text} onChange={this.handleInput}/>
                    <button type="submit" className="remotes">Add</button>
                </form>
            </header> */}

            <br/><br/>
            {/* <TodoList />  */}
            {/* <ChartsTwo /> */}
            {/* <IconContext.Provider value={{ style: {fontSize: '130px', color: "#28A086", float: 'right', margin: "80px 100px 20px 20px", filter: "drop-shadow(2px 2px 2px #222)"}}}>
       <div>
         <AiIcons.AiFillWechat />
       </div>

    </IconContext.Provider> */}
    <Demo />
        </section>

    )

    return (
        <div>
        <Link to="/AddRecord"> 
            <Button className="high">+Add Record</Button></Link></div>
        
    );
}


export default Hero;

/*
export default function Hero() {
    return (
        <div>
            <Link to="AddRecord">
                <Button className="high">+Add Record</Button>
            </Link>
        </div>
    )
}
*/
