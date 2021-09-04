import React, {useState, useEffect} from "react";
import fire from "../fire";

export const Username = () => {
    const [currentUser, setCurrentUser] = useState();
    const provider = new fire.auth().signInWithEmailAndPassword();

    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
    }, []);


    const authWithEmail = () => {
        fire.auth().signInWithEmailAndPassword(provider);
    }

    return (
        <>
        <p>{currentUser.email}</p>
        </>
    )
}