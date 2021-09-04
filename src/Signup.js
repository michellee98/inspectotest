import React, {useState, useEffect, Component} from 'react';
import croppped from './croppped.gif';
import Login from './Login';
import {Link} from 'react-router-dom';
import './Login.css';
import Hero from './Hero';
import fire, {createUserDocument} from './fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

/*
function Signup () {


    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    //const [displayName, setDisplayName] = useState('');
    //const []
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
  


    const clearInputs = () => {
        setEmail('');
        setPassword('');
      }
    
      const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
      }
      
      const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
          createUserDocument(user, {displayName, contact})
        } );
      };
    
    
      const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
          if(user){
            clearInputs();
            setUser(user);
          }
          else {
            setUser('');
          }
        } );
      };
    
      useEffect(() => {
        authListener();
      });

    
    return(
        
        <section className = "login">
         <Container><Row className="mb-4">
          <Col md="8">
            <img src={croppped} className="maki" alt="" />
            </Col></Row></Container>
            
            <div className = "loginContainer">
                
                <label>Username</label>
                <input type="text" 
                autoFocus required value={email} 
                onChange={e => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                
                <label>Password</label>
                <input type="password"
                required value={password}
                onChange={e => setPassword(e.target.value)}/>
                <p className = "errorMsg">{passwordError}</p>

                <label>Full Name</label>
                <input type="text" 
                autoFocus required value={displayName} 
                 onChange={e => setDisplayName(e.target.value)}/> 
                
                <label>Contact No.</label>
                <input type="password"
                required value={contact} 
                 onChange={e => setPassword(e.target.value)}/> 
                <p className = "errorMsg">{passwordError}</p>

                <div className="btnContainer">
                 <button onClick={handleSignup}>Sign Up</button> 
                        <p>Already have an Account? <Link to = "/Login"><span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></Link></p>
                </div>
            </div>
        </section>
    )
}

export default Signup;
*/

class Signup extends Component {
    state = { displayName: '', email: '', password: '', contact: '' };
    handleChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({ [name]: value });
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, displayName, contact } = this.state;
        try {
          const { user } = await fire.auth().createUserWithEmailAndPassword(
            email,
            password
          );
          console.log(user);
          await createUserDocument(user, { displayName, contact });
        } catch (error) {
          console.log('error', error);
        }
    
        this.setState({ displayName: '', email: '', password: '', contact: '' });
      };
    
      render() {
        const { displayName, email, password, contact } = this.state;
        return (

            <section className = "login">
            <Container><Row className="mb-4">
             <Col md="8">
               <img src={croppped} className="maki" alt="" />
               </Col></Row></Container>
               
               <div className = "loginContainer">
                   
                   <label>Username</label>
                   <input type="text" 
                   name='email'
                   autoFocus required value={email} 
                   onChange={this.handleChange}/>
                   {/* <p className="errorMsg">{emailError}</p> */}
                   
                   <label>Password</label>
                   <input type="password"
                   name='password'
                   required value={password}
                   onChange={this.handleChange}/>
                   {/* <p className = "errorMsg">{passwordError}</p> */}
   
                   <label>Full Name</label>
                   <input type="text"
                   name='displayName' 
                    required value={displayName} 
                    onChange={this.handleChange}/> 
                   
                   <label>Contact No.</label>
                   <input type="text"
                   name='contact'
                   required value={contact} 
                    onChange={this.handleChange}/> 
                   {/* <p className = "errorMsg">{passwordError}</p> */}
   
                   <div className="btnContainer">
                    <button onClick={this.handleSubmit}>Sign Up</button> 
                           <p>Already have an Account? <Link to = "/Login"><span>Sign In</span></Link></p>
                   </div>
               </div>
           </section>

            );
  }
}

export default Signup;
