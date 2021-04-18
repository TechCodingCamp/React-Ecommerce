import firebase from '@firebase/app';
require('@firebase/auth');
require('@firebase/firestore');
require('@firebase/storage');
const firebaseConfig = {
    apiKey: "AIzaSyCtx7hADwTRxs_5MVBtc9eWrjcqMYit8cw",
    authDomain: "react-applciation.firebaseapp.com",
    projectId: "react-applciation",
    storageBucket: "react-applciation.appspot.com",
    messagingSenderId: "149710829843",
    appId: "1:149710829843:web:8b7ab11728dd8b226402e6",
    measurementId: "G-L33PRCRBLY"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;