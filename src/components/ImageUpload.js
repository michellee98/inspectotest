/*
import {useState} from 'react';
import fire from '../fire';

function ImageUpload() {
  const [state,setState] = useState({
     files:null
  })
  const handleChange=(files)=>{
    setState({
      files:files
    })
  }
  const handleSave=()=>{
    let bucketName = 'images';
    let file = state.files[0];
    let storageRef = fire.storage().ref(`${bucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(fire.storage.TaskEvent.STATE_CHANGED,function(){
      let downloadURL = uploadTask.snapshot.getDownLoadURL()
    })
  }
  const showImage=()=>{
    let storageRef = fire.storage().ref();
    let spaceRef = storageRef.child('images/'+state.files[0].name);
    storageRef.child('images/'+state.files[0].name).getDownloadURL().then((url)=>{
      document.getElementById('new_image').src = url;
    })
  }
  return (
    <div className="App">
      <input type="file" onChange={(e)=>{
        handleChange(e.target.files);
      }}/>
      <button type="submit" class="btn btn-success" className="butt" onClick={handleSave}>Submit</button>
      {/* <button onClick={showImage}>Click here to view to the view the image</button>
      <img id="new_image"/> 
    </div>
  );
}

export default ImageUpload;
*/
import React, { useEffect } from "react";
import fire from "../fire";

const db = fire.firestore();

function ImageUpload() {
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
    await db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="NAME" />
        <button>Submit</button>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.name}>
              <img width="100" height="100" src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ImageUpload;