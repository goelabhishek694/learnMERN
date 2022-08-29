// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANfKCHVWBHXGSNEx1yT1vy0aGsKoB50tc",
  authDomain: "insta-reels-fjp5.firebaseapp.com",
  projectId: "insta-reels-fjp5",
  storageBucket: "insta-reels-fjp5.appspot.com",
  messagingSenderId: "905968789414",
  appId: "1:905968789414:web:9d608bca489b12f1c05167",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage,db};

