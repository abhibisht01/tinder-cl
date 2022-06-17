// Initialize Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDZXepF_zuWq_0xKEytMz-GnJIb_N8esCQ",
    authDomain: "tinder-cl-21460.firebaseapp.com",
    projectId: "tinder-cl-21460",
    storageBucket: "tinder-cl-21460.appspot.com",
    messagingSenderId: "817948299740",
    appId: "1:817948299740:web:1f914006d493c684553f19",
    measurementId: "G-YSL2GP1FLP"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();    // for database
const auth = firebase.auth();    //for authentication
const storage = firebase.storage(); //for storage in the databse.
const provider = new firebase.auth.GoogleAuthProvider();// for login google authentication

export { auth, storage, provider };
export default database;