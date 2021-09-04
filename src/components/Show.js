import React, { Component } from 'react';
import fire from '../fire';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Display from './Display';
import croppped from './croppped.gif';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      criminal: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = fire.firestore().collection('criminals_data').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          criminal: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    fire.firestore().collection('criminals_data').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/Display")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <img src={croppped} className="mister" />
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/Display"><button className="high">Go Back</button></Link></h4><br/><br/><br/><br/>
          
            <h3 class="panel-title">
              <h1 className="bb">Personal Information</h1><hr className="bb"/>
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
              <div className="fid">
              {this.state.criminal.FirstName} &nbsp; 
              {this.state.criminal.LastName}<br/>
              <img width="200" height="250" src={this.state.criminal.avatar} />
              </div></h3>
          </div>
          <div>           
            <dl>
            <dt>CNIC:</dt>
              <dd>{this.state.criminal.CNIC}</dd>
              <dt>Date Of Birth:</dt>
              <dd>{this.state.criminal.DoB}</dd>
            
              <dt>Identification:</dt>
              <dd>{this.state.criminal.Identification}</dd>
              <dt>Height (in cm):</dt>
              <dd>{this.state.criminal.Height}</dd>

              <dt>Gender:</dt>
              <dd>{this.state.criminal.Gender}</dd>
              <dt>Address:</dt>
              <dd>{this.state.criminal.CriminalAddress}</dd>

              <dt>Confined In:</dt>
              <dd>{this.state.criminal.Confined_In}</dd>
              <dt>Date Of Arrest:</dt>
              <dd>{this.state.criminal.DateOfArrestment}</dd>

              <dt>Date Of Release:</dt>
              <dd>{this.state.criminal.DateOfRelease}</dd>
              <br/><br/>
              <h1 className="bb">Crime</h1><hr className="bb"/>
              <dt>Type Of Crime:</dt>
              <dd>{this.state.criminal.TypeOfCrime}</dd>

              <dt>Details:</dt>
              <dd>{this.state.criminal.Details}</dd>
              <dt>Date Of Crime:</dt>
              <dd>{this.state.criminal.DateOfCrime}</dd>

              <dt>Location:</dt>
              <dd>{this.state.criminal.Location}</dd>
              <dt>Witness:</dt>
              <dd>{this.state.criminal.Witness}</dd>
              <br/><br/>
<h1 className="bb">Person To Contact</h1><hr className="bb"/>
              <dt>First Name:</dt>
              <dd>{this.state.criminal.WFirstName}</dd>
              <dt>Last Name:</dt>
              <dd>{this.state.criminal.WLastName}</dd>

              <dt>Relation:</dt>
              <dd>{this.state.criminal.RelationWithCriminal}</dd>
              <dt>Contact Number:</dt>
              <dd>{this.state.criminal.Contact}</dd>

              <dt>Contact Address:</dt>
              <dd>{this.state.criminal.ContactAddress}</dd>
            </dl>

            <Link to={`/edit/${this.state.key}`}><button className="vanilla">Edit</button></Link>
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger" className="high">Delete</button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Show;