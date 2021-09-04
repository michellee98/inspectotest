import Hero from './Hero';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fire from './fire';
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
import './AddRecord.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { SidebarData } from './components/SidebarData';
import { IconContext } from 'react-icons';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Display from './components/Display';
import Home from './views/Home';
import bla from './bla.png';
import user from './user.png';
import Modal from './components/Modal';


const AddRecord = () => {

  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = fire.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username || !fileUrl) {
      return;
    }
    await fire.firestore().collection("criminals_data").doc(username).set({
      name: username,
      avatar: fileUrl,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await fire.firestore().collection("criminals_data").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);



    const [sidebar, setSidebar] = useState (false)

    const showSidebar = () => setSidebar(!sidebar)
    //const Hero handleLogout={handleLogout};

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [CNIC, setCNIC] = useState("");

    const [DoB, setDoB] = useState("");
    const [Identification, setIdentification] = useState("");
    const [Height, setHeight] = useState("");

    const [Gender, setGender] = useState("");
    const [CriminalAddress, setCriminalAddress] = useState("");
    const [Confined_In, setConfined_In] = useState("");

    const [DateOfArrestment, setDateOfArrestment] = useState("");
    const [DateOfRelease, setDateOfRelease] = useState("");
    const [TypeOfCrime, setTypeOfCrime] = useState("");

    const [Details, setDetails] = useState("");
    const [DateOfCrime, setDateOfCrime] = useState("");
    const [Location, setLocation] = useState("");

    const [Witness, setWitness] = useState("");
    const [WFirstName, setWFirstName] = useState("");
    const [WLastName, setWLastName] = useState("");

    const [RelationWithCriminal, setRelationWithCriminal] = useState("");
    const [Contact, setContact] = useState("");
    const [ContactAddress, setContactAddress] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();


/*
    const FirstName = e.target.FirstName.value;
    if (!FirstName || !fileUrl) {
      return;
    }

    
    await fire.firestore().collection("criminals_data").doc(FirstName).set({
      FirstName: FirstName,
      avatar: fileUrl,
    });


*/

    fire.firestore().collection('criminals_data').add({
        avatar: fileUrl,
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
        alert("Database Updated!");
    })
    .catch(error => {
        alert(error.message);
    })
    setFileUrl("");
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
            <br/><br/>
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
          <Form onSubmit = {handleSubmit}>
           
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Form.File as={Col} id="formcheck-api-regular">
       
      <Form.File.Label>Add Image</Form.File.Label>
      <Form.File.Input onChange={onFileChange} />
    </Form.File>
    <br></br>
  <Form.Row as={Col}>
    <Form.Group as={Col}>
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" value = {FirstName} onChange={(e) => setFirstName(e.target.value)} />
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
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
 <Form onSubmit = {handleSubmit}>


    <Form.Group as={Col} controlId="formTypeOfCrime">
      <Form.Label>Type Of Crime</Form.Label>
      <Form.Control as="select" value={TypeOfCrime} onChange={(e) => setTypeOfCrime(e.target.value)} placeholder="Type Of Crime">
      <option>---Select an Option---</option>
                    <option>Murder</option>
                    <option>Culpable Homicide</option>
                    <option>Attempt To Murder</option>
                    <option>Karo Kari</option>
                    <option>Grevious Hurt</option>
                    <option>Simple Hurt</option>
                    <option>Rioting</option>
                    <option>Assault on Police</option>
                    <option>Assault on Others</option>
                    <option>Rape / Zina</option>
                    <option>Gang Rape</option>
                    <option>Kidnapping / Abduction</option>
                    <option>Kidnapping for Ransom</option>
                    <option>Child Lifting</option>
                    <option>Highway Dacoity</option>
                    <option>Bank Dacoity</option>
                    <option>Petrol Pump Dacoity</option>
                    <option>Other Dacoity</option>
                    <option>Highway Robbery</option>
                    <option>Bank Robbery</option>
                    <option>Petrol Pump Robbery</option>
                    <option>Other Roberry </option>
                    <option>Burglary</option>
                    <option>Car Theft </option>
                    <option>Car Snatched</option>
                    <option>Motor Cycle Theft </option>
                    <option>Motor Cycle Snatched</option>
                    <option>Other Motor Vehicle Theft</option>
                    <option>Cattle Theft</option>
                    <option>Other Theft</option>
                    <option>Receiving Stolen Property</option>
                    <option>Arms Act</option>
                    <option>Gambling </option>
                    <option>Smuggling</option>
                    <option>Blasphemy</option>
                    <option>Prohibition ord.</option>
                
      </Form.Control>
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
  <Form onSubmit = {handleSubmit}>
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

export default AddRecord;
 


