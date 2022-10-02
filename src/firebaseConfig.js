import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";
import { 
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,

} from "firebase/auth";

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
 const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


 const googleProvider = new GoogleAuthProvider();

//signIn with google
 const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.emal,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// login with email
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

  } catch (err) {
    console.error(err);
    alert(err.message);
  }

};


//register 

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

  } catch (err) {
    console.error(err);
    alert(err.message);
  }

};

const logout = () => {
  signOut(auth);
};

export {
  storage,
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
