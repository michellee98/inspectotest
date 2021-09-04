import React from 'react';
import croppped from './croppped.gif';
import Signup from './Signup';
import {Link} from 'react-router-dom';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError, 
    } = props;

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

                <div className="btnContainer">
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an Account? <Link to = "/Signup"><span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></Link></p>
                      
                </div>
            </div>
        </section>
    )
}

export default Login;