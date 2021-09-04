import React, {useContext, useState, useEffect} from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import { Router } from "@reach/router";
//import { fire } from './fire';
import fire from './fire';
import Login from './Login';
import Signup from './Signup';
import Hero from './Hero';
import AddRecord from './AddRecord';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
//import {AddRecord} from './components/AddRecord';
import './App.css';
import croppped from './croppped.gif';
import './components/ContactUs.css';
import Display from './components/Display';
import Pdf from './components/Pdf';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import VideoInput from './views/VideoInput';
import ImageInput from './views/ImageInput';
import Home from './views/Home';
import Demo from './Demo';
import Charts from './Charts';
import Cards from './Cards';
import ChartsTwo from './ChartsTwo';
import Modal from './components/Modal';
import { DrawBox } from 'face-api.js/build/commonjs/draw';
//import SignIn from './components/SignIn';
//import SignUp from './components/SignUp';
//import ProfilePage from './components/ProfilePage';
//import UserProvider from "./providers/UserProvider";
//import { UserContext } from "./providers/UserProvider";
//import Application from './components/Application';
//import script from './components/detection/js/script'

function App() {
  //states we'll need
 
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
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


  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    } );
  };
  
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
    } );
  };
  

  const handleLogout = () => {
    fire.auth().signOut();
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

//const user = useContext(UserContext);
   return (
    
     // <div>
      //<Link to="/"></Link>
      
    
    <div className="App">
    {/* <Application /> */}
<Router>

  <Switch>
  {/* <Route path="/SignIn" component={SignIn}></Route>
  <Route path="/SignUp" component={SignUp}></Route>
    <Route path="/ProfilePage" component={ProfilePage}></Route>
  <Route path= "/Hero" component={Hero}></Route>
  <Route path="/ProfilePage" component={ProfilePage}></Route> */}
    <Route path= "/Modal" component={Modal}></Route>
    <Route path= "/ChartsTwo" component={ChartsTwo}></Route>
    <Route path= "/Cards" component={Cards}></Route>
    <Route path= "/Charts" component={Charts}></Route>
    <Route path= "/AddRecord" component={AddRecord}></Route>
    <Route path= "/AboutUs" component={AboutUs}></Route>
    <Route path= "/ContactUS" component={ContactUs}></Route>
    <Route path= "/Display" component={Display}></Route>
    <Route path= "/Demo" component={Demo}></Route>
    <Route path='/edit/:id' component={Edit} />
    <Route path='/create' component={Create} />
    <Route path='/show/:id' component={Show} />
    <Route path= "/Home" component={Home}></Route>
    <Route path= "/VideoInput" component={VideoInput}></Route>
    <Route path= "/ImageInput" component={ImageInput}></Route>
    <Route path= "/Signup" component={Signup}></Route>
    {/* <Application /> */}
  

     {/* user ? 
        <ProfilePage />
      : 
       
       
        <Router>
          <SignUp path="SignUp" />
          <SignIn path= "/" />
        </Router> */}
          

       {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : (
        <Login 
        email={email}
        setEmail={setEmail} 
        password = {password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        //handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        /> ||
        <Signup
        handleSignup={handleSignup} />
        
      )} 


    </Switch>
</Router>
{/* <br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
     </div>
   

    //</div>
  );
}

export default App;
