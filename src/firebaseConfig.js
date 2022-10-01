import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCGqOTMpXCsOJ_JwdguHQ3qC1Xme9ujSrw",
  authDomain: "simpleblog-5802e.firebaseapp.com",
  projectId: "simpleblog-5802e",
  storageBucket: "simpleblog-5802e.appspot.com",
  messagingSenderId: "687461022001",
  appId: "1:687461022001:web:76b7d8de9dbcb8f30bd810",
  measurementId: "G-Y9K9H07JE8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);




