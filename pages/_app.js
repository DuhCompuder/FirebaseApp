import '../styles/globals.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcPZArUkITCg6RnAxhAEW0-xVkBmoEXZY",
  authDomain: "testnexthosting.firebaseapp.com",
  projectId: "testnexthosting",
  storageBucket: "testnexthosting.appspot.com",
  messagingSenderId: "1003104061498",
  appId: "1:1003104061498:web:a003189d16eae6eff3cd03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
