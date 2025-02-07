"use client"
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getDatabase} from "firebase/database";
import  { ref, push, set } from "firebase/database";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const auth = getAuth(app);


function WriteServices(title, description) {
    const reference = ref(database, "services/");
    const newPostRef = push(reference);
    set(newPostRef, {
      serviceTitle : title,
      serviceDescription: description,
    });
  }
  export default WriteServices;


