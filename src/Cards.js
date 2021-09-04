import React from 'react'
import './Charts.css';
import { Container, Row, Col } from 'react-bootstrap';
import fire from './fire';


//const getPrison = fire.firestore().collection('criminals_data').Confined_In.once('Central Prison Karachi', function(snapshot) { alert('Count: ' + snapshot.numChildren()); });

function Cards() {
    return (
    <div class="rowww">
  <div class="columnnn">
    <div class="card">
      <h3><b>40</b></h3><hr/>
      <p>Inmates in Central Prison,</p>
      <p>Karachi</p>
    </div>
  </div>

  <div class="columnnn">
    <div class="card">
      <h3><b>35</b></h3><hr/>
      <p>Inmates in District Prison,</p>
      <p>Malir, Karachi</p>
    </div>
  </div>
  
  <div class="columnnn">
    <div class="card">
      <h3><b>25</b></h3><hr/>
      <p>Inmates in Central Prison</p>
      <p>for Women, Karachi</p>
    </div>
  </div>
 </div>
    )
}

export default Cards
