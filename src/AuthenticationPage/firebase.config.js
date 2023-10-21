// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { defineDriver } from "localforage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOjq1DM5nLfkqsDJhSr0eW7kdE6bh0n7I",
  authDomain: "techzoo-49879.firebaseapp.com",
  projectId: "techzoo-49879",
  storageBucket: "techzoo-49879.appspot.com",
  messagingSenderId: "499017937004",
  appId: "1:499017937004:web:5f0a0faa642df5f088a849",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
