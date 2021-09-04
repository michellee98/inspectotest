import Display from './Display';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fire from '../fire';
//import index from './index';
import React, { Component, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Screen2.css';
import { Container, Row, Col } from 'react-bootstrap';
//import inspecto from './inspecto.png';
//import Record from "./components/record.component.js";
//import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import '../AddRecord.css';
import croppped from './croppped.gif';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function UpdateForm(criminal_data) {
    const [sidebar, setSidebar] = useState (false)

    const showSidebar = () => setSidebar(!sidebar)
    //const Hero handleLogout={handleLogout};

    const [FirstName, setFirstName] = React.useState(criminal_data.FirstName);
    const [LastName, setLastName] = React.useState(criminal_data.LastName);
    const [CNIC, setCNIC] = React.useState(criminal_data.CNIC);

    const [DoB, setDoB] = React.useState(criminal_data.DoB);
    const [Identification, setIdentification] = React.useState(criminal_data.Identification);
    const [Height, setHeight] = React.useState(criminal_data.Height);

    const [Gender, setGender] = React.useState(criminal_data.Gender);
    const [CriminalAddress, setCriminalAddress] = React.useState(criminal_data.CriminalAddress);
    const [Confined_In, setConfined_In] = React.useState(criminal_data.Confined_In);

    const [DateOfArrestment, setDateOfArrestment] = React.useState(criminal_data.DateOfArrestment);
    const [DateOfRelease, setDateOfRelease] = React.useState(criminal_data.DateOfRelease);
    const [TypeOfCrime, setTypeOfCrime] = React.useState(criminal_data.TypeOfCrime);

    const [Details, setDetails] = React.useState(criminal_data.Details);
    const [DateOfCrime, setDateOfCrime] = React.useState(criminal_data.DateOfCrime);
    const [Location, setLocation] = React.useState(criminal_data.Location);

    const [Witness, setWitness] = React.useState(criminal_data.Witness);
    const [WFirstName, setWFirstName] = React.useState(criminal_data.WFirstName);
    const [WLastName, setWLastName] = React.useState(criminal_data.WLastName);

    const [RelationWithCriminal, setRelationWithCriminal] = React.useState(criminal_data.RelationWithCriminal);
    const [Contact, setContact] = React.useState(criminal_data.Contact);
    const [ContactAddress, setContactAddress] = React.useState(criminal_data.ContactAddress);
/*
const handleSubmit = (e) => {
    e.preventDefault();

    fire.firestore().collection('criminals_data').add({
        FirstName: FirstName,
        LastName: LastName,
        CNIC: CNIC,
        DoB: DoB,
        Identification: Identification,
        Height: Height,
        Gender: Gender,
        CriminalAddress: CriminalAddress,
        Confined_In: Confined_In,
        DateOfArrestment: DateOfArrestment,
        DateOfRelease: DateOfRelease,
        TypeOfCrime: TypeOfCrime,
        Details: Details,
        DateOfCrime: DateOfCrime,
        Location: Location,
        Witness: Witness,
        WFirstName: WFirstName,
        WLastName: WLastName,
        RelationWithCriminal: RelationWithCriminal,
        Contact: Contact,
        ContactAddress: ContactAddress,
    })
    .then(() => {
        alert("Criminal Data Updated!");
    })
    .catch(error => {
        alert(error.message);
    })
    setFirstName("");
    setLastName("");
    setCNIC("");
    setDoB("");
    setIdentification("");
    setHeight("");
    setGender("");
    setCriminalAddress("");
    setConfined_In("");
    setDateOfArrestment("");
    setDateOfRelease("");
    setTypeOfCrime("");
    setDetails("");
    setDateOfCrime("");
    setLocation("");
    setWitness("");
    setWFirstName("");
    setWLastName("");
    setRelationWithCriminal("");
    setContact("");
    setContactAddress("");
};

*/


const onUpdate = () => {
    const db = fire.firestore()
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, FirstName})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, LastName})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, CNIC})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, DoB})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, Identification})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, Height})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, Gender})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, CriminalAddress})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, Confined_In})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, DateOfArrestment})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, DateOfRelease})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, TypeOfCrime})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, Details})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, DateOfCrime})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, Location})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, Witness})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, WFirstName})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, WLastName})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, RelationWithCriminal})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, Contact})
    db.collection('criminals_data').doc(criminal_data.id).set({...criminal_data, ContactAddress})
    
    //doc("0") means the document with id 0 
 }

    return (
        <div>
            <img src={croppped} className="mister"/>
            <Link to="/Display"> 
            <Button className="high">Back</Button></Link>
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
            <Container>
            
          <h1 className= "bb">Criminal Details</h1><hr className= "bb"/>
          <Form onSubmit = {onUpdate}>
           
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Form.File as={Col} id="formcheck-api-regular">
       
      <Form.File.Label>Add Image</Form.File.Label>
      <Form.File.Input />
    </Form.File>
    <br></br>
  <Form.Row as={Col}>
    <Form.Group as={Col}>
      <Form.Label>First Name</Form.Label>
      <Form.Control value={FirstName} onChange={e => {setFirstName(e.target.value);}} onUpdate={onUpdate}/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Last Name</Form.Label>
      <Form.Control value={LastName} onChange={(e) => setLastName(e.target.value)} />
    </Form.Group>
  </Form.Row>
  <Form.Row as={Col}>
  <Form.Group as={Col} controlId="formGridCNIC">
    <Form.Label>CNIC</Form.Label>
    <Form.Control type="text" value={CNIC} onChange={(e) => setCNIC(e.target.value)} placeholder="XXXXX-XXXXXXX-X" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridDoB">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" value={DoB} onChange={(e) => setDoB(e.target.value)} placeholder="Date of Birth" />
  </Form.Group>
  </Form.Row>

  <Form.Row as={Col}>
    <Form.Group as={Col} controlId="formIdentification">
      <Form.Label>Identification</Form.Label>
      <Form.Control type="text" value={Identification} onChange={(e) => setIdentification(e.target.value)}/>
    </Form.Group>
    </Form.Row>
    <Form.Group as={Col} controlId="formHeight">
      <Form.Label>Height</Form.Label>
      <Form.Control type="text" value={Height} onChange={(e) => setHeight(e.target.value)} placeholder="in cm"/>
    </Form.Group>
        
    <Form.Group>
    <Form.Label>Gender</Form.Label>
      <Form.Control as="select" value={Gender} onChange={(e) => setGender(e.target.value)}>
      <option>---Select an option---</option>
        <option>Male</option>
        <option>Female</option>
        
      </Form.Control>
    </Form.Group>
    
    <Form.Group as={Col} controlId="formAddress">
      <Form.Label>Criminal Address</Form.Label>
      <Form.Control type="text" value={CriminalAddress} onChange={(e) => setCriminalAddress(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formConfined_In">
      <Form.Label>Confined In</Form.Label>
      <Form.Control as="select" value={Confined_In} onChange={(e) => setConfined_In(e.target.value)}>
      <option>---Select an option---</option>
        <option>Central Prison Karachi</option>
        <option>District Prison Malir Karachi</option>
        <option>Central Prison for Women Karachi</option>
        
      </Form.Control>
    </Form.Group>
    <Form.Row as={Col}>
  <Form.Group as={Col} controlId="formDateOfArrestment">
    <Form.Label>Date Of Arrest</Form.Label>
    <Form.Control type="date" value={DateOfArrestment} onChange={(e) => setDateOfArrestment(e.target.value)} placeholder="DateOfArrestment" />
  </Form.Group>

  <Form.Group as={Col} controlId="formDateOfRelease">
    <Form.Label>Date of Release</Form.Label>
    <Form.Control type="date" value={DateOfRelease} onChange={(e) => setDateOfRelease(e.target.value)} placeholder="Date of Release" />
  </Form.Group>
  </Form.Row ></Form><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/><br/>
   <h1 className= "bb">Crime</h1><hr className = "bb"/><br></br><br/><br/><br/><br/><br/>
 <Form onSubmit = {onUpdate}>


    <Form.Group as={Col} controlId="formTypeOfCrime">
      <Form.Label>Type Of Crime</Form.Label>
      <Form.Control type="text" value={TypeOfCrime} onChange={(e) => setTypeOfCrime(e.target.value)} placeholder="Type Of Crime"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formDetails">
      <Form.Label>Details</Form.Label>
      <Form.Control type="textarea" value={Details} onChange={(e) => setDetails(e.target.value)} placeholder="Details"/>
    </Form.Group>
    <Form.Row as={Col}>
  <Form.Group as={Col} controlId="formDateOfCrime">
    <Form.Label>Date Of Crime</Form.Label>
    <Form.Control type="date" value={DateOfCrime} onChange={(e) => setDateOfCrime(e.target.value)} placeholder="Date Of Crime" />
  </Form.Group>

  <Form.Group as={Col} controlId="formLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" value={Location} onChange={(e) => setLocation(e.target.value)} placeholder="Block, Street, Area" />
  </Form.Group>
  </Form.Row>
  <Form.Group as={Col} controlId="formWitness">
      <Form.Label>Witness</Form.Label>
      <Form.Control type="text" value={Witness} onChange={(e) => setWitness(e.target.value)} placeholder="Witness"/>
    </Form.Group></Form>
    <br/><br/><br/><br/><br/><br/> 
  <h1 className="bb">Person To Contact</h1><hr className="bb" /><br></br><br/><br/><br/><br/><br/><br/>
  <Form onSubmit = {onUpdate}>
  <Form.Row as={Col}>
    <Form.Group as={Col} controlId="formGridWFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" value={WFirstName} onChange={(e) => setWFirstName(e.target.value)} placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridWLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" value={WLastName} onChange={(e) => setWLastName(e.target.value)} placeholder="Last Name" />
    </Form.Group> 
  </Form.Row>
  <Form.Group as={Col} controlId="formRelationWithCriminal">
      <Form.Label>Relation with Criminal</Form.Label>
      <Form.Control type="text" value={RelationWithCriminal} onChange={(e) => setRelationWithCriminal(e.target.value)} placeholder="Relation" />
    </Form.Group>
    <Form.Group as={Col} controlId="formContactNo">
      <Form.Label>Contact No</Form.Label>
      <Form.Control type="text" value={Contact} onChange={(e) => setContact(e.target.value)} placeholder="XXXXXXXXXXX" />
    </Form.Group>
    <Form.Group as={Col} controlId="formContactAddress">
      <Form.Label>Contact Address</Form.Label>
      <Form.Control type="text" value={ContactAddress} onChange={(e) => setContactAddress(e.target.value)} placeholder="Contact Address" />
    </Form.Group>

    <Form.Row as={Col}>
    <Form.Group >
    <br/>
      <Button className="butt" type="submit">Submit</Button></Form.Group>
    
  </Form.Row>
</Form>
  
            </Container>
            <br/><br/>
            </div>
    )
}
export default UpdateForm;
