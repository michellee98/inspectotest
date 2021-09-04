import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../fire';
import bla from './bla.png';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Input from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Pdf extends React.Component {
   state = {
        criminals: null
    } 
   componentDidMount(){
       console.log('mounted')
       fire.firestore().collection('criminals_data')
         .get()
         .then( snapshot => {
             const criminals_data=[]
             snapshot.forEach( doc => {
                 const data = doc.data()
                 criminals_data.push(data)
             })
           this.setState({ criminals_data: criminals_data })
           //console.log(snapshot)
         })
         .catch( error => console.log(error))
   }


    render() {
        return(
<div><br/><br/>
<Container>
            <img src={bla} className="mister"/>
           <br/><br/> <h1 className="bb">Criminal Record</h1><hr className="bb"/><br/> </Container>
           {/* <Container><Row>
                 <Link to="/records"> 
            <Button className="high">Back</Button></Link>
            <Link to="/AddRecord"> 
            <Button className="high">Add</Button></Link>
            </Row></Container><div className="huya"><input type= "text" placeholder = "Search..." className="huya" />
           {/* {fire.firestore().collection('criminals_data').map((val, key) => {
               return <div> {val.FirstName} </div>
           })} 
           </div> */}
           
          
           <Container><Row><Col>
          
               <table><tr> <h4>
                        First Name:  <br/><br/>
                        Last Name: <br/><br/>
                        CNIC: <br/> <br/>
                        DOB: <br/><br/>
                        Identification: <br/><br/>
                        Height (in cm): <br/><br/>
                        Gender: <br/><br/>
                        Criminal Address: <br/><br/>
                        Confined In: <br/><br/>
                        Date Of Arrestment: <br/><br/>
                        Date Of Release: <br/><br/>
                        Type Of Crime: <br/><br/>
                        Details: <br/><br/>
                        Date Of Crime: <br/><br/>
                        Location: <br/><br/>
                        Witness: <br/><br/>
                        Person To Contact: <br/><br/>
                        Last Name: <br/><br/>
                        Relation: <br/><br/>
                        Person's Contact: <br/><br/>
                        Person's Address: <br/><br/>
                       
                        
                        </h4> </tr> </table>

</Col>

<Col>
<table>
               
           {
              this.state.criminals_data &&
              this.state.criminals_data.map( criminal => {
                  return( 
                      <h4>
                         <tr>
                       {criminal.FirstName} <br/><br/>
                      {criminal.LastName}<br/><br/>
                       {criminal.CNIC} <br/><br/>
                       {criminal.DoB} <br/><br/>
                      {criminal.Identification} <br/><br/>
                       {criminal.Height} <br/><br/>
                       {criminal.Gender} <br/><br/>
                       {criminal.CriminalAddress}<br/><br/>
                       {criminal.Confined_In} <br/><br/>
                       {criminal.DateOfArrestment}<br/><br/>
                       {criminal.DateOfRelease}<br/><br/>
                       {criminal.TypeOfCrime}<br/><br/>
                       {criminal.Details}<br/><br/>
                       {criminal.DateOfCrime}<br/><br/>
                       {criminal.Location}<br/><br/>
                       {criminal.Witness}<br/><br/>
                       {criminal.WFirstName}<br/><br/>
                       {criminal.WLastName}<br/><br/>
                       {criminal.RelationWithCriminal}<br/><br/>
                       {criminal.Contact}<br/><br/>
                       {criminal.ContactAddress}<br/><br/>
                       </tr>
                       </h4>
                       
                    
                  )
              })
         } 
          </table></Col></Row></Container>
          
          <br/><br/>
          
        </div>
    )
}
}
export default Pdf;