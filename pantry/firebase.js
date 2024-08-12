// Import the functions you need from the SDKs you need
import {initializeApp } from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbVUcJ36sMEFVPx5LDOgD0uLqbrxHbnqE",
    authDomain: "itemtrackerapp-4f46b.firebaseapp.com",
    projectId: "itemtrackerapp-4f46b",
    storageBucket: "itemtrackerapp-4f46b.appspot.com",
    messagingSenderId: "873362510372",
    appId: "1:873362510372:web:0708c6ff8435c513a37eb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}