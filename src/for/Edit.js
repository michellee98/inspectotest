import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import croppped from './croppped.gif';
import Button from 'react-bootstrap/Button';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
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

  componentDidMount() {
    const ref = fire.firestore().collection('criminals_data').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const criminal = doc.data();
        this.setState({
          key: doc.id,
          FirstName: criminal.FirstName,
          LastName: criminal.LastName,
          CNIC: criminal.CNIC,
          DoB: criminal.DoB,
      Identification: criminal.Identification,
      Height: criminal.Height,
      Gender: criminal.Gender,
      CriminalAddress: criminal.CriminalAddress,
      Confined_In: criminal.Confined_In,
      DateOfArrestment: criminal.DateOfArrestment,
      DateOfRelease: criminal.DateOfRelease,
      TypeOfCrime: criminal.TypeOfCrime,
      Details: criminal.Details,
      DateOfCrime: criminal.DateOfCrime,
      Location: criminal.Location,
      Witness: criminal.Witness,
      WFirstName: criminal.WFirstName,
      WLastName: criminal.WLastName,
      RelationWithCriminal: criminal.RelationWithCriminal,
      Contact: criminal.Contact,
      ContactAddress: criminal.ContactAddress
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({criminal:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {FirstName, LastName, CNIC, DoB, Identification, Height, Gender, CriminalAddress, Confined_In, DateOfArrestment, DateOfRelease, TypeOfCrime, Details, DateOfCrime, Location, Witness, WFirstName, WLastName, RelationWithCriminal, Contact, ContactAddress } = this.state;

    const updateRef = fire.firestore().collection('criminals_data').doc(this.state.key);
    updateRef.set({
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
        key: '',
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
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
        <img src={croppped} className="mister" />
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`}><Button className="high">Back</Button></Link></h4><br/><br/>
            <form onSubmit={this.onSubmit}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Container>
                  <h1 className="bb">Personal Information</h1><hr className="bb"/><br/>
                 
                
                <div class='row'>
              <div class="col">
                <label for="FirstName">FirstName:</label>
                <input type="text" class="form-control" name="FirstName" value={this.state.FirstName} onChange={this.onChange} placeholder="Enter Name" />
              </div>
              <div class="col">
                <label for="LastName">LastName:</label>
                <input type="text" class="form-control" name="LastName" value={this.state.LastName} onChange={this.onChange} placeholder="Enter Surname" />
              </div>
              </div>
              <br/>
              
              <div class='row'>
              <div class='col'>
                <label for="CNIC">CNIC:</label>
                <input type="text" class="form-control" name="CNIC" value={this.state.CNIC} onChange={this.onChange} placeholder="XXXXX-XXXXXXX-X" />
              </div>
              <div class='col'>
                <label for="DoB">Date Of Birth:</label>
                <input type="date" class="form-control" name="DoB" value={this.state.DoB} onChange={this.onChange} placeholder="mm/dd/yyyy" />
              </div>
              </div>
              <br/>

              <label for="Identification">Identification:</label>
              <textarea type="text" class="form-control" name="Identification" value={this.state.Identification} onChange={this.onChange} placeholder="Enter Most Prominent Feature" />
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="Height">Height (in cm):</label>
                <input type="text" class="form-control" name="Height" value={this.state.Height} onChange={this.onChange} placeholder="Height in cm" />
              </div>
              <div class='col'>
                <label for="Gender">Gender:</label>
                <select class="form-control" name="Gender" value={this.state.Gender} onChange={this.onChange}>
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
                <textarea type="text" class="form-control" name="CriminalAddress" value={this.state.CriminalAddress} onChange={this.onChange} placeholder="Enter Address" />
              </div>
              <div class='col'>
                <label for="Confined_In">Confined In:</label>
                <select class="form-control" name="Confined_In" value={this.state.Confined_In} onChange={this.onChange}>
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
                <input type="date" class="form-control" name="DateOfArrestment" value={this.state.DateOfArrestment} onChange={this.onChange} placeholder="mm/dd/yyyy" />
              </div>
              <div class='col'>
                <label for="DateOfRelease">Date Of Release:</label>
                <input type="date" class="form-control" name="DateOfRelease" value={this.state.DateOfRelease} onChange={this.onChange} placeholder="mm/dd/yyyy" />
              </div>
              </div>
              <br/><br/><br/>

              <h1 className="bb">Crime</h1><hr className="bb"/><br/>
              <div class='row'>
              <div class='col'>
                <label for="TypeOfCrime">Type Of Crime:</label>
                <select class="form-control" name="TypeOfCrime" value={this.state.TypeOfCrime} onChange={this.onChange} >
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
                <textarea class="form-control" name="Details" value={this.state.Details} onChange={this.onChange} placeholder="Enter Details about the Incident" />
              </div>
              </div>
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="DateOfCrime">Date Of Crime:</label>
                <input type="date" class="form-control" name="DateOfCrime" value={this.state.DateOfCrime} onChange={this.onChange} placeholder="mm/dd/yyyy" />
              </div>
              <div class='col'>
                <label for="Location">Location:</label>
                <textarea class="form-control" name="Location" value={this.state.Location} onChange={this.onChange} placeholder="Street, Block, Area" />
              </div>
              </div>
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="Witness">Witness:</label>
                <input type="text" class="form-control" name="Witness" value={this.state.Witness} onChange={this.onChange} placeholder="Enter Witness' Name" />
              </div>
              </div>
              <br/><br/><br/>

              <h1 className="bb">Person To Contact</h1><hr className="bb"/><br/>
              <div class='row'>
              <div class='col'>
                <label for="WFirstName">First Name:</label>
                <input type="type" class="form-control" name="WFirstName" value={this.state.WFirstName} onChange={this.onChange} placeholder="Enter Name" />
              </div>
              <div class='col'>
                <label for="WLastName">Last Name:</label>
                <input type="text" class="form-control" name="WLastName" value={this.state.WLastName} onChange={this.onChange} placeholder="Enter Surname" />
              </div>
              </div>
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="RelationWithCriminal">Relation:</label>
                <input type="text" class="form-control" name="RelationWithCriminal" value={this.state.RelationWithCriminal} onChange={this.onChange} placeholder="Relationship with the person in question" />
              </div>
              <div class='col'>
                <label for="Contact">Contact:</label>
                <input type="text" class="form-control" name="Contact" value={this.state.Contact} onChange={this.onChange} placeholder="Enter landline/ cellphone number" />
              </div>
              </div>
              <br/>

              <div class='row'>
              <div class='col'>
                <label for="ContactAddress">Address:</label>
                <textarea class="form-control" name="ContactAddress" value={this.state.ContactAddress} onChange={this.onChange} placeholder="Enter Address" />
              </div>
              </div>
              <br/>

              <button type="submit" class="btn btn-success" className="butt">Update</button><br/><br/>
              </Container></form>
              
{/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;