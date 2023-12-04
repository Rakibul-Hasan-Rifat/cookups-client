// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv9E7wLYl11nbCl5p30pncFdev0bIlyGQ",
  authDomain: "cookups-client.firebaseapp.com",
  projectId: "cookups-client",
  storageBucket: "cookups-client.appspot.com",
  messagingSenderId: "317447073966",
  appId: "1:317447073966:web:5df2ac1c219ffb8fd13d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;