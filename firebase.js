// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' ///auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLFf--qbwJA9sIJ1QNSiuG5wFdbIZd0dE",
  authDomain: "file-sharing-702d5.firebaseapp.com",
  projectId: "file-sharing-702d5",
  storageBucket: "file-sharing-702d5.appspot.com",
  messagingSenderId: "1028745321506",
  appId: "1:1028745321506:web:922bea359aea751ef1be7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };