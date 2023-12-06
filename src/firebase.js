// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0t_Pdy9Qn8C353Alk21I7HgekEgWIIlw",
    authDomain: "proyectodiscord-48a24.firebaseapp.com",
    projectId: "proyectodiscord-48a24",
    storageBucket: "proyectodiscord-48a24.appspot.com",
    messagingSenderId: "914678019206",
    appId: "1:914678019206:web:471c9cea684d3caee28d07",
    measurementId: "G-FY07Y1XGYH"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
