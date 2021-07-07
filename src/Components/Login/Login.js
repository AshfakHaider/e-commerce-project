import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        img: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                console.log(signedInUser);
                setLoggedInUser(signedInUser);


            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)

            });
    }

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                img: ''
            }
            setLoggedInUser(signedOutUser)
            console.log(signedOutUser)
        }).catch((error) => {
            // An error happened.
        });
    }
   
       
    return (
        <div className="login">
            Hello guys this is login page
        </div>
    );
};

export default Login;