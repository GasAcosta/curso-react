import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAT6dPS81A4ayTCQZ6HMIkvrCa03oDBd8s",
  authDomain: "laburanbanda.firebaseapp.com",
  projectId: "laburanbanda",
  storageBucket: "laburanbanda.appspot.com",
  messagingSenderId: "656114738969",
  appId: "1:656114738969:web:3327c233bf301406ff8788",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
