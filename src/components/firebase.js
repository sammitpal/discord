import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCpBR5xwc92sP194Te9nSQXDMl1quxuC2k",
    authDomain: "discord-2d584.firebaseapp.com",
    projectId: "discord-2d584",
    storageBucket: "discord-2d584.appspot.com",
    messagingSenderId: "180214616140",
    appId: "1:180214616140:web:bc86ad2ff30144904ae4e9",
    measurementId: "G-7RPV5MQ0ZH"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {database,auth};