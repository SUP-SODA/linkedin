import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcsMpYj3xd_rly56yKneHp292gBWNDL1g",
  authDomain: "linkedin-clone-b7f78.firebaseapp.com",
  projectId: "linkedin-clone-b7f78",
  storageBucket: "linkedin-clone-b7f78.appspot.com",
  messagingSenderId: "653389078799",
  appId: "1:653389078799:web:1e2faab894f4b9463d9e7a",
  measurementId: "G-1VWM9PX7R4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };