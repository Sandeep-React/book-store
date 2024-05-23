

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCdVBkLxl0xhSwe_rBKSrp1nE3xEcssDEw",
  authDomain: "book-store-bbb97.firebaseapp.com",
  projectId: "book-store-bbb97",
  storageBucket: "book-store-bbb97.appspot.com",
  messagingSenderId: "753541027428",
  appId: "1:753541027428:web:1a463c04cfbe816ee77171"
};

// const app = firebase.initializeApp(firebaseConfig)
// const myDatabase = firebase.firestore

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const firestore = app.firestore();

export { auth, googleProvider, firestore };
export default app;