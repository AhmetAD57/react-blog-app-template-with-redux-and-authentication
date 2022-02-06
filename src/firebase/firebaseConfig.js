import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth, signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA7ZxfhKrgEeLG7onANYxRx1ZMduvBv1gA",
  authDomain: "react-blog-app-29ca9.firebaseapp.com",
  databaseURL: "https://react-blog-app-29ca9-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-29ca9",
  storageBucket: "react-blog-app-29ca9.appspot.com",
  messagingSenderId: "48301207202",
  appId: "1:48301207202:web:4920c6fe350a21ad6331fb"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

const provider = new GoogleAuthProvider();

export {database as default, provider, signInWithPopup, onAuthStateChanged, getAuth, signOut, firebase}
