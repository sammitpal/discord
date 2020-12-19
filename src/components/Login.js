import React, {useEffect} from 'react'
import {auth} from './firebase'
import firebase from 'firebase'
import './Login.css'
import { useStateValue } from './StateProvider'
function Login() {
    const [{user}, dispatch] = useStateValue();
    useEffect(()=>{
        auth.onAuthStateChanged(authUser => {
          console.log("USER ->", authUser);
          if(authUser){
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
          }
          else{
            dispatch({
              type: 'SET_USER',
              user: null
            })
          }
        })
      },[])
      var provider = new firebase.auth.GoogleAuthProvider();
      const gsign = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }
    return (
        <div className="discordLogin">
            <img src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png" alt="" className="discord_logo"/>
            <button onClick={gsign}>Sign in with Google</button>
        </div>
    )
}

export default Login
