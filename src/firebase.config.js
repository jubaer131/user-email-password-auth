// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS8mCyOs39-WqkV4jo60Su1STM3Ss2FV4",
  authDomain: "user-email-password-auth-d7a53.firebaseapp.com",
  projectId: "user-email-password-auth-d7a53",
  storageBucket: "user-email-password-auth-d7a53.appspot.com",
  messagingSenderId: "808807417076",
  appId: "1:808807417076:web:a9f64510b659c1a3a24aa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth