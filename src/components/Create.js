import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fire from '../fire';
//import storage from '../fire';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Display from './Display';
import croppped from './croppped.gif';
//import axios from 'axios';
import ImageUpload from './ImageUpload';

const db = fire.firestore();

class Create extends Component {

  constructor() {
    super();
    this.ref = fire.firestore().collection('criminals_data');
    //let storageRef = fire.storage().ref().child(`${bucketName}/${file.name}`);
    this.state = {
      FirstName: '',
      LastName: '',
      CNIC: '',
      DoB: '',
      Identification: '',
      Height: '',
      Gender: '',
      CriminalAddress: '',
      Confined_In: '',
      DateOfArrestment: '',
      DateOfRelease: '',
      TypeOfCrime: '',
      Details: '',
      DateOfCrime: '',
      Location: '',
      Witness: '',
      WFirstName: '',
      WLastName: '',
      RelationWithCriminal: '',
      Contact: '',
      ContactAddress: ''
    };
  }

 
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {FirstName, LastName, CNIC, DoB, Identification, Height, Gender, CriminalAddress, Confined_In, DateOfArrestment, DateOfRelease, TypeOfCrime, Details, DateOfCrime, Location, Witness, WFirstName, WLastName, RelationWithCriminal, Contact, ContactAddress } = this.state;

    this.ref.add({
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
        ContactAddress
    }).then((docRef) => {
      this.setState({
        FirstName: '',
        LastName: '',
        CNIC: '',
        DoB: '',
      Identification: '',
      Height: '',
      Gender: '',
      CriminalAddress: '',
      Confined_In: '',
      DateOfArrestment: '',
      DateOfRelease: '',
      TypeOfCrime: '',
      Details: '',
      DateOfCrime: '',
      Location: '',
      Witness: '',
      WFirstName: '',
      WLastName: '',
      RelationWithCriminal: '',
      Contact: '',
      ContactAddress: ''
      });
      this.props.history.push("/Display")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const {FirstName, LastName, CNIC, DoB, Identification, Height, Gender, CriminalAddress, Confined_In, DateOfArrestment, DateOfRelease, TypeOfCrime, Details, DateOfCrime, Location, Witness, WFirstName, WLastName, RelationWithCriminal, Contact, ContactAddress  } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
        <img src={croppped} className="mister" /> 
          <div class="panel-body">
           <Container><Link to="/Display"><Button className="high">Back</Button></Link></Container>
            {/* <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="FirstName">FirstName:</label>
                <input type="text" class="form-control" name="FirstName" value={FirstName} onChange={this.onChange} placeholder="Enter Name" />
              </div>
              <div class="form-group">
                <label for="LastName">LastName:</label>
                <textArea class="form-control" name="LastName" onChange={this.onChange} placeholder="LastName" >{LastName}</textArea>
              </div>
              <div class="form-group">
                <label for="author">CNIC:</label>
                <input type="text" class="form-control" name="CNIC" value={CNIC} onChange={this.onChange} placeholder="CNIC" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form> */}



    
<form onSubmit={this.onSubmit}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<Container>
<h1 className="bb">Personal Information</h1><hr className="bb"/><br/>
{/* <h5>Please select an image of the criminal:</h5> */}
              {/* <div class='row'>
                <div class='col'>
                  <label for = "image">Add Image</label>
                  <input type="file" onChange={this.handleChange} />&nbsp; &nbsp;&nbsp;
                  {/* <button className="fly" onClick={this.handleUpload}>Upload</button> */}
                {/* </div>
                </div><br/>  */}
                {/* <ImageUpload /> */}

<div class='row'><div class='col'>
{/* <ImageUpload /> */}
  </div></div>

    <div class='row'>
        <div class='col'>
                <label for="FirstName">First Name:</label>
                <input type="text" class="form-control" name="FirstName" value={FirstName} onChange={this.onChange} placeholder="Enter Name" />
              </div>
              <div class='col'>
                <label for="FirstName">Last Name:</label>
                <input type="text" class="form-control" name="LastName" value={LastName} onChange={this.onChange} placeholder="Enter Surname" />
              </div>
              </div>
<br/>
              <div class='row'>
              <div class='col'>
                <label for="CNIC">CNIC:</label>
                <input type="text" class="form-control" name="CNIC" value={CNIC} onChange={this.onChange} placeholder="XXXXX-XXXXXXX-X" />
              </div>
              <div class='col'>
                <label for="DoB">Date Of Birth:</label>
                <input type="date" class="form-control" name="DoB" value={DoB} onChange={this.onChange} placeholder="mm/dd/yyyy" />
              </div>
              </div>
              <br/>

              <label for="Identification">Identification:</label>
              <textarea type="text" class="form-control" name="Identification" value={Identification} onChange={this.onChange} placeholder="Enter Most Prominent Feature" />
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="Height">Height:</label>
                <input type="text" class="form-control" name="Height" value={Height} onChange={this.onChange} placeholder="Height in cm" />
              </div>
              <div class='col'>
                <label for="Gender">Gender:</label>
                <select class="form-control" name="Gender" value={Gender} onChange={this.onChange} placeholder="mm/dd/yyyy">
                    <option>---Select an Option---</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
              </div>
              </div>
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="CriminalAddress">Address:</label>
                <textarea type="text" class="form-control" name="CriminalAddress" value={CriminalAddress} onChange={this.onChange} placeholder="Enter Address" />
              </div>
              <div class='col'>
                <label for="Confined_In">Confined In:</label>
                <select class="form-control" name="Confined_In" value={Confined_In} onChange={this.onChange}>
                    <option>---Select an Option---</option>
                    <option>Central Prison, Karachi</option>
                    <option>District Prison, Malir, Karachi</option>
                    <option>Central Prison for Women, Karachi</option>
                </select>
              </div>
              </div>
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="DateOfArrestment">Date Of Arrest:</label>
                <input type="date" class="form-control" name="DateOfArrestment" value={DateOfArrestment} onChange={this.onChange} placeholder="mm/dd/yyyy" />
              </div>
              <div class='col'>
                <label for="DateOfRelease">Date Of Release:</label>
                <input type="date" class="form-control" name="DateOfRelease" value={DateOfRelease} onChange={this.onChange} placeholder="mm/dd/yyyy" />
              </div>
              </div>
              <br/><br/><br/>

              <h1 className="bb">Crime</h1><hr className="bb"/><br/>
              <div class='row'>
              <div class='col'>
                <label for="TypeOfCrime">Type Of Crime:</label>
                <select class="form-control" name="TypeOfCrime" value={TypeOfCrime} onChange={this.onChange} >
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
                </select>
              </div>
              <div class='col'>
                <label for="Details">Details:</label>
                <textarea class="form-control" name="Details" value={Details} onChange={this.onChange} placeholder="Enter Details about the Incident" />
              </div>
              </div>
              <br/>


              <div class='row'>
              <div class='col'>
                <label for="DateOfCrime">Date Of Crime:</label>
                <input type="date" class="form-control" name="DateOfCrime" value={DateOfCrime} onChange={this.onChange} placeholder="mm/dd/yyyy" />
              </div>
              <div class='col'>
                <label for="Location">Location:</label>
                <textarea class="form-control" name="Location" value={Location} onChange={this.onChange} placeholder="Street, Block, Area" />
              </div>
              </div>
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="Witness">Witness:</label>
                <input type="text" class="form-control" name="Witness" value={Witness} onChange={this.onChange} placeholder="Enter Witness' Name" />
              </div>
              </div>
              <br/><br/><br/>

              <h1 className="bb">Person To Contact</h1><hr className="bb"/><br/>
              <div class='row'>
              <div class='col'>
                <label for="WFirstName">First Name:</label>
                <input type="type" class="form-control" name="WFirstName" value={WFirstName} onChange={this.onChange} placeholder="Enter Name" />
              </div>
              <div class='col'>
                <label for="WLastName">Last Name:</label>
                <input type="text" class="form-control" name="WLastName" value={WLastName} onChange={this.onChange} placeholder="Enter Surname" />
              </div>
              </div>
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="RelationWithCriminal">Relation:</label>
                <input type="text" class="form-control" name="RelationWithCriminal" value={RelationWithCriminal} onChange={this.onChange} placeholder="Relationship with the person in question" />
              </div>
              <div class='col'>
                <label for="Contact">Contact:</label>
                <input type="text" class="form-control" name="Contact" value={Contact} onChange={this.onChange} placeholder="Enter landline/ cellphone number" />
              </div>
              </div>
              <br/>


              <div class='row'>
              <div class='col'>
                <label for="ContactAddress">Address:</label>
                <input type="text" class="form-control" name="ContactAddress" value={ContactAddress} onChange={this.onChange} placeholder="Enter Address" />
              </div>
              </div>

             
                {/* <label for="ContactAddress">Address:</label>
                <textarea class="form-control" name="ContactAddress" value={ContactAddress} onChange={this.onChange} placeholder="Enter Address" /> */}
               
                {/* <ImageUpload /> */}
              
              
              <br/>
              <button type="submit" class="btn btn-success" className="butt">Submit</button><br/>
<br/>             </Container> </form>
{/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
           {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <Form.File as={Col} id="formcheck-api-regular">
        
       <Form.File.Label>Add Image</Form.File.Label>
       <Form.File.Input />
     </Form.File>
     <br></br>
   <Form.Row as={Col}>
     <Form.Group as={Col}>
       <Form.Label>First Name</Form.Label>
       <Form.Control type="text" placeholder="First Name" value = {FirstName} onChange={this.onChange} />
     </Form.Group>
 
     <Form.Group as={Col}>
       <Form.Label>Last Name</Form.Label>
       <Form.Control type="text" value={LastName} onChange={this.onChange} placeholder="Last Name" />
     </Form.Group>
   </Form.Row>
   <Form.Row as={Col}>
   <Form.Group as={Col} controlId="formGridCNIC">
     <Form.Label>CNIC</Form.Label>
     <Form.Control type="text" value={CNIC} onChange={this.onChange} placeholder="XXXXX-XXXXXXX-X" />
   </Form.Group>
 
   <Form.Group as={Col} controlId="formGridDoB">
     <Form.Label>Date of Birth</Form.Label>
     <Form.Control type="date" value={DoB} onChange={this.onChange} placeholder="Date of Birth" />
   </Form.Group>
   </Form.Row>
 
   <Form.Row as={Col}>
     <Form.Group as={Col} controlId="formIdentification">
       <Form.Label>Identification</Form.Label>
       <Form.Control type="text" value={Identification} onChange={this.onChange}/>
     </Form.Group>
     </Form.Row>
     <Form.Group as={Col} controlId="formHeight">
       <Form.Label>Height</Form.Label>
       <Form.Control type="text" value={Height} onChange={this.onChange} placeholder="in cm"/>
     </Form.Group>
         
     <Form.Group>
     <Form.Label>Gender</Form.Label>
       <Form.Control as="select" value={Gender} onChange={this.onChange}>
       <option>---Select an option---</option>
         <option>Male</option>
         <option>Female</option>
         
       </Form.Control>
     </Form.Group>
     
     <Form.Group as={Col} controlId="formAddress">
       <Form.Label>Criminal Address</Form.Label>
       <Form.Control type="text" value={CriminalAddress} onChange={this.onChange}/>
     </Form.Group>
 
     <Form.Group as={Col} controlId="formConfined_In">
       <Form.Label>Confined In</Form.Label>
       <Form.Control as="select" value={Confined_In} onChange={this.onChange}>
       <option>---Select an option---</option>
         <option>Central Prison Karachi</option>
         <option>District Prison Malir Karachi</option>
         <option>Central Prison for Women Karachi</option>
         
       </Form.Control>
     </Form.Group>
     <Form.Row as={Col}>
   <Form.Group as={Col} controlId="formDateOfArrestment">
     <Form.Label>Date Of Arrest</Form.Label>
     <Form.Control type="date" value={DateOfArrestment} onChange={this.onChange} placeholder="DateOfArrestment" />
   </Form.Group>
 
   <Form.Group as={Col} controlId="formDateOfRelease">
     <Form.Label>Date of Release</Form.Label>
     <Form.Control type="date" value={DateOfRelease} onChange={this.onChange} placeholder="Date of Release" />
   </Form.Group>
   </Form.Row ></Form><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>
    <h1 className= "bb">Crime</h1><hr className = "bb"/><br></br><br/><br/><br/><br/><br/>
  <Form onSubmit = {this.onSubmit}>
 
 
     <Form.Group as={Col} controlId="formTypeOfCrime">
       <Form.Label>Type Of Crime</Form.Label>
       <Form.Control type="text" value={TypeOfCrime} onChange={this.onChange} placeholder="Type Of Crime"/>
     </Form.Group>
 
     <Form.Group as={Col} controlId="formDetails">
       <Form.Label>Details</Form.Label>
       <Form.Control type="textarea" value={Details} onChange={this.onChange} placeholder="Details"/>
     </Form.Group>
     <Form.Row as={Col}>
   <Form.Group as={Col} controlId="formDateOfCrime">
     <Form.Label>Date Of Crime</Form.Label>
     <Form.Control type="date" value={DateOfCrime} onChange={this.onChange} placeholder="Date Of Crime" />
   </Form.Group>
 
   <Form.Group as={Col} controlId="formLocation">
     <Form.Label>Location</Form.Label>
     <Form.Control type="text" value={Location} onChange={this.onChange} placeholder="Block, Street, Area" />
   </Form.Group>
   </Form.Row>
   <Form.Group as={Col} controlId="formWitness">
       <Form.Label>Witness</Form.Label>
       <Form.Control type="text" value={Witness} onChange={this.onChange} placeholder="Witness"/>
     </Form.Group></Form>
     <br/><br/><br/><br/><br/><br/> 
   <h1 className="bb">Person To Contact</h1><hr className="bb" /><br></br><br/><br/><br/><br/><br/><br/>
   <Form onSubmit = {this.onSubmit}>
   <Form.Row as={Col}>
     <Form.Group as={Col} controlId="formGridWFirstName">
       <Form.Label>First Name</Form.Label>
       <Form.Control type="text" value={WFirstName} onChange={this.onChange} placeholder="First Name" />
     </Form.Group>
 
     <Form.Group as={Col} controlId="formGridWLastName">
       <Form.Label>Last Name</Form.Label>
       <Form.Control type="text" value={WLastName} onChange={this.onChange} placeholder="Last Name" />
     </Form.Group> 
   </Form.Row>
   <Form.Group as={Col} controlId="formRelationWithCriminal">
       <Form.Label>Relation with Criminal</Form.Label>
       <Form.Control type="text" value={RelationWithCriminal} onChange={this.onChange} placeholder="Relation" />
     </Form.Group>
     <Form.Group as={Col} controlId="formContactNo">
       <Form.Label>Contact No</Form.Label>
       <Form.Control type="text" value={Contact} onChange={this.onChange} placeholder="XXXXXXXXXXX" />
     </Form.Group>
     <Form.Group as={Col} controlId="formContactAddress">
       <Form.Label>Contact Address</Form.Label>
       <Form.Control type="text" value={ContactAddress} onChange={this.onChange} placeholder="Contact Address" />
     </Form.Group>
 
     <Form.Row as={Col}>
     <Form.Group >
     <br/>
       <Button className="butt" type="submit">Submit</Button></Form.Group>
     
   </Form.Row>
 </Form>
*/}

          </div>
        </div>
      </div> 
    );
  }
}

export default Create;