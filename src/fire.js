
import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

/*----correct one---------*/
var firebaseConfig = {
  apiKey: "AIzaSyD_heV0GhLPB3yshfR7Z1ipNSxmHR3xDmE",
  authDomain: "login-22617.firebaseapp.com",
  databaseURL: "https://login-22617-default-rtdb.firebaseio.com",
  projectId: "login-22617",
  storageBucket: "login-22617.appspot.com",
  messagingSenderId: "585694719700",
  appId: "1:585694719700:web:4066f2212f053198c49541"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);
  //const storage = firebase.storage().ref();
  //const db = firebase.initializeApp()

  export default fire;

  export const createUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = fire.firestore().doc(`users/${user.uid}`);
    
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const {email} = user;
      const {displayName} = additionalData;
      const {contact} = additionalData;

      try {
        await userRef.set({
          displayName,
          email,
          contact,
        });
      } catch(error) {
        console.log('Error creating User', error);
      }
    }

  };