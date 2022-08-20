// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVZyCuRnodre2XvKlMjxb5GzrQGmW3ACg",
    authDomain: "eshop-660dc.firebaseapp.com",
    databaseURL: "https://eshop-660dc-default-rtdb.firebaseio.com",
    projectId: "eshop-660dc",
    storageBucket: "eshop-660dc.appspot.com",
    messagingSenderId: "186067037598",
    appId: "1:186067037598:web:ddd1b8ea979d460516ba8f",
    measurementId: "G-79S6FWWB6X"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();



export {db, auth}