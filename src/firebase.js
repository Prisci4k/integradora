// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZkSsnoY5D4PXJwJVfWuQDm_ddF-wJh68",
  authDomain: "sireli-7595f.firebaseapp.com",
  databaseURL: "https://sireli-7595f-default-rtdb.firebaseio.com",
  projectId: "sireli-7595f",
  storageBucket: "sireli-7595f.appspot.com",
  messagingSenderId: "980490045809",
  appId: "1:980490045809:web:e68e711d5ec00014b34ed0",
  measurementId: "G-P4MNLG7SHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);