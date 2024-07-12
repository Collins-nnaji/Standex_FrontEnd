// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD17ILgfPK_GLYlyXsnxPDGqY7tpv4vPjc",
  authDomain: "jobbackend-fe231.firebaseapp.com",
  projectId: "jobbackend-fe231",
  storageBucket: "jobbackend-fe231.appspot.com",
  messagingSenderId: "739042413151",
  appId: "1:739042413151:web:d53b7920fd23b8030729ea",
  measurementId: "G-LG1825Y5YP",
  databaseURL: "https://jobbackend-fe231.firebaseio.com"  // Add this line for Realtime Database
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const realTimeDb = getDatabase(app); // Initialize Realtime Database

export { db, realTimeDb };
