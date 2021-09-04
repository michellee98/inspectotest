/*
import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md';


const Background = styled.div`
width: 100%;
height:100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`
const ModalWrapper = styled.div`
width: 800px;
height: 500px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`

const ModalImg = styled.img`
width: 100%;
height: 100%;
border-radius: 10px 0 0 10px;
background: #000;
`
const ModalContent = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;

p {
    margin-bottom: 1rem;
}

button {
    padding:10px 24px;
    background: #141414;
    color: #fff;
    border: none;
}
`;

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;
`;

export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
        {showModal ? (
            <Background>
               <ModalWrapper showModal={showModal}>
                   <ModalImg src={require('./user.png')} alt='user' />
                   <ModalContent>
                       <h1>here comes the email</h1>
                       <p>here comes the job description</p>
                       <button>Join Now</button>
                   </ModalContent>
                   <CloseModalButton aria-label='Close' onClick={() => setShowModal
                   (prev => !prev)} />
               </ModalWrapper>
            </Background>
        ) : null}
        </>
    )
}
*/

import React, {Component, useContext, useEffect, useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import Hero from '../Hero';
import AboutUs from './AboutUs';
import Display from './Display';
import Home from '../views/Home';
import ContactUs from './ContactUs';
import bla from './bla.png';
import users from './user.png';
import {Link} from 'react-router-dom';
import './Modal.css';
import { Container, Row, Col } from 'react-bootstrap';
import { UserContext } from './userProvider';
import fire from '../fire';
//import { useEffect, useState } from "react";


class Modal extends Component {

    state = {
        profiledata : null
    }

    componentDidMount(){
        fire.firestore().collection('users')
            // .doc("JgT2LyOB4jqhMv9YMgrh")
            .get()
            
             .then((snapshot) => {
                const profiledata  = []
                snapshot.forEach(function(doc){
                    const data = doc.data();
                    profiledata.push(data);
                }
                )
                this.setState({profiledata :  profiledata})
             })
             }


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
  <img src={users} className="boaty" title="You"/>
  <div class="dropdown-content">
    <a href="/Modal"><AiIcons.AiOutlineEdit className="boatyy"/>Profile</a>
    {/* <hr/> */}
    <a href="#"><GiIcons.GiPowerButton className="boatyy"/>Logout</a>
  </div>
  </div>
            </nav>
  <img src={users} className='pictuures' />
  
  

  <div class="cardd">
  <h1 className="gigi"><b>Profile Data</b></h1><hr/>
  <div class="containeer">


{/* 
  {
                    this.state.profiledata && 
                        this.state.profiledata.map( profiledata => { */}
                            
                                <div>
{/*                                     
                                    <b>Name:</b> {String(profiledata.displayName)}
      <br/><br/><b>Email:</b> {String(profiledata.email)}
      <br/><br/><b>Contact #:</b> {String(profiledata.contact)}
      <br/><br/>         */}
       <b>Name: </b> Inspecto User
    <br/><br/><b>Email: </b> user@inspecto.com
    <br/><br/><b>Contact #: </b> +920000000000
      
                                </div>
                                
                           
                
  </div>
  </div> 

  <div class="cardid">
  <div class="contaiineer">
      <p>Please note that you cannot make any changes to your profile. If you believe</p>
      <p> there has been a mistake or you'd like some ammendments,
      kindly <a href='/ContactUs'>Contact us</a> </p> <p>and we'll get back to you soon.</p>
  </div>
  </div> 

  </div>
    )}
}

export default Modal
