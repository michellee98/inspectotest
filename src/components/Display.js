import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../fire';
import user from '../user.png';
import bla from '../bla.png';
import { Container, Row, Col } from 'react-bootstrap';
import './Display.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { SidebarData } from './SidebarData';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { IconContext } from 'react-icons';
import Input from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddRecord from '../AddRecord';
import Pdf from './Pdf';
import {CriminalInput} from './CriminalInput'
import Hero from '../Hero';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from '../views/Home';
import SearchBox from './SearchBox';
import Modal from './Modal';

class Display extends Component {
  constructor(props) {
    super(props);
    this.ref = fire.firestore().collection('criminals_data');
    this.unsubscribe = null;
    this.state = {
      criminal_data: [],
      search: ''
    };
  }
/*
  state = {
    search : ""
  }
*/

  onCollectionUpdate = (querySnapshot) => {
    const {search} = this.state;
    const criminal_data = [];
   
    querySnapshot.forEach((doc) => {
      const { FirstName, LastName, CNIC, DoB, Identification, Height, Gender, CriminalAddress, Confined_In, DateOfArrestment, DateOfRelease, TypeOfCrime, Details, DateOfCrime, Location, Witness, WFirstName, WLastName, RelationWithCriminal, Contact, ContactAddress} = doc.data();
      criminal_data.push({
        key: doc.id,
        doc, // DocumentSnapshot
        FirstName,
        LastName,
        CNIC,
        DoB,
        Identification,
        Height,
        Gender,
        CriminalAddress,
        Confined_In,
        DateOfArrestment,
        DateOfRelease,
        TypeOfCrime,
        Details,
        DateOfCrime,
        Location,
        Witness,
        WFirstName,
        WLastName,
        RelationWithCriminal,
        Contact,
        ContactAddress,
      });
    });


    this.setState({
      criminal_data
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onChange = e => {
    this.setState({ search: e.target.value });
  }

 /* handleInput = (e) => {
    console.log(e.target.value);
    this.setState({searchCriminals: e.target.value })
  }*/

  render() {
  //const db= fire.firestore().collection('criminals_data');
   const {search} = this.state;
   const filteredCrime= this.state.criminal_data.filter( criminal => {
    return criminal.FirstName.toLowerCase().indexOf(search.toLowerCase() ) !== -1
   })


   /* let filteredSearch = this.state.criminal_data.filter((criminal) => {
        return criminal.FirstName.toLowerCase().includes(this.state.searchCriminals.toLowerCase())
    }) */

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
            
             <div class="container">
             <div class="panel panel-default">
          <div class="panel-body">
            <h4><Link to="/AddRecord"><IoIcons.IoIosAddCircle className="pencil" title="Add Record"/></Link></h4>
            <br/><br/>
            {/* <SearchBox handleInput={this.handleInput}/> */}
            <input type ="text" placeholder="Search..." className="huya" onChange={this.onChange}/>
            <table id="example" class="display table">
              <thead class="thead-dark">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>CNIC</th>
                  <th>Identification</th>
                  <th>Confined In</th>
                  <th>Type Of Crime</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              
                {/* {this.state.criminal_data.map(criminal =>  */}
                  {filteredCrime.map(criminal =>
                  <tr>
                    <td>{criminal.FirstName}</td>
                    <td>{criminal.LastName}</td>
                    <td>{criminal.CNIC}</td>
                    <td>{criminal.Identification}</td>
                    <td>{criminal.Confined_In}</td>
                    <td>{criminal.TypeOfCrime}</td>
                    <td><Link to={`/show/${criminal.key}`}><FcIcons.FcList className="siz"/></Link></td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
          </div>
        </div>
      </div></div>
    );
  }
}

export default Display;